import React, { useMemo, useState } from "react";
import {
  OIO_SYNC_BLOCK_ORDER,
  OIO_SYNC_BLOCK_LABELS,
  OIO_FUNCTION_BLOCKS,
  triggerMasterSync,
  triggerSyncBlock,
  triggerSyncFunction,
} from "@/services/oioSyncService";
import { getFunctionsByBlock } from "@/services/oioSyncRegistry";
import type { OioSyncBlockKey, OioSyncFunctionName } from "@/services/oioSyncRegistry";

type LoadingMap = Record<string, boolean>;

export const OioSyncPanel: React.FC = () => {
  const [loadingMap, setLoadingMap] = useState<LoadingMap>({});
  const [logs, setLogs] = useState<string[]>([]);
  const [lastBlockResult, setLastBlockResult] = useState<{
    block: OioSyncBlockKey;
    total: number;
    successCount: number;
    failureCount: number;
  } | null>(null);

  const totalFunctions = useMemo(
    () => Object.values(OIO_FUNCTION_BLOCKS).reduce((acc, block) => acc + block.length, 0),
    []
  );

  const addLog = (message: string) => {
    setLogs((prev) => [`[${new Date().toLocaleTimeString()}] ${message}`, ...prev.slice(0, 29)]);
  };

  const setButtonLoading = (key: string, isLoading: boolean) => {
    setLoadingMap((prev) => ({
      ...prev,
      [key]: isLoading,
    }));
  };

  const handleTriggerFunction = async (name: OioSyncFunctionName) => {
    setButtonLoading(name, true);
    addLog(`Iniciando sincronização: ${name}`);

    const result = await triggerSyncFunction(name);

    if (result.success) {
      addLog(`Sucesso: ${name}`);
    } else {
      addLog(`Falha em ${name}: ${result.error}`);
    }

    setButtonLoading(name, false);
  };

  const handleTriggerBlock = async (block: OioSyncBlockKey) => {
    setButtonLoading(`block:${block}`, true);
    addLog(`Disparando bloco: ${OIO_SYNC_BLOCK_LABELS[block]}`);

    const result = await triggerSyncBlock(block);
    setLastBlockResult({
      block: result.block,
      total: result.total,
      successCount: result.successCount,
      failureCount: result.failureCount,
    });

    addLog(
      `Bloco ${OIO_SYNC_BLOCK_LABELS[block]} concluído: ${result.successCount}/${result.total} sucessos.`
    );

    setButtonLoading(`block:${block}`, false);
  };

  const handleMasterSync = async () => {
    setButtonLoading("oio-master-sync", true);
    addLog("Executando oio-master-sync...");

    const result = await triggerMasterSync();

    if (result.success) {
      addLog("oio-master-sync executado com êxito.");
    } else {
      addLog(`Falha no oio-master-sync: ${result.error}`);
    }

    setButtonLoading("oio-master-sync", false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-wide">Painel de Sincronização OIO</h2>
          <p className="text-sm text-gray-400">
            Gerenciador modular das {totalFunctions} Edge Functions de mídia, educação e dados públicos.
          </p>
        </div>
        <button
          onClick={handleMasterSync}
          disabled={!!loadingMap["oio-master-sync"]}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-lg hover:opacity-90 transition-all disabled:opacity-50"
        >
          {loadingMap["oio-master-sync"] ? "Executando Master..." : "⚡ Disparar Master Sync"}
        </button>
      </div>

      <div className="space-y-6 max-h-[560px] overflow-y-auto pr-2 custom-scrollbar">
        {OIO_SYNC_BLOCK_ORDER.map((blockKey) => {
          const blockFunctions = getFunctionsByBlock(blockKey);
          const isBlockLoading = !!loadingMap[`block:${blockKey}`];

          return (
            <div key={blockKey} className="p-4 rounded-xl bg-black/20 border border-white/5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                    {OIO_SYNC_BLOCK_LABELS[blockKey]} ({blockFunctions.length})
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Execução em lote do bloco inteiro.
                  </p>
                </div>

                <button
                  onClick={() => handleTriggerBlock(blockKey)}
                  disabled={isBlockLoading}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-500/20 border border-cyan-400/40 hover:bg-cyan-500/30 disabled:opacity-50"
                >
                  {isBlockLoading ? "Executando bloco..." : "Executar bloco"}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {blockFunctions.map((meta) => (
                  <button
                    key={meta.name}
                    onClick={() => handleTriggerFunction(meta.name)}
                    disabled={!!loadingMap[meta.name]}
                    className={`text-xs text-left px-3 py-2 rounded-lg border transition-all truncate ${
                      loadingMap[meta.name]
                        ? "bg-cyan-500/20 border-cyan-400 animate-pulse"
                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                    }`}
                    title={meta.description}
                  >
                    <div className="font-medium truncate">{meta.label}</div>
                    <div className="text-[10px] text-gray-400 truncate">{meta.name}</div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {lastBlockResult && (
        <div className="mt-5 p-4 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-sm">
          <div className="font-semibold text-cyan-300 mb-1">Último bloco executado</div>
          <div className="text-gray-200">
            {OIO_SYNC_BLOCK_LABELS[lastBlockResult.block]} · {lastBlockResult.successCount}/{lastBlockResult.total} sucessos · {lastBlockResult.failureCount} falhas
          </div>
        </div>
      )}

      <div className="mt-6 p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs">
        <div className="text-gray-400 mb-2 font-semibold">Logs de Execução:</div>
        <div className="h-28 overflow-y-auto space-y-1 text-gray-300">
          {logs.length === 0 ? (
            <span className="text-gray-500 italic">Nenhuma execução recente...</span>
          ) : (
            logs.map((log, index) => <div key={index}>{log}</div>)
          )}
        </div>
      </div>
    </div>
  );
};
