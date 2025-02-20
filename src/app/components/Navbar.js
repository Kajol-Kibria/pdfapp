'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoCartOutline  } from "react-icons/io5";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { usePathname } from 'next/navigation';
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import img from '../../../public/logopdf.png'


export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const path = usePathname();
    const navarray = [
        {
            name : 'Home',
            link : '/'
        },
        {
            name : 'About',
            link : '/about'
        },
        {
            name : 'Contact',
            link : '/contact'
        }
    
    ]
  return (
    <div className='px-6 sm:px-40 mx-auto shadow-md h-[9vh] content-center'>
        <div className='flex items-center justify-between '>
            <div>
                <Link className='flex items-center' href='/'>
                <Image src={img} width={40} height={40} alt='logo'/>
                <p className='ml-4 font-bold text-[rgb(190,64,39)] text-lg sm:text-4xl py-2 '>PDF</p>
                <p className='font-bold text-lg sm:text-4xl py-2 '>Ram</p>
                </Link>
            </div>
            <div className='hidden sm:block'>

            <div className='flex gap-12 font-semibold '>
                {navarray.map(({name, link})=>{
                    return(
                    <div key={name} className={`${path === link && 'underline underline-offset-8 text-black'}`}>
                        <Link href={link}>{name}</Link>
                    </div>
                    )
                })}
            </div>
            </div>
            <div className='flex sm:gap-5 gap-2'>
                
                <div className='flex items-center gap-5'>
                <button className='font-medium border border-black rounded-lg px-7 py-2 hidden sm:block hover:text-white hover:bg-[#8b48fd] hover:border-[#8b48fd] transition duration-300'>Sign in</button> 
                <button className='font-medium border border-[#8b48fd] text-white bg-[#8b48fd] rounded-lg px-7 py-2 hidden sm:block hover:text-black hover:bg-white hover:border-[#8b48fd] transition duration-300'>Free Trial</button> 
      
                </div>
                <div onClick={()=>{setMenu(!menu)}} className='block sm:hidden z-50'>
                    <HiOutlineMenuAlt1 className={`${menu?'hidden':'block'}`} size={27}/>
                    <IoMdClose className={`${menu?'block':'hidden'} fixed right-6`} size={27}/>
                </div>
                <div onClick={()=>{setMenu(!menu)}} className={`fixed z-40 right-0 left-0 bottom-0 top-0 bg-orange-50 py-20 text-gray-700 ${menu?'block':'hidden'}`}>
                    {navarray.map(({name, link})=>{
                        return(
                            <div key={name} className={`w-[80%] mx-auto text-center font-semibold border-b border-gray-600/20 py-6  ${path === link && 'underline underline-offset-8 text-black'}`}>
                                <Link href={link}>{name}</Link>
                                
                            </div>
                                
                        )
                    })}
                    
                    <div className='flex items-center justify-center gap-5 m-5'>

<button className='border border-black rounded-lg w-32 py-2 '>Sign in</button> 
<button className='text-white border border-[#8b48fd] bg-[#8b48fd] rounded-lg w-32 py-2 '>Free Trial</button> 
</div>
                </div>
                
                
            </div>
        </div>

    </div>
  )
}