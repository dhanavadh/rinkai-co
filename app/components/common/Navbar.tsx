import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="font-sans w-full items-center justify-between p-4 gap-8 fixed z-50">    
        <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Image src="/images/logo-fish-white.svg" alt="Rinkai Logo" width={200} height={38} className="h-8 hidden lg:flex" />    
            <Image src="/images/logo-fish-only.svg" alt="Rinkai Logo" width={100} height={38} className="h-8 flex lg:hidden" />    
            <div className="flex items-center gap-4 text-neutral-50">
                <a href="/about" className='link-underline'>บริการ</a>
                <a href="/about" className='link-underline'>เกี่ยวกับเรา</a>
                <a href="/contact" className='link-underline'>ติดต่อ</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar