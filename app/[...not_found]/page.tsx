import Link from 'next/link';
import AnimatedLogo from '../components/AnimatedLogo';

const NotFound = () => {
  const errorFrames = [
    "/images/components/error/frame1.svg",
    "/images/components/error/frame2.svg",
    "/images/components/error/frame3.svg"
  ];

  return (
    <div className='flex flex-col items-center justify-center min-h-screen font-sans'>
        <AnimatedLogo
          frames={errorFrames}
          width={100}
          height={100}
          className="object-cover"
          interval={500}
          alt="Page Not Found Animation"
        />
        <h1 className="text-xl mt-4">It seems like nothing's here</h1>    
        <Link href="/" className="mt-4 link-underline">
          Go back to Home
        </Link>    
    </div>
  )
}

export default NotFound