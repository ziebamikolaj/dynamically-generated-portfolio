import type { Metadata } from "next";

import Navbar from "@/components/Navbar";

import { Providers } from "./providers";

import "../index.css";

export const metadata: Metadata = {
  title: "Mikołaj Zięba - Portfolio",
  description:
    "My name is Mikołaj and this is my fully responsive portfolio website that generates itself based on my github profile. I am a Fullstack Developer with a passion for creating beautiful and functional websites. I am currently looking for a new job opportunity. Feel free to contact me if you are interested in working with me",
};
export const revalidate = 60;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Providers
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
