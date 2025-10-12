'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Spotlight } from '@/components/ui/spotlight';
import {
  Globe,
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
} from 'lucide-react';
import Image from 'next/image';

interface AboutUsProps {
  title?: string;
  subtitle?: string;
  mission?: string;
  vision?: string;
  values?: Array<{
    title: string;
    description: string;
    icon: keyof typeof iconComponents;
  }>;
  className?: string;
}

const iconComponents = {
  Users: Users,
  Heart: Heart,
  Lightbulb: Lightbulb,
  Globe: Globe,
  Sparkles: Sparkles,
  Rocket: Rocket,
  Target: Target,
};

const defaultValues: AboutUsProps['values'] = [
  {
    title: 'Innovation',
    description:
      'We constantly push boundaries and explore new possibilities to create cutting-edge solutions.',
    icon: 'Lightbulb',
  },
  {
    title: 'Collaboration',
    description:
      'We believe in the power of teamwork and diverse perspectives to achieve extraordinary results.',
    icon: 'Users',
  },
  {
    title: 'Excellence',
    description:
      'We strive for perfection in everything we do, consistently delivering high-quality work.',
    icon: 'Sparkles',
  },
  {
    title: 'Impact',
    description:
      "We measure our success by the positive difference we make in people's lives and businesses.",
    icon: 'Globe',
  },
];

