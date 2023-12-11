import Image from 'next/image';
import LifeImage from 'public/life.jpg';
import Hero from '@/components/hero';

export default function LifePage() {
    return <div className='w-full'>
        <Hero title="Talk about Life" description='here is the place' imgAlt='' imgData={LifeImage} />
        {/* Life Page
        <div className='absolute -z-10 inset-0'>
            <Image 
                src={LifeImage} 
                alt="life"
                fill 
                style={{objectFit: 'cover'}}
            />
        </div> */}
    </div>
}