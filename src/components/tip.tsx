import { Language, Snippet } from '@prisma/client';
import Link from 'next/link';

interface TipProps {
  id: number;
  title: string;
  link: string;
  comment?: string;
  liked?: number;
  language: Language;
  [key: string]: any;
}

export default function Tip({
  id,
  title,
  link,
  comment,
  liked,
  language,
  ...rest
}: TipProps) {
  return (
    <Link
      href={`/tips/${id}`}
      className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-400 mb-3 flex justify-between items-end"
      key={id}
    >
      <div>
        <p className="text-sm text-slate-500">
          {id} {language.name}
        </p>
        <h2 className="text-xl font-medium">{title}</h2>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-xs font-light mb-1 pr-1">{liked} Liked</p>
        <div className="border bg-slate-400 text-white text-sm rounded-md px-2 py-1">
          View
        </div>
      </div>
    </Link>
  );
}
