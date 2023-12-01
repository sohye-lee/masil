import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <div>
    <div className="flex items-center justify-center space-x-3">

    <Link href="">Home</Link>
    <Link href="/talks">Talks</Link>
    <Link href="/schools">Schools</Link>
    <Link href="/life">Life</Link>
    </div>
  </div>
  )
}
