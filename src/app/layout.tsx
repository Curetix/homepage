import { ClientOnly } from "~/components/client-only";
import { ThemeSwitcher } from "~/components/theme-switcher";
import { Skeleton } from "~/components/ui/skeleton";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Outfit } from "next/font/google";
import { css, cx } from "styled-system/css";
import "./globals.css";
import { Box } from "styled-system/jsx";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://curetix.eu"),
  title: "Curetix",
  description: "Homepage of Curetix, a developer currently focused on web technologies.",
  openGraph: {
    images: {
      url: "/api/og",
      width: 1200,
      height: 600,
    },
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://curetix.eu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={css({ scrollBehavior: "smooth" })}>
      <body
        className={cx(font.className, css({ minHeight: "100vh", fontSmoothing: "antialiased" }))}>
        {/* Disable Dark Reader statically */}
        <meta name="darkreader-lock" />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Box position="absolute" top={3} right={3}>
            <ClientOnly fallback={<Skeleton width="40px" height="40px" />}>
              <ThemeSwitcher />
            </ClientOnly>
          </Box>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
