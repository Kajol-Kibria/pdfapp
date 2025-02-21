'use client'
import React, { useRef, useState } from 'react'

import { IoMdImages } from "react-icons/io";
export default function page() {
  const inputRef = useRef(null);
  
  const [image, setImage] = useState('');
  const handleImageClick= () =>{
    inputRef.current.click();
  }
  const handleImageChange= (event) =>{
    const file = event.target.files[0];
    console.log(file);
    setImage( event.target.files[0])
    
  }

  return (
    <div className='h-screen flex items-start justify-center text-center'>
      <div className='my-10'>
        <h1 className='font-bold text-4xl'>Convert Images to PDF files</h1>
        <div className=' flex items-center justify-center'>
          {/* dragdrop */}
          <input className='hidden' type='file' onChange={handleImageChange} ref={inputRef} />
              <div onClick={handleImageClick}>
                {image?(
                  <div className='flex items-center justify-center'>

                    <img className=' rounded-2xl h-[145px] w-[145px] object-cover ' src={URL.createObjectURL(image)}/>
                  </div>
                ):(
                  
                  <div className='w-[330px] h-[145px] gap-5 flex flex-col items-center  justify-center bg-gray-200/15 outline-none rounded-md py-10 px-10' >
                <p className=''>Upload Company Logo</p>
                <IoMdImages size={30} />
                </div>
                )}
              </div>
        </div>
      </div>
    </div>
  )
}
