import { Language, Snippet } from "@prisma/client";
import Link from "next/link";

interface LanguageProps {
  id: number;
  name: string;
}

interface SnippetProps {
  id: number;
  title: string;
  body: string;
  liked?: number;
  language: LanguageProps;
  [key: string]: any;
}

export default function Snippet ({id,title,body,liked,language,...rest}:SnippetProps) {
    return (
      <Link href={`/snippets/${id}`} className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-400 mb-3 flex justify-between items-end" key={id}>
        <div>
          <p className="text-sm text-slate-500">{language.name}</p>
          <h2 className="text-xl font-medium">{title}</h2>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-xs font-light mb-1 pr-1">
            {liked} Liked
          </p>
          <div className="border bg-slate-400 text-white text-sm rounded-md px-2 py-1">View</div>
        </div>
      </Link>
    )
}