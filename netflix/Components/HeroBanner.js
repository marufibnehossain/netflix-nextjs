"use client"
import React from 'react'
import trailer from "@/public/videos/MemuAagamu.mkv"
import audio from '@/public/videos/MemuAagamu.vtt'

const HeroBanner = () => {
  return (
    <div className='w-full h-screen'>
      <div className='w-full h-[100vh] relative overflow-hidden'>
        <div className='w-full h-40 bg-gradient-to-t from-transparent via-transparent to-black absolute'></div>
        <div className='w-full bottom-0 h-screen bg-gradient-to-b from-transparent via-transparent to-[#141414] absolute'></div>
        <video className='w-full h-auto' src={trailer} autoPlay muted loop>
            <source src={trailer} type='video/mp4' />
            <track src={audio} kind="captions" srcLang="en" label="English" />
        </video>
        {/* <ReactPlayer width={1920} height={900} url={'https://youtu.be/OXsjVrXVO50?si=WqZ7cK2bUFShTd1V'} /> */}
      </div>
    </div>
  )
}

export default HeroBanner
