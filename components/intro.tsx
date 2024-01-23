import React from 'react'
import Image from 'next/image'

export default function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div>
                <Image 
                    src="/images/martinzutel.png"
                    alt='Martin Zutel'
                    width={200}
                    height={200}
                    quality={95}
                    priority={true}
                    className='h-40 w-40 rounded-full object-cover border-[0.5rem] shadow-xl border-black'
                />
            </div>
        </div>
    </section>
  )
}
