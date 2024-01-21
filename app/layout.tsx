import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Martin Zutel | Personal Portfolio',
  description: 'Martin  Zutel is a full-stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-slate-900 text-gray-200 relative`}>
        
        <div className=' bg-purple-400 absolute top-[-4rem] right-[-20rem] h-[31.25rem] w-[38.25rem] rounded-full blur-[16rem]
         sm:w-[68.75rem] transition-all duration-300 -z-10'></div>

        <div className=' bg-blue-500 absolute top-[25rem]  left-[-30rem] h-[31.25rem] w-[38.25rem] rounded-full blur-[16rem]
         sm:w-[68.75rem] md:left[-28rem] lg:left[-26rem] xl:left[-14rem] 2xl:lef[-4]  transition-all duration-300 -z-10'></div>
        {children}
      </body>
    </html>
  )
}
