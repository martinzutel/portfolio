"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.25,
          }}
        >
          <Image
            src="/images/martinzutel.png"
            alt='Martin Zutel'
            width={200}
            height={200}
            quality={95}
            priority={true}
            className='h-32 w-32 rounded-full object-cover border-none shadow-lg shadow-black/[0.3]'
          />
        </motion.div>

      </div>

      <motion.h1
        className="mb-10 mt-8 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold text-custom-red">Hello, I&apos;m Martin.</span> I&apos;m a{" "}
        <span className="font-bold text-custom-red" >programming student</span> on my way to becoming a{" "}
        <span className="font-bold text-custom-red">full-stack developer</span>. I enjoy learning about <span className="font-bold text-custom-red" >design</span>, <span className="font-bold text-custom-red">coding</span>, and <span className="font-bold text-custom-red">web development</span>.
        <span>test up 2</span>
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.25,
        }}

      >
        <Link href="#contact" className='  bg-custom-red rounded-full flex items-center px-4 py-1.5 shadow-md shadow-black/[0.3] outline-none 
        focus:scale-110 hover:scale-110  hover:bg-neutral-900 active:scale-105'>
          Get in touch!
        </Link>
      </motion.div>


    </section>
  )
}
