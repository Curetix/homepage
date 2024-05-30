import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import { ClientOnly } from "@/components/client-only";
import { Skeleton } from "@/components/ui/skeleton";
import { ThemeSwitcher } from "@/components/theme-switcher";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Curetix",
  description: "Homepage of Curetix, a developer currently focused on web technologies.",
  openGraph: {
    images: {
      url: "/api/og",
      width: 1200,
      height: 600,
    },
  },
  other: {
    "darkreader-lock": "",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <ClientOnly fallback={<Skeleton className="absolute top-3 right-3 w-[40px] h-[40px]" />}>
            <ThemeSwitcher className="absolute top-3 right-3" />
          </ClientOnly>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
