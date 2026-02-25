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
        <div className="grid grid-cols-2 bg-white rounded-xl shadow-xl/30">

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
              <li>1 introductie</li>
              <li>2 hobbies</li>
              <li>3 vaardigheden</li>
              <li>4 call to action</li>
              <li>5 hoofd projecten</li>
            </ul> */}
          </div>
        </div><br />
        <div className="flex items-center justify-center text-4xl text-white"><Divider className="" />Skills<Divider /></div>
        <div className="grid pt-6 gap-6 justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          <div>
            <div className="bg-white rounded-xl  border-[var(--accent)] ">
              <div className="col-span-3 border-b-4 text-center p-3"><h1 className="text-2xl">Frontend Skills</h1></div>
              <div className="flex flex-wrap gap-4 text-4xl text-black p-3">
                <div className="grid grid-cols-3 gap-8 justify-items-center">
                  <div className="flex flex-col items-center gap-3">
                    <SiNextdotjs title="Next.js" className="h-24 w-24 text-[black]" />
                    <p>Next.js</p>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <SiTypescript title="TypeScript" className="text-[#3178C6] h-24 w-24" />
                    <p>TypeScript</p>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <SiTailwindcss title="Tailwind CSS" className="text-[#38bdf8] h-24 w-24" />
                    <p>TailwindCSS</p>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <SiJavascript className="h-24 w-24 text-[yellow]" />
                    <p>JavaScript</p>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <FaHtml5 className="h-24 w-24 text-[orange]" />
                    <p>HTML</p>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <FaSass className="h-24 w-24 text-[pink]" />
                    <p>SCSS</p>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <FaAngular className="h-24 w-24 text-[red]" />
                    <p>Angular</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl border-[var(--accent)] block">
              <div className="col-span-3 border-b-4 text-center"><h1 className="text-2xl p-3">Backend Skills</h1></div>
              <div className="grid grid-cols-3 gap-8 justify-items-center p-3 text-4xl text-black">
                <div className="flex flex-col items-center gap-3">
                  <FaNodeJs title="Node.js" className="text-[#3C873A] h-24 w-24" />
                  <p>Node.js</p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <FaLaravel className="h-24 w-24 text-[red]" />
                  <p>Laravel</p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <SiMysql className="h-24 w-24 text-[black]" />
                  <p>MySQL</p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <TbBrandCSharp className="h-24 w-24 text-[purple]" />
                  <p>C#</p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <FaJava className="h-24 w-24 text-[black]" />
                  <p>Java</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl max-w-sm border-[var(--accent)] block">
              <div className="col-span-3 border-b-4 text-center"><h1 className="text-2xl p-3">Frontend Skills</h1></div>
              <div className="grid grid-cols-3 gap-8 justify-items-center p-3 text-4xl text-black">
                <div className="flex flex-col items-center gap-3">
                  <SiCplusplus className="h-24 w-24 text-[blue]" />
                  <p>C++</p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <FaUnity className="h-24 w-24 text-[black]" />
                  <p>Unity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><div className="flex items-center justify-center text-white"><Divider className="h-px" /><h1 className="flex justify-center text-4xl">Hobby's</h1><Divider /></div>
        <div className="grid pt-6 gap-6 justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          <div className="block max-w-sm border border-[var(--accent)] border-default rounded-xl shadow-xs bg-[var(--accent)]">
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
          <div className="block max-w-sm border border-[var(--accent)] border-default rounded-xl shadow-xs bg-[var(--accent)]">
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
          <div className="block max-w-sm border border-[var(--accent)] border-default rounded-xl shadow-xs bg-[var(--accent)]">
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
          <div className="block max-w-sm border border-[var(--accent)] border-default rounded-xl shadow-xs bg-[var(--accent)]">
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
