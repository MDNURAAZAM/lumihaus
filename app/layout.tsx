import type { Metadata, Viewport } from "next";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration/ServiceWorkerRegistration";

export const metadata: Metadata = {
  title: "Lumihaus — Modern Beauty Essentials",
  description: "Effortless cosmetics designed to enhance your natural beauty.",
  applicationName: "Lumihaus",
  appleWebApp: {
    capable: true,
    title: "Lumihaus",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4729a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
