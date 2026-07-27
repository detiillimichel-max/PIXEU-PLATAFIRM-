export type OioSyncFunctionName =
  | "academic-earth-sync-clips"
  | "al-jazeera-media-sync-clips"
  | "ap-video-metadata-sync-clips"
  | "archive-animation-sync-clips"
  | "archive-community-video-sync-clips"
  | "archive-cultural-collections-sync-clips"
  | "archive-feature-films-sync-clips"
  | "archive-movie-trailers-sync-clips"
  | "archive-sports-sync-clips"
  | "archive-tv-news-sync-clips"
  | "australian-screen-sync-clips"
  | "bbc-programme-sync-clips"
  | "beachfront-broll-sync-clips"
  | "blender-movies-sync-clips"
  | "blender-studio-sync-clips"
  | "british-pathe-sync-clips"
  | "c-span-video-library-sync-clips"
  | "cern-document-server-sync-clips"
  | "cern-media-archive-sync-clips"
  | "clipstill-sync-clips"
  | "coursera-public-catalog-sync-clips"
  | "coverr-feed-sync-clips"
  | "creativecommons-search-sync-clips"
  | "daily"
  | "dareful-sync-clips"
  | "digital-public-library-of-america-sync-clips"
  | "dw-media-center-sync-clips"
  | "edx-public-catalog-sync-clips"
  | "elephants-dream-sync-clips"
  | "elevenlabs"
  | "esa-multimedia-sync-clips"
  | "esa-web-tv-sync-clips"
  | "european-commission-audiovisual-service-sync-clips"
  | "europeana-sync-clips"
  | "europeana-video-sync-clips"
  | "facebook"
  | "firebase"
  | "flickr-cc-videos-sync-clips"
  | "france24-media-sync-clips"
  | "free-stock-video-sync-clips"
  | "futurelearn-public-courses-sync-clips"
  | "gemini"
  | "gnews"
  | "groq"
  | "harvard-online-learning-sync-clips"
  | "ignitemotion-sync-clips"
  | "ina-mediapro-sync-clips"
  | "internet2-media-sync-clips"
  | "khan-academy-videos-sync-clips"
  | "library-of-congress-sync-clips"
  | "libretexts-media-sync-clips"
  | "life-of-vids-sync-clips"
  | "mazwai-sync-clips"
  | "mit-open-learning-video-sync-clips"
  | "mit-opencourseware-sync-clips"
  | "mixkit-feed-sync-clips"
  | "motion-places-sync-clips"
  | "moving-image-archive-sync-clips"
  | "nasa"
  | "nasa-scientific-visualization-studio-sync-clips"
  | "national-archives-sync-clips"
  | "nfb-canada-sync-clips"
  | "nhk-world-media-sync-clips"
  | "oio-master-sync"
  | "open-culture-video-sync-clips"
  | "open-media-library-sync-clips"
  | "Open-Meteo"
  | "openlearn-open-university-sync-clips"
  | "openverse-sync-clips"
  | "pbs-video-sync-clips"
  | "PeerTube"
  | "pexels"
  | "pikwizard-video-sync-clips"
  | "prelinger-archives-sync-clips"
  | "public-domain-movies-sync-clips"
  | "public-domain-torrents-sync-clips"
  | "reuters-media-sync-clips"
  | "screen-australia-sync-clips"
  | "smithsonian-open-access-sync-clips"
  | "splitshire-videos-sync-clips"
  | "stanford-online-media-sync-clips"
  | "ted-talks-rss-sync-clips"
  | "tedx-rss-sync-clips"
  | "test-vault"
  | "tmdb"
  | "twitch"
  | "uc-berkeley-webcast-sync-clips"
  | "un-web-tv-sync-clips"
  | "us-national-archives-catalog-sync-clips"
  | "user-profile"
  | "vapid"
  | "videezy-public-sync-clips"
  | "vidsplay-sync-clips"
  | "voice-of-america-sync-clips"
  | "wikimedia-education-sync-clips"
  | "wikimedia-sync-clips"
  | "Wikip-dia"
  | "xiph-media-sync-clips"
  | "yale-open-courses-sync-clips"
  | "youtube";

export type OioSyncBlockKey =
  | "academicAndNews"
  | "mediaAndPublicCatalogs"
  | "integrationsAndPlatforms"
  | "cultureEducationAndAI"
  | "universitiesAndLibraries"
  | "nasaAndMasterContent"
  | "openEducationAndStock"
  | "tedTwitchAndUtilities"
  | "wikimediaAndYouTube";

export type OioSyncFunctionMeta = {
  name: OioSyncFunctionName;
  label: string;
  block: OioSyncBlockKey;
  description: string;
  critical?: boolean;
};

