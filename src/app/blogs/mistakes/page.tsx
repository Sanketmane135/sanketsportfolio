'use client'
import BlurUp from '@/components/Blurup';
import { Particles } from '@/components/ui/particles'
import {  CornerUpRight, Dot } from 'lucide-react';
import React, { useState } from 'react'
import { MdDateRange } from 'react-icons/md';

function Page() {
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
            <h2 className='text-2xl md:text-4xl'>    Top 5 Mistakes Every Beginner Developer Makes</h2>
         
            <p className='pt-5 flex items-center gap-3 text-xl text-gray-300'> <MdDateRange  size={30}/>March 2025</p>
            <section className='border p-5 rounded mt-5 '>
                <h2 className='md:text-xl'> <span className='pl-5'></span>Every developer starts as a beginner — and mistakes are part of the process. But understanding these early on can save you months of confusion and frustration.Here are the most common beginner developer mistakes and how to avoid them</h2>
                <div className='pl-5 pt-5'>
                    <ul className='flex flex-col gap-2 md:text-xl'>
                        <section className='border-b p-2'>
                             <li className='flex gap-2'> <Dot/>Learning Too Many Languages at Once</li>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight size={30}/>Pick one tech stack (for example, HTML, CSS, and JavaScript for web) and stick with it until you can build small projects confidently.</p>

                        </section>

                        <section className='border-b p-2'>
                             <li className='flex gap-2'> <Dot/>Skipping Fundamentals</li>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight size={20}/>Master HTML, CSS, and Vanilla JavaScript first — everything else builds on them.</p>

                        </section>
                         
                         <section className='border-b p-2'>
                             <li className='flex gap-2'> <Dot/>Copy-Pasting Code Without Understanding It</li>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight/>“why does this work?” and try to write code from scratch once you understand it.</p>

                        </section>
                         

                         <section className='border-b p-2'>
                             <li className='flex gap-2'> <Dot/>Not Using Git Early</li>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight/>Learn basic Git commands — commit, push, and pull. Create a GitHub account and upload every project.</p>

                        </section>

                        <section className='border-b p-2'>
                             <li className='flex gap-2'> <Dot/>Giving Up Too Soon</li>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight/>Remember — every developer, even senior ones, face bugs daily. Be patient, and track your progress instead of perfection.</p>

                        </section>

                        <section className='border-b p-2'>
                             <li className='flex gap-2'> <Dot/>Ignoring Documentation</li>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight/>Learn to read and understand official documentation (MDN, React Docs, etc.). It builds independence and confidence.</p>

                        </section>

                        <section className='border-b p-2'>
                             <li className='flex gap-2'> <Dot/>Not Asking for Help</li>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight/>Use communities like Stack Overflow, Reddit, Discord, or GitHub Discussions. The dev community is friendly — everyone has been a beginner once.</p>

                        </section>
                         
                    
                    </ul>
                </div>

            </section>
        </div>
        </BlurUp>
    </main>
  )
}

export default Page