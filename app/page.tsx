'use client'

import {
  Image,
  Divider
} from "@heroui/react";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiMysql, SiCplusplus, } from "react-icons/si";
import { FaNodeJs, FaLaravel, FaAngular, FaUnity, FaHtml5, FaSass, FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

export default function Home() {
  return (
    <div>
      <div className='px-3 text-black'>
        <div className="grid grid-cols-2 bg-white rounded-xl shadow-xl/30 border-2 border-t-4 border-[var(--accent)]">

          <div className='justify-center grid rounded-xl p-6 padding-4 grid' >
            <Image src={'/ProfilePicture.jpg'} className="mask-radial-at-center mask-radial-from-50% mask-radial-to-70%" />
          </div>
          <div className="rounded-xl p-6 padding-4 grid gap-4 text-gray-600 justify-center flex">
            <h1 className="text-6xl justify-center flex">Stefan Wurpel</h1><br />
            <p>welkom op mijn portfolio website, op deze website laat ik zien wie ik ben en waar ik voor sta. <br /><br />
              Ik ben Stefan Wurpel, 26 jaar en op zoek naar een nieuwe uitdaging. Ik heb een passie voor design, frontend development & consultancy.
              Ik ben graag bezig met een sociale impact en afwisseling tussen technisch en met menselijke interactie.
            </p>
          </div>
          <div className='col-span-full className="bg-black rounded-xl p-6 w-full grid"'>
            {/* <p>to do:</p>
            <ul>
              <li>1 introductie X</li>
              <li>2 hobbies X</li>
              <li>3 vaardigheden X</li>
              <li>4 call to action X</li>
              <li>5 hoofd projecten</li>
            </ul> */}
          </div>
        </div><br />
        <div className="flex items-center justify-center text-4xl text-white gap-2"><Divider />Skills<Divider /></div>
        <div className="grid pt-6 justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          <div>
            <div className="bg-white rounded-xl  border-t-4 border-[var(--accent)] p-6 shadow-xl/60 border-2">
              <h1 className="text-4xl text-center border-b-4 pb-4 mb-6">Frontend Skills</h1>
              <div className="flex flex-wrap gap-6 pt-6 justify-center gap-4 text-4xl text-black p-3">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                  <div className="flex flex-col items-center gap-2 h-full pb-4">
                    <SiNextdotjs title="Next.js" className="h-16 w-16 text-[black]" />
                    <p className="text-2xl">Next.js</p>
                  </div>

                  <div className="flex flex-col items-center gap-2 h-full pb-4">
                    <SiTypescript title="TypeScript" className="text-[#3178C6] h-16 w-16" />
                    <p className="text-2xl">TypeScript</p>
                  </div>

                  <div className="flex flex-col items-center gap-2 h-full pb-4">
                    <SiTailwindcss title="Tailwind CSS" className="text-[#38bdf8] h-16 w-16" />
                    <p className="text-2xl">TailwindCSS</p>
                  </div>

                  <div className="flex flex-col items-center gap-2 h-full pb-4">
                    <SiJavascript className="h-16 w-16 text-[yellow]" />
                    <p className="text-2xl">JavaScript</p>
                  </div>

                  <div className="flex flex-col items-center gap-2 h-full pb-4">
                    <FaHtml5 className="h-16 w-16 text-[orange]" />
                    <p className="text-2xl">HTML</p>
                  </div>

                  <div className="flex flex-col items-center gap-2 h-full pb-4">
                    <FaSass className="h-16 w-16 text-[pink]" />
                    <p className="text-2xl">SCSS</p>
                  </div>

                  <div className="flex flex-col items-center gap-2 h-full pb-4">
                    <FaAngular className="h-16 w-16 text-[red]" />
                    <p className="text-2xl">Angular</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl border-t-4 border-[var(--accent)] p-6 shadow-xl/60 border-2">
              <h1 className="text-4xl text-center border-b-4 pb-4 mb-6">Backend Skills</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                <div className="flex flex-col items-center gap-2 h-full pb-4">
                  <FaNodeJs title="Node.js" className="text-[#3C873A] h-16 w-16" />
                  <p className="text-2xl">Node.js</p>
                </div>

                <div className="flex flex-col items-center gap-2 h-full pb-4">
                  <FaLaravel className="h-16 w-16 text-[red]" />
                  <p className="text-2xl">Laravel</p>
                </div>

                <div className="flex flex-col items-center gap-2 h-full pb-4">
                  <SiMysql className="h-16 w-16 text-[black]" />
                  <p className="text-2xl">MySQL</p>
                </div>

                <div className="flex flex-col items-center gap-2 h-full pb-4">
                  <TbBrandCSharp className="h-16 w-16 text-[purple]" />
                  <p className="text-2xl">C#</p>
                </div>

                <div className="flex flex-col items-center gap-2 h-full pb-4">
                  <FaJava className="h-16 w-16 text-[black]" />
                  <p className="text-2xl">Java</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl max-w-sm border-t-4 border-[var(--accent)] p-6 shadow-xl/60 border-2">
              <h1 className="text-4xl text-center border-b-4 pb-4 mb-6">Full-stack</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                <div className="flex flex-col items-center gap-2 h-full pb-4">
                  <SiCplusplus className="h-16 w-16 text-[blue]" />
                  <p className="text-2xl">C++</p>
                </div>

                <div className="flex flex-col items-center gap-2 h-full pb-4">
                  <FaUnity className="h-16 w-16 text-[black]" />
                  <p className="text-2xl">Unity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-4xl text-white gap-2"><Divider />Projecten<Divider /></div>
        <div className="flex flex-wrap gap-6 pt-6 justify-center">
          <div className="max-w-sm p-6 text-center border-t-4 border-[var(--detail)] bg-white rounded-xl border-2">
            <a href="#"><img className="rounded-t-xl w-full" src="/verpleegkundeGame.png" alt="" /></a>
            <p className="mt-4">verpleegkunde game (C#)</p>
          </div>

          <div className="max-w-sm p-6 text-center border-t-4 border-[var(--detail)] bg-white rounded-xl border-2">
            <a href="#"><img className="rounded-t-xl w-full" src="/StefanWurpel.jpg" alt="" /></a>
            <p className="mt-4">ITP Generator (Vue.js)</p>
          </div>

          <div className="max-w-sm p-6 text-center border-t-4 border-[var(--detail)] bg-white rounded-xl border-2">
            <a href="#"><img className="rounded-t-xl w-full" src="/StefanWurpel.jpg" alt="" /></a>
            <p className="mt-4">Enovation</p>
          </div>
        </div>


        <br /><div className="flex items-center justify-center text-white gap-2"><Divider /><h1 className="flex justify-center text-4xl">Hobby's</h1><Divider /></div>
        <div className="grid pt-6 gap-6 justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          <div className="block max-w-sm border border-[var(--accent)] border-default rounded-xl shadow-xs bg-[var(--accent)] shadow-xl/30 border-t-4 border-[var(--accent)]">
            <a href="#">
              <img className="rounded-t-xl" src="/StefanWurpel.jpg" alt="" />
            </a>
            <div className="p-6 text-center border-t-4 border-[var(--detail)]">
              <a href="#">
                <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">Gaming</h5>
              </a>
              <a href="#" className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                Read more
              </a>
            </div>
            {/* <ul>
              <li>team oriented/co-op games</li>
              <li>strategy games</li>
              <li>puzzle games</li>
            </ul> */}
          </div>
          <div className="block max-w-sm border border-[var(--accent)] border-default rounded-xl shadow-xs bg-[var(--accent)] shadow-xl/30 border-t-4 border-[var(--accent)]">
            <a href="#">
              <img className="rounded-t-xl" src="/StefanWurpel.jpg" alt="" />
            </a>
            <div className="p-6 text-center border-t-4 border-[var(--detail)]">
              <a href="#">
                <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">Sporten</h5>
              </a>
              <a href="#" className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                Read more
              </a>
            </div>
            {/* <ul>
              <li>discipline</li>
              <li>4x per week</li>
              <li>calisthenics/home gym</li>
            </ul> */}
          </div>
          <div className="block max-w-sm border border-[var(--accent)] border-default rounded-xl shadow-xs bg-[var(--accent)] shadow-xl/30 border-t-4 border-[var(--accent)]">
            <a href="#">
              <img className="rounded-t-xl" src="/StefanWurpel.jpg" alt="" />
            </a>
            <div className="p-6 text-center border-t-4 border-[var(--detail)]">
              <a href="#">
                <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">Cosplay</h5>
              </a>
              <a href="#" className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                Read more
              </a>
            </div>
            {/* <ul>
              <li>creativiteit</li>
              <li>sociaal</li>
              <li>perspectief kijken</li>
            </ul> */}
          </div>
          {/* <div className="bg-white rounded shadow-xl/30">
            <h1 className="justify-center flex bg-black p-3">Wandelen</h1>
            <ul className="p-3">
              <li>natuur</li>
              <li>rust</li>
              <li>mentale gezondheid</li>
            </ul>
          </div> */}
          <div className="block max-w-sm border border-[var(--accent)] border-default rounded-xl shadow-xs bg-[var(--accent)] shadow-xl/30 border-t-4 border-[var(--accent)]">
            <a href="#">
              <img className="rounded-t-xl" src="/StefanWurpel.jpg" alt="" />
            </a>
            <div className="p-6 text-center border-t-4 border-[var(--detail)]">
              <a href="#">
                <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">Wandelen</h5>
              </a>
              <a href="#" className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
