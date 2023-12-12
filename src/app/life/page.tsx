import Image from 'next/image';
import LifeImage from 'public/life.jpg';
import Hero from '@/components/hero';

export default function LifePage() {
    return <div className='w-full'>
        <Hero 
            title="Talk about Life" 
            description='here is the place' 
            imgAlt='' 
            imgData={LifeImage} 
        />
         
    </div>
}