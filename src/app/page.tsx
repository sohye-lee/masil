import Image from "next/image";
import HomeImage from "public/home.jpg";


export default function Home() {
  return (
    <div>
      Home
      <div className='absolute -z-10 inset-0'>
          <Image 
              src={HomeImage} 
              alt="life"
              fill 
              style={{objectFit: 'cover'}}
          />
      </div>
    </div>
  )
}
