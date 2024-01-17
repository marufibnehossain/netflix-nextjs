"use client"
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/Images/logos/nightswatch.png'
import { usePathname } from 'next/navigation'
import { GoSearch, GoBell } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import profile from '@/public/Images/profile.jpg'

const Navbar = () => {
  const pathname = usePathname();
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      setBackgroundTransparacy(backgroundTransparacyVar);
    }
  }, [clientWindowHeight]);

  return (
    <div className='text-white z-50'>
        <div className='px-[60px] py-5 w-full flex justify-between fixed z-50' style={{
        background: `rgba(0, 0, 0, ${backgroundTransparacy})`,
        // padding: `${padding}px 0px`,
        // boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}>
            <div className='text-white flex items-center'>
                <Link href={''}><Image src={Logo} width={180} className='me-6' /></Link>
                <div className='font-netflix text-xs text-[#e5e5e5] leading-4 font-netflix '>
                    <Link href={'/'} className={`link ${pathname === '/' ? 'active:netflix-bold ms-5 transition-colors duration-300 hover:text-[#b3b3b3]' : 'ms-5 transition-colors duration-300 hover:text-[#b3b3b3]'}`}>Home</Link>
                    <Link href={'/tv-shows'} className={`link ${pathname === '/tv-shows' ? 'active:netflix-bold ms-5 transition-colors duration-300 hover:text-[#b3b3b3]' : 'ms-5 transition-colors duration-300 hover:text-[#b3b3b3]'}`}>TV Shows</Link>
                    <Link href={'/movies'} className={`link ${pathname === '/movies' ? 'active:netflix-bold ms-5 transition-colors duration-300 hover:text-[#b3b3b3]' : 'ms-5 transition-colors duration-300 hover:text-[#b3b3b3]'}`}>Movies</Link>
                    <Link href={'/news&popular'} className={`link ${pathname === '/news&popular' ? 'active:netflix-bold ms-5 transition-colors duration-300 hover:text-[#b3b3b3]' : 'ms-5 transition-colors duration-300 hover:text-[#b3b3b3]'}`}>New & Popular</Link>
                    <Link href={'/my-list'} className={`link ${pathname === '/my-list' ? 'active:netflix-bold ms-5 transition-colors duration-300 hover:text-[#b3b3b3]' : 'ms-5 transition-colors duration-300 hover:text-[#b3b3b3]'}`}>My List</Link>
                    <Link href={'/browse-by-languages'} className={`link ${pathname === '/browse-by-languages' ? 'active:netflix-bold ms-5 transition-colors duration-300 hover:text-[#b3b3b3]' : 'ms-5 transition-colors duration-300 hover:text-[#b3b3b3]'}`}>Browse by Languages</Link>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <GoSearch className='text-2xl' />
                <GoBell className='text-2xl' />
                <div className='flex gap-1 items-center'><Image className='rounded-md' src={profile} width={32} height={32} /><FaCaretDown className='text-xl' /></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
