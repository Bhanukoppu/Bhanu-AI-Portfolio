import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Bhanu Prakash Koppu | AI/ML Engineer",
  description:
    "Portfolio of Bhanu Prakash Koppu — AI/ML Engineer, Data Analyst, and Python Developer. Projects in NLP, RAG, LangChain, and data validation.",
  metadataBase: new URL("https://your-domain.example"), // TODO: replace with real domain
  openGraph: {
    title: "Bhanu Prakash Koppu | AI/ML Engineer",
    description:
      "AI/ML Engineer, Data Analyst, and Python Developer. Projects in NLP, RAG, LangChain, and data validation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} bg-ink text-ivory font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
