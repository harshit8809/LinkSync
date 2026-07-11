import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono, Geist } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/src/providers/ReduxProvider";
import AuthProvider from "@/src/providers/AuthProvider";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "LinkSync — One link for every channel",
  description:
    "Gather every social profile — Instagram, LinkedIn, GitHub, WhatsApp, Snapchat, your portfolio — behind a single shareable link.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}
      data-scroll-behavior="smooth"
    >
      <body
        className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable} font-body antialiased`}
      >
        <ReduxProvider>
          <AuthProvider>
            <TooltipProvider>
              {children}
            </TooltipProvider>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}



