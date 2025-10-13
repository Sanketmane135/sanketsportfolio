'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { BorderBeam } from '@/components/ui/border-beam';
import {
  Ban,
  Brain,
  Rocket,
  Target,
} from 'lucide-react';
import {
  Users,
  Award,
  Sparkles,
  CheckCircle,
  Clock,
} from 'lucide-react';
import { Button } from '../ui/button';
import { MdWrongLocation } from 'react-icons/md';

interface StatItemProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  delay?: number;
  decimalPlaces?: number;
  color?: string;
}



   
const StatItem = ({
  label,
  icon,
  delay = 0,
  color = 'from-primary to-primary/70',
}: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { resolvedTheme } = useTheme();


  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
      className={cn(
        'group border-border/30 bg-card relative overflow-hidden rounded-xl border p-6',
        resolvedTheme === 'dark'
          ? 'shadow-xl shadow-black/5'
          : 'shadow-lg shadow-black/[0.03]',
      )}
    >
      <div
        className={cn(
          'absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-30 group-hover:blur-3xl',
          color,
        )}
      />

      <div className="flex items-center gap-4">
        <div
          className={cn(
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white',
            color,
          )}
        >
          {icon}
        </div>

        <div className="flex flex-col">
          <h3 className="flex items-baseline text-3xl font-bold tracking-tight">
            
            <span className="ml-1 text-sm font-medium opacity-70">+</span>
          </h3>
          <p className="text-muted-foreground text-sm font-medium">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutUs2() {
 
 const missionRef = useRef(null);
const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.09]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6">
        {/* Header Section with Badge */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-4 flex justify-center"
          >
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/5 rounded-full px-4 py-1 text-sm font-medium"
            >
              <Sparkles className="text-primary mr-1 h-3.5 w-3.5" />
              Read Out
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="from-foreground to-foreground/70 h-20 bg-gradient-to-b bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
          >
            The Featured Blogs
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-muted-foreground mt-4 text-xl"
          >
            Where beginners learn, and experts stay inspired
          </motion.p>
        </div>

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
                       className="from-transparent via-blue-500/40 to-transparent"
                       reverse
                     />
                     <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                       <Brain className="h-8 w-8 text-blue-500" />
                     </div>
       
                     <h2 className="mb-4 bg-gradient-to-r from-blue-500/90 to-blue-500/70 bg-clip-text text-3xl font-bold text-transparent">
                       Will AI Replace Developers? The Truth Behind the Hype
                     </h2>
       
                     <p className="text-muted-foreground text-lg leading-relaxed mb-1">
                       Artificial Intelligence (AI) is transforming industries faster than ever from automating customer...
                     </p>
                     <h3 className='text-gray-400 border-b-2'>sept  2025</h3>
                         <a href='/blogs/ai'><Button  variant={'outline'}  className='mt-3'>Read Out</Button></a>
                       
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

                     <motion.div
                     whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                     className="group border-border/40 relative block overflow-hidden rounded-2xl border bg-gradient-to-br p-10 backdrop-blur-3xl"
                   >
                     <BorderBeam
                       duration={8}
                       size={300}
                       className="via-primary/40 from-transparent to-transparent"
                     />
       
                     <div className="from-primary/20 to-primary/5 mb-6 inline-flex aspect-square h-16 w-16 flex-1 items-center justify-center rounded-2xl bg-gradient-to-br backdrop-blur-sm">
                       <Rocket className="text-primary h-8 w-8" />
                     </div>
       
                     <div className="space-y-4">
                       <h2 className="from-primary/90 to-primary/70 mb-4 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
                         A Beginner’s Guide to Starting a Developer Journey in 2025
                       </h2>
                       <p className="text-muted-foreground text-lg leading-relaxed">
                           The tech world is growing faster than ever, and 2024 is one of . . . 
                     </p>
                        <h3 className='text-gray-400 border-b-2'>Jan 2025</h3>
                        <a href='/blogs/beginners'><Button  variant={'outline'}>Read Out</Button></a>
                     </div>
                   </motion.div>
       

                 </motion.div>
                   
               </div>



      </div>
    </section>
  );
}
