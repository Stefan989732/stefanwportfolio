'use client'

import {
  Image,
  Divider
} from "@heroui/react";

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
        <div className="flex justify-center text-4xl"><Divider />Skills<Divider /></div>

        <br /><div className="flex justify-center"><Divider /><h1 className="flex justify-center text-4xl">Hobbies</h1><Divider /></div>
        <div className="grid pt-6 grid-cols-4 gap-6">
          <div className="bg-white rounded shadow-xl/30">
            <h1 className=" justify-center flex text-xl">Gaming</h1>
            <ul>
              <li>team oriented/co-op games</li>
              <li>strategy games</li>
              <li>puzzle games</li>
            </ul>
          </div>
          <div className="bg-white col-start-2 rounded shadow-xl/30">
            <h1 className=" justify-center flex">Sporten</h1>
            <ul>
              <li>discipline</li>
              <li>4x per week</li>
              <li>calisthenics/home gym</li>
            </ul>
          </div>
          <div className="bg-white rounded shadow-xl/30">
            <h1 className=" justify-center flex">Cosplay</h1>
            <ul>
              <li>creativiteit</li>
              <li>sociaal</li>
              <li>perspectief kijken</li>
            </ul>
          </div>
          <div className="bg-white rounded shadow-xl/30">
            <h1 className=" justify-center flex">Wandelen</h1>
            <ul>
              <li>natuur</li>
              <li>rust</li>
              <li>mentale gezondheid</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
