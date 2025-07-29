'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();
  
  const isIndexPage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if at top
      setIsAtTop(currentScrollY === 0);
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down and past threshold
        setIsScrollingDown(true);
      } else {
        // Scrolling up or at top
        setIsScrollingDown(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Determine styles based on page and scroll position
  const getBackgroundClass = () => {
    if (!isIndexPage) return 'bg-neutral-50';
    return isAtTop ? 'bg-transparent' : 'bg-neutral-50';
  };

  const getLargeLogoSrc = () => {
    if (!isIndexPage) return '/images/logo-fish-neutral.svg';
    return isAtTop ? '/images/logo-fish-white.svg' : '/images/logo-fish-neutral.svg';
  };

  const getSmallLogoSrc = () => {
    if (!isIndexPage) return '/images/logo-fish-only-black.svg';
    return isAtTop ? '/images/logo-fish-only.svg' : '/images/logo-fish-only-black.svg';
  };

  const getTextColorClass = () => {
    if (!isIndexPage) return 'text-neutral-800';
    return isAtTop ? 'text-neutral-50' : 'text-neutral-800';
  };

  return (
    <div className={`font-sans w-full items-center justify-between py-4 px-8 gap-8 fixed ${isScrollingDown ? 'top-[-64px]' : 'top-0'} ${getBackgroundClass()} z-50 transition-all duration-300 ease-in-out`}>    
        <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link href="/" className="flex items-center gap-4">
              <Image 
                src={getLargeLogoSrc()} 
                alt="Rinkai Logo" 
                width={200} 
                height={38} 
                className="h-8 hidden lg:flex" 
              />    
              <Image 
                src={getSmallLogoSrc()} 
                alt="Rinkai Logo" 
                width={100} 
                height={38} 
                className="h-8 flex lg:hidden" 
              />
            </Link>
            <div className={`flex items-center gap-4 ${getTextColorClass()}`}>
                <Link href="/services" className='link-underline'>Services</Link>
                <Link href="/about" className='link-underline'>About Us</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar