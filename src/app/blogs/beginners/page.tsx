'use client'
import BlurUp from '@/components/Blurup';
import { Particles } from '@/components/ui/particles'
import { Dot } from 'lucide-react';
import React, { useState } from 'react'
import { MdDateRange } from 'react-icons/md';

function page() {
     const [color, setColor] = useState("#ffffff");
  return (
    <main className="relative flex min-h-screen w-full  overflow-hidden pt-20">

    <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
        color={color}
      />
      <BlurUp>
        <div className=' px-5 md:px-80 mt-20 flex flex-col'>
            <h2 className='text-2xl md:text-4xl'>   A Beginner’s Guide to Starting a Developer Journey in 2025</h2>
         
            <p className='pt-5 flex items-center gap-3 text-xl text-gray-300'> <MdDateRange  size={30}/>Jan 2025</p>
            <section className='border p-5 rounded mt-5 '>
                <h2 className='md:text-xl'> <span className='pl-5'></span>    The tech world is growing faster than ever, and 2025 is one of the best times to start your journey as a developer. Whether you dream of building websites, mobile apps, or AI systems, the opportunities in the IT industry are endless. But the real challenge? Knowing where to begin.</h2>
                <p className='md:text-xl'>Becoming a developer doesn’t start with learning a programming language — it starts with curiosity and consistency. Here’s your starting roadmap:</p>
                <div className='pl-5 pt-5'>
                    <ul className='flex flex-col gap-2 md:text-xl'>
                        <li className='flex gap-2'> <Dot/>Step 1: Learn the basics of how the web and computers work.</li>
                         <li className='flex gap-2'> <Dot/>Step 2: Start with HTML, CSS, and JavaScript to understand how websites are made.</li>
                          <li className='flex gap-2'> <Dot/>Step 3: Build small projects — a portfolio site, a to-do app, a calculator.</li>
                           <li className='flex gap-2'> <Dot/>Step 4: Gradually explore backend technologies like Node.js, Express, and databases (MongoDB, PostgreSQL).</li>
                      <li className='flex gap-2'> <Dot/> Learn Git, GitHub, and deployment (Vercel, Netlify, etc.).</li> 
                    </ul>
                </div>

            </section>
        </div>
        </BlurUp>
    </main>
  )
}

export default page