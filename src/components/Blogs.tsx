'use client'
import React from 'react'
import { useRef } from "react";
import { BorderBeam } from '@/components/ui/border-beam';
import { motion, useInView } from 'framer-motion';
import {
  Ban,
  Brain,
  ChartNoAxesCombined,
  Rocket,
  Target,
} from 'lucide-react';
import { Button } from './ui/button';
function Blogs() {
    
  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
  return (
     <div ref={missionRef} className="relative mx-auto mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 grid gap-12 md:grid-cols-2 mb-5"
          >

            <motion.div
                     whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                     className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-10 backdrop-blur-3xl"
                   >
                     <BorderBeam
                       duration={8}
                       size={300}
                       className="from-transparent via-orange-500/40 to-transparent"
                       reverse
                     />
                     <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                       <ChartNoAxesCombined className="h-8 w-8 text-orange-500" />
                     </div>
       
                     <h2 className="mb-4 bg-gradient-to-r from-yellow-500/90 to-orange-500/70 bg-clip-text text-3xl font-bold text-transparent">
                       How Generative AI Is Taking Over the IT Market
                     </h2>
       
                     <p className="text-muted-foreground text-lg leading-relaxed mb-1">
                       Generative AI is quickly becoming a core part of the IT industry. It is changing how software is developed...
                     </p>
                     <h3 className='text-gray-400 border-b-2 mt-1'>Jan 2026</h3>
                         <a href='/blogs/generativeai'><Button  variant={'outline'}  className='mt-3'>Read Out</Button></a>
                       
                   </motion.div>
             <motion.div
                     whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                     className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-10 backdrop-blur-3xl"
                   >
                   
                     <BorderBeam
                       duration={8}
                       size={300}
                       className="from-transparent via-pink-400/40 to-transparent"
                       reverse
                     />
                     <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/20 to-blue-500/5 backdrop-blur-sm">
                       <Ban  className="h-8 w-8 text-pink-500" />
                     </div>
       
                     <h2 className="mb-4 bg-gradient-to-r from-pink-500/90 to-pink-500/70 bg-clip-text text-3xl font-bold text-transparent">
                       Top 5 Mistakes Every Beginner Developer Makes 
                     </h2>
       
                     <p className="text-muted-foreground text-lg leading-relaxed mb-1">
                       Learning too many languages at once  Focus on one stack first . . .
                     </p>
                     <h3 className='text-gray-400 border-b-2'>March 2025</h3>
                       <a href='/blogs/mistakes'><Button  variant={'outline'}  className='mt-3'>Read Out</Button></a>
                       
                   </motion.div>

                

          </motion.div>
            <a  href={"/blogs"}  className=" w-full p-2 link border border-gray-600 rounded flex items-center justify-center  gap-2 font-light">
                <span className='text-white'>VIEW MORE</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#999999"><path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z"/></svg>
              </a>
        </div>
      
  )
}

export default Blogs