import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="font-sans w-full items-center justify-between p-8 gap-8 bottom-0">    
        <div className="flex items-start justify-between max-w-7xl mx-auto gap-8">            
            <div className="flex flex-col items-start text-neutral-600 max-w-64">
                <Image src="/images/logo-fish-neutral.svg" alt="Rinkai Logo" className="h-6" width={100} height={24} />
                <div className='flex flex-col items-start mt-4'>
                    <p>Rinkai Studio – ริงไค สตูดิโอ</p>
                    <p>Empowering your business with Rinkai</p>
                    <p>Connect us via <a href="mailto:connect@rinkai.co" className='link-underline'>connect@rinkai.co</a></p>
                </div>
            </div>
            <section className='flex items-start gap-4'>
                <div className="flex flex-col items-start text-neutral-600">
                    <Link href="/about" className='link-underline'>บริการ</Link>
                    <Link href="/about" className='link-underline'>เกี่ยวกับเรา</Link>
                    <Link href="/contact" className='link-underline'>ติดต่อ</Link>
                </div>
            </section>
            
        </div>
    </div>
  )
}

export default Footer