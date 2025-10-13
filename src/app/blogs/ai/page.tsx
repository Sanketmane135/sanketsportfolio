'use client'
import BlurUp from '@/components/Blurup';
import { Particles } from '@/components/ui/particles'
import { ArrowBigDown, CornerUpRight, Dot, Highlighter } from 'lucide-react';
import React, { useState } from 'react'
import { FcAnswers } from 'react-icons/fc';
import { FiX } from 'react-icons/fi';
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
            <h2 className='text-2xl md:text-4xl'>Will AI Replace Developers? The Truth Behind the Hype</h2>
         
            <p className='pt-5 flex items-center gap-3 text-xl text-gray-300'> <MdDateRange  size={30}/>March 2025</p>
            <section className='border p-5 rounded mt-5 '>
                <h2 className='md:text-xl'> <span className='pl-5'></span>Artificial Intelligence (AI) is transforming industries faster than ever from automating customer support to writing code with tools like GitHub Copilot and ChatGPT. This rapid growth raises a big question in every developer’s mind: “Will AI replace human developers?”</h2>
                <div className='pl-5 pt-5'>
                    <ul className='flex flex-col gap-2 md:text-xl'>
                        <section className='border-b p-2'>
                             <li className='flex gap-2'> <Dot/>What AI Can Do in Software Development</li>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight size={30}/>Suggest code completions and fix errors automatically</p>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight size={30}/>Generate functions, test cases, and even small apps from prompts</p>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight size={30}/>Help with debugging, documentation, and code review.</p>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight size={30}/>Automate repetitive or boilerplate coding tasks.</p>
                            <h3 className='pl-15 pt-5'>In short, AI acts like a super-assistant for developers which saving hours of manual work</h3>
                        </section>

                        <section className='border-b p-2'>
                             <li className='flex gap-2'> <Dot/>What AI Can’t Do</li>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight size={30}/>Complex system design and architecture decisions.</p>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight size={30}/>Understanding vague client requirements.</p>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight size={30}/>Writing code that involves deep business logic or innovation.</p>
                             <p className='pl-15 pt-5 flex gap-2'><CornerUpRight size={30}/>Ethical decision-making and trade-offs.</p>
                            <h3 className='pl-15 pt-5'>That’s where human developers shine.</h3>
                        </section>
                         
                         <section className='border-b p-2'>
                             <li className='flex gap-2 text-yellow-600'> <Highlighter color='red'/>AI is here to stay, but it’s not here to replace you.</li>
                            
                        </section>
                         

                      
                    
                    </ul>
                </div>

            </section>
        </div>
        </BlurUp>
    </main>
  )
}

export default page