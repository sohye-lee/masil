import Link from "next/link";

export default function Header() {
return (
    <div className="fixed top-0 left-0 w-full z-10"> 
        <nav className="flex items-center justify-center space-x-5 py-4  text-white">
            <Link href="/">Home</Link>
            <Link href="/snippets">Snippets</Link>
            <Link href="/questions">Questions</Link>
            <Link href="/resources">Resources</Link>
        </nav>
    </div>
        )
}