'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import BlurUp from './Blurup';
import { Spotlight } from './ui/spotlight';


function Tech() {
    
    let [value, setValue]=useState<number>(1);

    const skills = (value: number) => {
  switch (value) {
    case 1:
      return <section className="px-1 text-white md:px-5 w-full grid grid-cols-2 md:grid-cols-4">
              <BlurUp>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={"/typescript.png"} width={40} height={40} alt="type"/>
                <h3>Typescript</h3>
              </div>
              </BlurUp>
              <BlurUp>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={"/javascript.png"} width={40} height={40} alt="type"/>
                <h3>Javascript</h3>
              </div>
              </BlurUp>
              <BlurUp>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={"/react.png"} width={40} height={40} alt="type"/>
                <h3>React.js</h3>
              </div>
              </BlurUp>
              <BlurUp>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={"/next.png"} width={40} height={40} alt="type"/>
                <h3>Next.js</h3>
              </div>
              </BlurUp>
              <BlurUp>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={"/telwind.png"} width={40} height={40} alt="type"/>
                <h3>Tailwind </h3>
              </div>
              </BlurUp>
              </section>;
    case 2:
      return <section className="px-1 text-white md:px-5 w-full grid grid-cols-2 md:grid-cols-4">
              <BlurUp>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={"/mongo.png"} width={40} height={40} alt="type"/>
                <h3>MOngoDB</h3>
              </div>
              </BlurUp>

              <BlurUp>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={"/node.png"} width={40} height={40} alt="type"/>
                <h3>Node.js</h3>
              </div>
              </BlurUp>

              <BlurUp>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={"/express2.png"} width={40} height={40} alt="type"/>
                <h3>Express.js</h3>
              </div>
              </BlurUp>
              <BlurUp>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={"/plsql.png"} width={40} height={40} alt="type"/>
                <h3>PL SQL</h3>
              </div>
              </BlurUp>
            
              
              </section>;
    case 3:
      return <section className="px-1 text-white md:px-5 w-full grid grid-cols-2 md:grid-cols-4">
              
              <BlurUp><div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={"/git.png"} width={40} height={40} alt="type"/>
                <h3>GitHub</h3>
              </div>
              </BlurUp>
              <BlurUp>
              <div className="bg-zinc-900 flex w-auto px-3 py-1 items-center gap-2 rounded-lg mb-2 mx-1">
                <Image src={"/vs2.png"} width={40} height={40} alt="type"/>
                
                <h3>Vs Code </h3>
              </div>
              </BlurUp>
              </section>;
    default:
      return <h1>No skill selected</h1>;
  }
};

  return (
    <BlurUp>
    <section className='relative overflow-hidden '>
          <div
            className="absolute inset-0  mx-auto h-60 z-[-1] max-w-xs blur-[118px]"
            style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)',
            }}
          ></div>
          
            <h2 className=" w-full  p-2 cursor-crosshair font-semibold text-white flex items justify-center sm:text-3xl mb-10 bg-gradient-to-r from-black via-red-500 to-black">Tech Stack </h2>
                <div className="h-10  items-center justify-center rounded-md bg-gray-950 p-1 text-muted-foreground mb-2 grid w-full grid-cols-3">
                
              <button onClick={()=>{setValue(1)}} className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all  ${value === 1 ? "bg-slate-800 text-pink-500" : "bg-transparent "} `}>Frontend</button> 
              <button onClick={()=>{setValue(2)}} className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all  ${value === 2 ? "bg-slate-800 text-pink-500" : "bg-transparent "} `}>Backend</button>
              <button onClick={()=>{setValue(3)}} className={`inline-flex items-center justify-center whitespace-nowrap rounded -sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all ${value === 3 ? "bg-slate-800 text-pink-500" : "bg-transparent "} `}>Other</button>
            </div>
            {skills(value)}
    </section>  
          </BlurUp>
  )
}

export default Tech