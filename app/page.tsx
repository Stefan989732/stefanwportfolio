'use client'

import Navbar from './components/Navbar'
import {
  Image
} from "@heroui/react";

export default function Home() {
  return (
    <div>
    <Navbar /><br /><br /><br />
<div className='p-3'>
    <div className="bg-black shadow-lg rounded-xl p-6 padding-4 w-full h-150">
      
      <div className='justify-center flex' >
        <Image src={'/ProfilePicture.jpg'} className="mask-radial-at-center mask-radial-from-50% mask-radial-to-70%" />
      </div>
      <h1 className="text-gray-600 justify-center flex">Stefan Wurpel :D</h1><br />
      <p className='text-gray-600 justify-center flex'>Welcome op mijn portfolio pagina :D</p>


  </div>
</div>
</div>
  );
}
