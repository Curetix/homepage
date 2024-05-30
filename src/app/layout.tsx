import type { ReactNode } from "react";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ControlButtonsGroup } from "@/components/control-buttons-group";
import type { Metadata } from "next";

import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Curetix",
  description: "Homepage of Curetix, a developer currently focused on web technologies.",
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
          <ControlButtonsGroup className="absolute top-3 right-3" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
