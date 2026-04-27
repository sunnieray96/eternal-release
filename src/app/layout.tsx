import "./globals.css";

export const metadata = {
  title: "Eternal Release",
  description: "Holistic nervous system healing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}