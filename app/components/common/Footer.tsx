import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="font-sans w-full items-center justify-between p-8 gap-8 bottom-0">    
        <div className="flex items-start justify-between max-w-7xl mx-auto gap-8">            
            <div className="flex flex-col items-start text-neutral-600 max-w-64">
                <Image src="/images/logo.svg" alt="Rinkai Logo" className="h-8 w-48" width={100} height={100} />
                <div className='flex flex-col items-start mt-4 gap-2'>
                    <p>A creative studio crafting digital experiences with passion and ❤️.</p>
                    <p>© 2025 Rinkai Studio</p>                    
                </div>                
            </div>
            <section className='flex items-start gap-8'>
                <div className="flex flex-col items-start text-neutral-600 gap-1">
                    <Link href="/services" className='link-underline'>Business Solution</Link>                    
                    <Link href="/about" className='link-underline'>Digital Experience</Link>
                </div>
                <div className="flex flex-col items-start text-neutral-600 gap-1">
                    <Link href="/about" className='link-underline'>Website Development</Link>
                    <Link href="/about" className='link-underline'>CRM</Link>
                    <Link href="/contact" className='link-underline'>SEO Management</Link>
                </div>
                <div className="flex flex-col items-start text-neutral-600 gap-1">
                    <Link href="/about" className='link-underline'>Service</Link>
                    <Link href="/about" className='link-underline'>About Rinkai</Link>
                    <Link href="/about" className='link-underline'>Documentation</Link>
                </div>
            </section>
            
        </div>
    </div>
  )
}

export default Footer