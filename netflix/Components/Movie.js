import Image from 'next/image'
import React from 'react'
import image from '@/public/videos/allu1200.jpg'
import trailer from "@/public/videos/MemuAagamu.mkv"
import audio from '@/public/videos/MemuAagamu.vtt'
import { FaPlayCircle } from "react-icons/fa"
import { GoPlus } from "react-icons/go";
import { SlLike } from "react-icons/sl";
import { IoCloseOutline, IoChevronDown } from "react-icons/io5";

const Movie = (props) => {
  return (
    <>
        <Image className='relative' src={image} width={295} height={165} alt='movie-image' />
        <div className='w-[444px] h-[420px] bg-[#181818]'>
          <video className='w-full h-auto' src={trailer} autoPlay loop muted>
              <source src={trailer} type='video/mp4' />
              <track src={audio} kind="captions" srcLang="en" label="English" />
          </video>
          <div className='flex justify-between px-5 pt-5'>
            <div className='flex items-center gap-1.5'>
              <FaPlayCircle className='text-white hover:text-[#e6e6e6] text-[40px] transition-colors duration-200' />
              <div className='rounded-full border-2 border-[#919191] hover:border-[#fefefe] bg-[#303030] p-0.5 transition-colors duration-200'><GoPlus className='text-white text-[32px]' /></div>
              <div className='rounded-full border-2 border-[#919191] hover:border-[#fefefe] bg-[#303030] p-2 transition-colors duration-200'><SlLike className='text-white text-[20px]' /></div>
              <div className='rounded-full border-2 border-[#919191] hover:border-[#fefefe] bg-[#303030] p-0.5 transition-colors duration-200'><IoCloseOutline className='text-white text-[32px]' /></div>
            </div>
            <div className='rounded-full border-2 border-[#919191] hover:border-[#fefefe] bg-[#303030] p-1.5 transition-colors duration-200'><IoChevronDown className='text-white text-2xl' /></div>
          </div>
          {/* <div className='px-5 mt-3'><p className='text-sm font-netflix text-white'><strong>{props.season}:{props.episode}</strong> {props.episodeName}</p></div> */}
        </div>
    </>
  )
}

export default Movie
