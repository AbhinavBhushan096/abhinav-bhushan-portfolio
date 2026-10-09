import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";
import { ThemeProvider, ThemeScript } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} | ${site.title}`,
  description: site.coreMessage,
  keywords: [
    "Cloud Engineer",
    "DevOps Engineer",
    "Azure",
    "AWS",
    "Infrastructure",
    "Disaster Recovery",
    "Full-Stack Developer",
    "Abhinav Bhushan",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description: site.coreMessage,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.coreMessage,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
