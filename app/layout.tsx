import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-grotesk",
});

export const metadata = {
  title: "Sangeeth Lakshan — Software Engineer",
  description: "Futuristic developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-[#0B0B0D] text-[#EDEDED]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
