import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Martin Zutel | Personal Portfolio",
  description: "Martin  Zutel is a student web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" overflow-x-hidden">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </head>
      <body
        className={`${inter.className}  bg-zinc-950 text-gray-200  relative h-[5000px] pt-28 sm:pt-36 overflow-x-hidden`}
        style={{ overflowX: "hidden" }}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
