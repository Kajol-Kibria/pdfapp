import Image from 'next/image'
import React from 'react'
import img from '../../../public/download_resource.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from 'next/link';
import { PiArrowArcRight } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";

import img1 from '../../../public/imageicon.png'
import img2 from '../../../public/pdficon.png'
import img3 from '../../../public/powerpointicon.png'
import img4 from '../../../public/wordicon.png'
import img5 from '../../../public/excelicon.png'
import img9 from '../../../public/marge.svg'
import img10 from '../../../public/compress.svg'
import img11 from '../../../public/summerize.svg'
import img12 from '../../../public/linkicon.svg'

export default function Hero() {

  const array = [
    { 
      id: 1,
      from: img1,
      to: img2,
      title:'Image to PDF',
      des:'A too to convert your images to PDF.',
      path:'/imagetopdf'
    },
    { 
      id: 2,
      from: img2,
      to: img1 ,
      title:'PDF to Image',
      des:'A too to convert your PDF to image.',
      path:'/pdftoimage'
    },
    { 
      id: 3,
      from: img3,
      to: img2,
      title:'PPT to PDF',
      des:'A too to convert your PPT to PDF.',
      path:'/ppttopdf'
    },
    { 
      id: 4,
      from: img2,
      to: img3,
      title:'PDF to PPT',
      des:'A too to convert your PDF to PPT.',
      path:'/pdftoppt'
    },
    { 
      id: 5,
      from: img4,
      to: img2,
      title:'Word to PDF',
      des:'A too to convert your word to PDF.',
      path:'/wordtopdf'
    },
    { 
      id: 6,
      from: img2,
      to: img4,
      title:'PDF to Word',
      des:'A too to convert your PDF to word.',
      path:'/pdftoword'
    },
    { 
      id: 7,
      from: img5,
      to: img2,
      title:'Excel to PDF',
      des:'A too to convert your Excel to PDF.',
      path:'/exceltopdf'
    },
    { 
      id: 8,
      from: img2,
      to: img5,
      title:'PDF to Excel',
      des:'A too to convert your PDF to Excel.',
      path:'/pdftoexcel'
    },
    { 
      id: 9,
      from: img,
      to: img9,
      title:'Marge PDF',
      des:'A too to marge your PDF.',
      path:'/margepdf'
    },
    { 
      id: 10,
      from: img,
      to: img10,
      title:'Compress PDF',
      des:'A too to Compress your PDF.',
      path:'/compresspdf'
    },
    { 
      id: 11,
      from: img,
      to: img11,
      title:'Summarize PDF',
      des:'A too to summarize your PDF.',
      path:'/summarizepdf'
    },
    { 
      id: 12,
      from: img12,
      to: img2,
      title:'URL to PDF',
      des:'A too to convert your URL to PDF.',
      path:'/urltopdf'
    },
  ]


  return (
    <div className='sm:py-40 bghero'>
      <div className='px-6 sm:px-40 mx-auto content-center flex items-center justify-between'>
        <div className='space-y-4'>
          <p className='text-5xl font-bold'>Simplify Your PDF Tasks</p>
          <p className='text-5xl font-bold'>with <span className='text-[#8b48fd]'>PDFRam</span></p>
          <p className='w-[25vw]'>All the tools you&apos;ll need to be more productive and work smarter with documents.</p>
          <div className='flex items-center  gap-5 py-5'>
          <button className='flex items-center gap-3 font-medium border border-[#8b48fd] text-white bg-[#8b48fd] rounded-lg px-7 py-2 hover:text-black hover:bg-white hover:border-[#8b48fd] transition duration-300'>Free Trial<FaArrowRightLong/></button>
          <button className='font-medium border border-black rounded-lg px-7 py-2 hover:text-white hover:bg-[#8b48fd] hover:border-[#8b48fd] transition duration-300'>Explore all PDF Tools</button> 
          </div>
        </div>
        <div className='sm:mr-14'>
        <Image src={img} width={700} height={700} alt='pic'/>
          
        </div>
      </div>
      <div className=' px-6 sm:px-80 flex flex-col items-center text-center py-28'>
        <h1 className='text-4xl font-bold'>Most Popular <span className='text-[#8b48fd]'>PDF Tools</span></h1>
        <p className='w-1/2 mx-auto py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nulla velit labore ea. Deserunt, mollitia? Laboriosam ullam qui accusantium obcaecati!</p>
        
        <div className='grid grid-cols-4 gap-8 my-7'>
          {array.map((data)=>{
            return(
              <div className={` bg-white/40  border-gray-600/30 border shadow hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-lg px-4 h-44 content-center`} key={data.id}>
                <Link href={data.path}>
                <div className='flex items-center justify-center gap-4 py-3'>
                  <Image className={`${data.from !==img?'block':'hidden'}`} src={data.from} width={35} height={36} alt='logo'/>
                  <PiArrowArcRight className={`${data.from !==img?'block':'hidden'}`} size={30}/>
                  <Image src={data.to} width={35} height={36} alt='logo'/>
                </div>
                  <p className='text-lg font-semibold py-1'>{data.title}</p>
                  <div className=''>
                  <p className='text-sm'>{data.des}</p>
                  
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
        
        
        {/* <button className='flex items-center font-medium border border-black rounded-lg px-7 py-2 my-14 hover:text-white hover:bg-[#8b48fd] hover:border-[#8b48fd] transition duration-300'>See all PDF Tools <MdKeyboardDoubleArrowRight/></button>  */}
          
      </div>
    </div>
  )
}
