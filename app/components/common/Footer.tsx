import React from 'react'

const Footer = () => {
  return (
    <div className="font-sans w-full items-center justify-between p-8 gap-8 bottom-0">    
        <div className="flex items-start justify-between max-w-7xl mx-auto gap-8">            
            <div className="flex flex-col items-start text-neutral-600 max-w-64">
                <img src="/images/logo-fish-neutral.svg" alt="Rinkai Logo" className="h-6" />
                <div className='flex flex-col items-start mt-4'>
                    <p>Rinkai Studio – ริงไค สตูดิโอ</p>
                    <p>Empowering your business with Rinkai</p>
                    <p>Connect us via <a href="mailto:connect@rinkai.co" className='link-underline'>connect@rinkai.co</a></p>
                </div>
            </div>
            <section className='flex items-start gap-4'>
                <div className="flex flex-col items-start text-neutral-600">
                    <a href="/about" className='link-underline'>บริการ</a>
                    <a href="/about" className='link-underline'>เกี่ยวกับเรา</a>
                    <a href="/contact" className='link-underline'>ติดต่อ</a>
                </div>
            </section>
            
        </div>
    </div>
  )
}

export default Footer