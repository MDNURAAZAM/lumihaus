import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lumihaus",
    short_name: "Lumihaus",
    description: "Modern beauty essentials made luminous.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fff8fa",
    theme_color: "#f4729a",
    orientation: "portrait",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