export default function AboutUs1() {
  const aboutData = {
    title: 'About Us',
    subtitle:
      'Building the future of web development with beautiful, reusable components.',
    mission:
      'Our mission is to democratize web development by providing high-quality, customizable components that help developers build stunning websites quickly and efficiently.',
    vision:
      'We envision a world where creating beautiful websites is accessible to everyone, regardless of their design or development experience.',
    values: defaultValues,
    className: 'relative overflow-hidden py-20',
  };

  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full overflow-hidden pt-20">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(336, 100%, 50%, 0.08) 0, hsla(341, 100%, 55%, 0.04) 50%, hsla(336, 100%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(333, 100%, 85%, 0.08) 0, hsla(335, 100%, 55%, 0.04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(332, 100%, 85%, 0.06) 0, hsla(327, 100%, 85%, 0.06) 80%, transparent 100%)"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h1 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            My Projects
          </h1>
          <p className="text-muted-foreground mt-6 text-xl">
            Given my hands on this projects which improved my skills
          </p>
        </motion.div>

        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 grid gap-12 md:grid-cols-3"
          >
                      {/*  bagpack project no -01 */}
                            <div className=" flex justify-center items-center ">
                                                                  
                              <div className=" border border-neutral-800 rounded-xl p-4 w-80 shadow-lg hover:shadow-neutral-700/40 transition-all duration-300">
                                                                                                  
                              <div className="rounded-lg overflow-hidden mb-4 w-full h-40">
                              <Image
                                src={"/bagpacktrips2.png"}
                                alt="AI Agent"
                                width={400}
                                height={200}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
              
                                                                    
                              <h2 className="text-white text-lg font-semibold mb-1">Bag-Pack Trip Booking Web App</h2>
                                                                    
                              <p className="text-gray-400 text-sm mb-3">
                              This is used to book and plan trips where you can book trip from build in packages and also provide custom trip booking facility
                              </p>
                                                                    
                                <div className="flex flex-wrap gap-2 mb-4">
                              <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md">Next.js</span>
                              <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md">Tailwind CSS</span>
                              <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md"> MongoDB</span>
                              <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md">Express.js</span>
                              </div>
              
                                <div className="w-full flex gap-1">                                  
                                    <a href="https://bagpacktrips.vercel.app" className="flex items-center gap-2 text-sm text-gray-200 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 px-3 py-1.5 rounded-md transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>
                                    website
                                    </a>
                                    
                                    <a href="https://github.com/Sanketmane135/tripbooking" className="flex items-center gap-2 text-sm text-gray-200 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 px-3 py-1.5 rounded-md transition">
                                    Repo
                                    </a>
                              </div> 
                                                                    
                                </div>
                              </div>

                          {/*  stego project no -02 */}
                                     <div className=" flex justify-center items-center ">
                                                                         
                                     <div className=" border border-neutral-800 rounded-xl p-4 w-80 shadow-lg hover:shadow-neutral-700/40 transition-all duration-300">
                                                                                                         
                                     <div className="rounded-lg overflow-hidden mb-4 w-full h-40">
                                     <Image
                                       src={'/stegno2.png'}
                                       alt="AI Agent"
                                       width={400}
                                       height={200}
                                       className="w-full h-full object-cover rounded-lg"
                                     />
                                   </div>
                                                                           
                                     <h2 className="text-white text-lg font-semibold mb-1">Advanced steganography for image encoding and decoding</h2>
                                                                           
                                     <p className="text-gray-400 text-sm mb-3">
                                           It takes input like image and hide(encode) secret messages within images using cutting-edge cryptographic techniques after
                                     </p>
                                                                           
                                       <div className="flex flex-wrap gap-2 mb-4">
                                     <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md">Next.js</span>
                                     <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md">Tailwind CSS</span>
                                     </div>
                                                                           
                                     <div className="w-full flex gap-1">                                  
                                           <a href="https://stegenography.vercel.app" className="flex items-center gap-2 text-sm text-gray-200 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 px-3 py-1.5 rounded-md transition">
                                           <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>
                                           website
                                           </a>
                                           
                                           <a href="https://github.com/Sanketmane135/stegano" className="flex items-center gap-2 text-sm text-gray-200 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 px-3 py-1.5 rounded-md transition">
                                           Repo
                                           </a>
                                     </div>   
                                                                           
                                       </div>
                                     </div>
                         
                      
                            {/* stego porject no 04 */}
                            <div className=" flex justify-center items-center ">
                              <div className=" border border-neutral-800 rounded-xl p-4 w-80 shadow-lg hover:shadow-neutral-700/40 transition-all duration-300">
                                                                                                          
                                      <div className="rounded-lg overflow-hidden mb-4 w-full h-40">
                                      <Image
                                        src={"/seoimg.png"}
                                        alt="AI Agent"
                                        width={400}
                                        height={200}
                                        className="w-full h-full object-cover rounded-lg"
                                      />
                                    </div>
                                                                            
                                      <h2 className="text-white text-lg font-semibold mb-1">AI powered SEO Assistant</h2>
                                                                            
                                      <p className="text-gray-400 text-sm mb-3">
                                           SEO Assistant is an AI-powered tool that helps users analyze and optimize their website’s performance. Users can improve site ranking with this  AI powered SEO Assistant.
                                      </p>
                                                                            
                                        <div className="flex flex-wrap gap-2 mb-4">
                                      <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md">Next.js</span>
                                      <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md">Typescript</span>
                                      <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md">Tailwind CSS</span>
                                      <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md">Express.js</span>
                                       <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md">MongoDB</span>
                                      </div>
                                                                            
                                      <div className="w-full flex gap-1">                                  
                                            <button  className="flex cursor-not-allowed items-center gap-2 text-sm text-gray-200 bg-green-700 border border-neutral-800 hover:bg-green-800 px-3 py-1.5 rounded-md transition">
                                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9"><path d="M320-414v-306h120v306l-60-56-60 56Zm200 60v-526h120v406L520-354ZM120-216v-344h120v224L120-216Zm0 98 258-258 142 122 224-224h-64v-80h200v200h-80v-64L524-146 382-268 232-118H120Z"/></svg>
                                                Ongoing
                                            </button>
                                            
                                            <a href="https://github.com/Sanketmane135/seo" className="flex items-center gap-2 text-sm text-gray-200 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 px-3 py-1.5 rounded-md transition">
                                            Repo
                                            </a>
                                      </div>   
                                                                            
                              </div>
                            </div>
                             {/* 3 rd project */}
                         <div className="flex justify-center items-center ">
                              <div className=" border border-neutral-800 rounded-xl p-4 w-80 shadow-lg hover:shadow-neutral-700/40 transition-all duration-300">
                                    <div className="rounded-lg overflow-hidden mb-4 w-full h-40">
                                      <Image src={"/aiinterviewer.png"} alt="bagpack image" width={400} height={200} className="w-full h-full object-cover rounded-lg" />
                                    </div>
                                    
                                    <h2 className="text-white text-lg font-semibold mb-1">ResumeIQ</h2>
                                                                            
                                      <p className="text-gray-400 text-sm mb-3">
                                        An intelligent tool that conducts mock interviews based on a user’s uploaded resume & analyzes the resume to generate personalized questions & evaluates spoken answers using voice.

                                      </p>
                                                                            
                                      <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md">Next.js</span>
                                        <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md">Tailwind CSS</span>
                                        <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md"> MongoDB</span>
                                        <span className="text-xs bg-neutral-800 text-gray-300 px-2 py-1 rounded-md">Express.js</span>
                                      </div>
                      
                                      <div className="w-full flex gap-1">                                  
                                             <button  className="flex cursor-not-allowed items-center gap-2 text-sm text-gray-200 bg-green-700 border border-neutral-800 hover:bg-green-800 px-3 py-1.5 rounded-md transition">
                                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9"><path d="M320-414v-306h120v306l-60-56-60 56Zm200 60v-526h120v406L520-354ZM120-216v-344h120v224L120-216Zm0 98 258-258 142 122 224-224h-64v-80h200v200h-80v-64L524-146 382-268 232-118H120Z"/></svg>
                                                Ongoing
                                            </button>
                                            
                                            <a href="https://github.com/Sanketmane135/ai-interview" className="flex items-center gap-2 text-sm text-gray-200 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 px-3 py-1.5 rounded-md transition">
                                            Repo
                                            </a>
                                      </div> 
                                                                            
                                </div>
                      </div>
                           
       

          </motion.div>
        </div>

        {/* <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 text-center"
          >
            <h2 className="from-foreground/80 via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Our Core Values
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              The principles that guide everything we do and every decision we
              make.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values?.map((value, index) => {
              const IconComponent = iconComponents[value.icon];

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant={
                      index === 0
                        ? 'purple'
                        : index === 1
                          ? 'blue'
                          : index === 2
                            ? 'amber'
                            : 'rose'
                    }
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
}
