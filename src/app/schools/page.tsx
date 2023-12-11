import Image from 'next/image';
import ShoolImage from 'public/schools.jpg';

export default function SchoolsPage() {
    return <div>
        School Page
        <div className='absolute -z-10 inset-0'>
            <Image 
                src={ShoolImage} 
                alt="life"
                fill 
                style={{objectFit: 'cover'}}
            />
        </div>
    </div>
}