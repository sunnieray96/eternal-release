import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eternal Release · Somatic Exploration",
  description: "Helping people find safety in their bodies through somatic release, fascia work, and nervous system regulation.",
};

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" className="bg-[#FCFAF7]">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FCFAF7]">{children}</body>
    </html>
  );
}
