import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LumiHaus",
    short_name: "LumiHaus",
    description:
      "Effortless cosmetics designed to enhance your natural beauty.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111827",
    icons: [
      {
        src: "/public/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/public/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/public/icons/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
