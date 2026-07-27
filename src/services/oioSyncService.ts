import { supabase } from "@/integrations/supabase/client";
import {
  OIO_SYNC_REGISTRY,
  OIO_FUNCTION_BLOCKS,
  OIO_SYNC_BLOCK_ORDER,
  type OioSyncBlockKey,
  type OioSyncFunctionName,
} from "./oioSyncRegistry";

export { OIO_FUNCTION_BLOCKS, OIO_SYNC_REGISTRY, OIO_SYNC_BLOCK_ORDER };

export async function triggerSyncFunction(
  functionName: OioSyncFunctionName,
  payload: Record<string, unknown> = {}
) {
  try {
    const { data, error } = await supabase.functions.invoke(functionName, {
      body: {
        triggered_at: new Date().toISOString(),
        ...payload,
      },
    });

    if (error) throw error;
    return { success: true, data };
  } catch (err: any) {
    console.error(`Erro ao disparar a função ${functionName}:`, err);
    return { success: false, error: err?.message || "Erro desconhecido" };
  }
}

export async function triggerSyncBlock(block: OioSyncBlockKey) {
  const functions = OIO_FUNCTION_BLOCKS[block];
  const results = await Promise.all(
    functions.map(async (functionName) => ({
      functionName,
      ...(await triggerSyncFunction(functionName)),
    }))
  );

  return {
    block,
    total: results.length,
    successCount: results.filter((item) => item.success).length,
    failureCount: results.filter((item) => !item.success).length,
    results,
  };
}

export async function triggerMasterSync() {
  return triggerSyncFunction("oio-master-sync", {
    scope: "full",
    blocks: OIO_SYNC_BLOCK_ORDER,
  });
}

export function getSyncMeta(functionName: OioSyncFunctionName) {
  return OIO_SYNC_REGISTRY[functionName];
}
