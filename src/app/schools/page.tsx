import ShoolImage from 'public/schools.jpg';
import Hero from '@/components/hero';
import { db } from '@/db';

export default async function SchoolsPage() {


    return <div className='w-full'>
        <Hero 
            title="Talk about Life" 
            description='here is the place' 
            imgAlt='' 
            imgData={ShoolImage} 
        />
 
    </div>
 
}