'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import BlurUp from './Blurup';



function Experience() {

    const [secondValue, setsecondValue]=useState<number>(1);

    const education=(secondValue:number)=>{
  switch(secondValue){
    case 1:
      return <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <div className="rounded-lg border border-gray-500 shadow-sm">

                  <div className="p-0">
                    <ul className="ml-10 border-l border-gray-500">
                      <li className="relative ml-10 py-4">
                        <a className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                          <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                          <Image
                            src="/repliq.jpeg"
                            alt="type"
                            fill
                            className="object-cover"
                          />
                        </span>
                        </a>
                        <div className="flex flex-1 flex-col justify-start gap-1">
                          <h2 className="font-semibold leading-none text-2xl">RepliQ </h2>
                          <p className="text-sm text-gray-400">Co-founder & lead developer</p>
                          <ul className="ml-4 list-outside list-disc">
                            <li className="prose pr-8 text-sm dark:prose-invert">
                               Architected a full-stack SaaS platform from the ground up using Next.js for the frontend and MongoDB for data management.
                            </li>
                            <li className="prose pr-8 text-sm dark:prose-invert">
                            Engineered complex automation workflows and chatbots by directly leveraging the official Instagram Graph API.
                            </li>
                             <li className="prose pr-8 text-sm dark:prose-invert">
                            Integrated Razorpay to handle secure, recurring subscription payments and automated billing cycles.
                             </li>
                            <li className="prose pr-8 text-sm dark:prose-invert">
                             Streamlined the product lifecycle, managing continuous updates, performance optimization, and vertical scaling strategies.
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="p-0">
                    <ul className="ml-10 border-l border-gray-500">
                      <li className="relative ml-10 py-4">
                        <a className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                          <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                          <Image
                            src="/sarthi.png"
                            alt="type"
                            fill
                            className="object-cover"
                          />
                        </span>
                        </a>
                        <div className="flex flex-1 flex-col justify-start gap-1">
                          <h2 className="font-semibold leading-none text-2xl">Sarathi Foundation</h2>
                          <p className="text-sm text-gray-400">Front-end developer( Freelanced )</p>
                          <ul className="ml-4 list-outside list-disc">
                            <li className="prose pr-8 text-sm dark:prose-invert">
                                Developed & launched a responsive event-management platform using React.js + TailwindCSS, serving 150+ users
                            </li>
                            <li className="prose pr-8 text-sm dark:prose-invert">
                            Collaborated with NGO stakeholders to showcase 20+ events, improving community engagement by 35%.
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="p-0">
                    <ul className="ml-10 border-l border-gray-500">
                      <li className="relative ml-10 py-4">
                        <a className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                          <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                          <Image
                             src={"/alphiity.jpg"}
                            alt="type"
                            fill
                            className="object-cover"
                          />
                        </span>
                        </a>
                        
                        <div className="flex flex-1 flex-col justify-start gap-1">
                          <h2 className="font-semibold leading-none text-2xl">Alphinity Soft tech pvt ltd</h2>
                          <p className="text-sm text-gray-400">Intern </p>
                          <ul className="ml-4 list-outside list-disc">
                            <li className="prose pr-8 text-sm dark:prose-invert">
                            Worked as a intern from 1 Feb - 30 july for the 6 months where i worked on developing the frontend and handling backend with Express and MongoDB.
                            </li>
                            <li className="prose pr-8 text-sm dark:prose-invert">
                            Implemented next.js for the frontend and used MongoDB for the database.
                            </li>
                            <li className="prose pr-8 text-sm dark:prose-invert">
                            Gained my skills by working on the website of the coaching classes & college website
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
    case 2:
      return <div className="mt-2  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          
          <BlurUp>
            <div className="rounded-lg border bg-black border-gray-500  text-white shadow-sm">
            <div className="p-0">
              <ul className="ml-10 border-l border-gray-500">
                <li className="relative ml-10 py-4">
                  <a className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                      <Image src={"/dyp.png"} width={50} height={50} alt="type"/>
                    </span>
                  </a>
                  <div className="flex flex-1 flex-col justify-start gap-1">
                    <time className="text-xs text-gray-400">
                      <span>2023</span>
                      <span>-</span>
                      <span>2026</span>
                    </time>
                    <h2 className="font-semibold leading-none text-2xl"> D. Y. Patil Technical Campus, Kolhapur</h2>
                    <p className="text-sm text-gray-400">B.Tech in Computer Science & Engineering</p>
                  </div>
                </li>
                
                <li className="relative ml-10 py-4">
                  <a className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white">
                   <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                    <Image
                      src="/ness.png"
                      alt="type"
                      fill
                      className="object-cover"
                    />
                  </span>

                  </a>
                  <div className="flex flex-1 flex-col justify-start gap-1">
                    <time className="text-xs text-gray-400">
                      <span>2020</span>
                      <span>-</span>
                      <span>2022</span>
                    </time>
                    <h2 className="font-semibold leading-none text-2xl">New English School & Junior College of Science, Shirala</h2>
                    <p className="text-sm text-gray-400">11th + 12th</p>
                  </div>
                </li>

                
              </ul>
            </div>
          </div>
          </BlurUp>
      </div>
  }
}

  return (
    <BlurUp>
    <section className='text-white'>
             <h2 className=" w-full mt-15 p-2 cursor-crosshair font-semibold text-white flex items justify-center sm:text-3xl mb-10 bg-gradient-to-r from-black via-red-500 to-black">Professional Experience</h2>
            <div className="h-10 items-center justify-center rounded-md bg-slate-900 p-1 text-muted-foreground mb-2 grid w-full grid-cols-2">
              <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all  ${secondValue === 1 ? "bg-gray-800 text-pink-500" : "bg-transparent "} `} onClick={()=>{setsecondValue(1)}}>Work</button>
              <button className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all   ${secondValue === 2 ? "bg-gray-800 text-pink-500" : "bg-transparent "}  ` }  onClick={()=>{setsecondValue(2)}}>Education</button>
            </div>
            {
              education(secondValue)
            }
     </section>
     </BlurUp>
  )
}

export default Experience