import Link from 'next/link'
import { landingpagesliders } from '../../lib/placeholder-data'
import Image from 'next/image'

export default function LandingPageHeader() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <h1 className='text-5xl font-bold mb-10 text-purple-900'>Tech Lovers World</h1>
            <div className='flex flex-row items-center justify-center w-full mb-5 p-5 bg-purple-100 rounded-lg shadow-lg'>
                <div className='flex flex-col mr-8'>
                    <h1 className="text-3xl font-bold mb-3 text-purple-900">{landingpagesliders[0].title}</h1>
                    <p className="mb-3">{landingpagesliders[0].description}</p>
                </div>
                <div className='bg-white z-10'>
                    <Image 
                        src={landingpagesliders[0].imageUrl} 
                        alt={landingpagesliders[0].title} 
                        width={384}
                        height={240}
                    />
                </div>
            </div>
            <div className="w-auto bg-purple-800 text-white border-solid outline-1 rounded-md p-3 z-10">
                <Link href="/blog">View Latest Articles</Link>
            </div>
        </div>
    )
}