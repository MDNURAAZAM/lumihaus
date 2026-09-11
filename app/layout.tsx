import type { Metadata, Viewport } from "next";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration/ServiceWorkerRegistration";
import InstallPrompt from "@/components/InstallPrompt/InstallPrompt";
export const metadata: Metadata = {
  title: "My PWA",
  description: "My Next.js Progressive Web App",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <InstallPrompt />
      </body>
    </html>
  );
}