export const OIO_FUNCTION_BLOCKS: Record<OioSyncBlockKey, OioSyncFunctionName[]> = {
  academicAndNews: [
    "academic-earth-sync-clips",
    "al-jazeera-media-sync-clips",
    "ap-video-metadata-sync-clips",
    "archive-animation-sync-clips",
    "archive-community-video-sync-clips",
    "archive-cultural-collections-sync-clips",
    "archive-feature-films-sync-clips",
    "archive-movie-trailers-sync-clips",
    "archive-sports-sync-clips",
    "archive-tv-news-sync-clips",
    "australian-screen-sync-clips",
  ],
  mediaAndPublicCatalogs: [
    "bbc-programme-sync-clips",
    "beachfront-broll-sync-clips",
    "blender-movies-sync-clips",
    "blender-studio-sync-clips",
    "british-pathe-sync-clips",
    "c-span-video-library-sync-clips",
    "cern-document-server-sync-clips",
    "cern-media-archive-sync-clips",
    "clipstill-sync-clips",
    "coursera-public-catalog-sync-clips",
    "coverr-feed-sync-clips",
    "creativecommons-search-sync-clips",
  ],
  integrationsAndPlatforms: [
    "daily",
    "dareful-sync-clips",
    "digital-public-library-of-america-sync-clips",
    "dw-media-center-sync-clips",
    "edx-public-catalog-sync-clips",
    "elephants-dream-sync-clips",
    "elevenlabs",
    "esa-multimedia-sync-clips",
    "esa-web-tv-sync-clips",
    "european-commission-audiovisual-service-sync-clips",
  ],
  cultureEducationAndAI: [
    "europeana-sync-clips",
    "europeana-video-sync-clips",
    "facebook",
    "firebase",
    "flickr-cc-videos-sync-clips",
    "france24-media-sync-clips",
    "free-stock-video-sync-clips",
    "futurelearn-public-courses-sync-clips",
    "gemini",
    "gnews",
    "groq",
  ],
  universitiesAndLibraries: [
    "harvard-online-learning-sync-clips",
    "ignitemotion-sync-clips",
    "ina-mediapro-sync-clips",
    "internet2-media-sync-clips",
    "khan-academy-videos-sync-clips",
    "library-of-congress-sync-clips",
    "libretexts-media-sync-clips",
    "life-of-vids-sync-clips",
    "mazwai-sync-clips",
    "mit-open-learning-video-sync-clips",
    "mit-opencourseware-sync-clips",
  ],
  nasaAndMasterContent: [
    "mixkit-feed-sync-clips",
    "motion-places-sync-clips",
    "moving-image-archive-sync-clips",
    "nasa",
    "nasa-scientific-visualization-studio-sync-clips",
    "national-archives-sync-clips",
    "nfb-canada-sync-clips",
    "nhk-world-media-sync-clips",
    "oio-master-sync",
    "open-culture-video-sync-clips",
    "open-media-library-sync-clips",
    "Open-Meteo",
  ],
  openEducationAndStock: [
    "openlearn-open-university-sync-clips",
    "openverse-sync-clips",
    "pbs-video-sync-clips",
    "PeerTube",
    "pexels",
    "pikwizard-video-sync-clips",
    "prelinger-archives-sync-clips",
    "public-domain-movies-sync-clips",
    "public-domain-torrents-sync-clips",
    "reuters-media-sync-clips",
    "screen-australia-sync-clips",
    "smithsonian-open-access-sync-clips",
  ],
  tedTwitchAndUtilities: [
    "splitshire-videos-sync-clips",
    "stanford-online-media-sync-clips",
    "ted-talks-rss-sync-clips",
    "tedx-rss-sync-clips",
    "test-vault",
    "tmdb",
    "twitch",
    "uc-berkeley-webcast-sync-clips",
    "un-web-tv-sync-clips",
    "us-national-archives-catalog-sync-clips",
    "user-profile",
    "vapid",
  ],
  wikimediaAndYouTube: [
    "videezy-public-sync-clips",
    "vidsplay-sync-clips",
    "voice-of-america-sync-clips",
    "wikimedia-education-sync-clips",
    "wikimedia-sync-clips",
    "Wikip-dia",
    "xiph-media-sync-clips",
    "yale-open-courses-sync-clips",
    "youtube",
  ],
};

const META_BY_FUNCTION = Object.entries(OIO_FUNCTION_BLOCKS).flatMap(([block, functions]) =>
  functions.map((name) => ({
    name,
    block: block as OioSyncBlockKey,
    label: name
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()),
    description: `Sincroniza conteúdo da função ${name}.`,
    critical: name === "oio-master-sync",
  }))
);

export const OIO_SYNC_REGISTRY: Record<OioSyncFunctionName, OioSyncFunctionMeta> = META_BY_FUNCTION.reduce(
  (acc, item) => {
    acc[item.name] = item;
    return acc;
  },
  {} as Record<OioSyncFunctionName, OioSyncFunctionMeta>
);

export const OIO_SYNC_BLOCK_LABELS: Record<OioSyncBlockKey, string> = {
  academicAndNews: "Academic & News",
  mediaAndPublicCatalogs: "Media & Public Catalogs",
  integrationsAndPlatforms: "Integrations & Platforms",
  cultureEducationAndAI: "Culture, Education & AI",
  universitiesAndLibraries: "Universities & Libraries",
  nasaAndMasterContent: "NASA & Master Content",
  openEducationAndStock: "Open Education & Stock",
  tedTwitchAndUtilities: "TED, Twitch & Utilities",
  wikimediaAndYouTube: "Wikimedia & YouTube",
};

export const OIO_SYNC_BLOCK_ORDER: OioSyncBlockKey[] = [
  "academicAndNews",
  "mediaAndPublicCatalogs",
  "integrationsAndPlatforms",
  "cultureEducationAndAI",
  "universitiesAndLibraries",
  "nasaAndMasterContent",
  "openEducationAndStock",
  "tedTwitchAndUtilities",
  "wikimediaAndYouTube",
];

export function getFunctionsByBlock(block: OioSyncBlockKey) {
  return OIO_FUNCTION_BLOCKS[block].map((name) => OIO_SYNC_REGISTRY[name]);
}

export function getAllFunctionMeta() {
  return OIO_SYNC_BLOCK_ORDER.flatMap(getFunctionsByBlock);
}
