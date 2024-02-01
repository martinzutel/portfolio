import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Martin Zutel | Personal Portfolio",
  description: "Martin  Zutel is a full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body
        className={`${inter.className}  bg-black text-gray-200  relative h-[5000px] pt-28 sm:pt-36 `}
        style={{ overflowX: "hidden" }}
      >
        <div
          className=" bg-custom-red absolute top-[-4rem] right-[-60rem] h-[31.25rem] w-[60.25rem] rounded-full blur-[30rem]
         sm:w-[68.75rem] transition-all duration-300 -z-10"
        ></div>

        <div
          className="  bg-custom-red  absolute top-[25rem]  left-[-60rem] h-[31.25rem] w-[60.25rem] rounded-full blur-[30rem]
         sm:w-[68.75rem] md:left[-28rem] lg:left[-26rem] xl:left[-14rem] 2xl:lef[-4rem]  transition-all duration-300 -z-10"
        ></div>
        
        <Header />

        {children}
      </body>
    </html>
  );
}



  {/*<div className="flex absolute font-extrabold text-5xl sm:text-9xl">
  martin zutel
  </div>*/}