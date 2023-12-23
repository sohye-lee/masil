import * as actions from '@/actions';
import Button from '@/components/button';
import Container from '@/components/container';
import Hero from '@/components/hero';
import { db } from '@/db';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import ResourceImg from 'public/bg-3.jpg';
import { Heart } from 'react-feather';

export default async function TipPage(props: any) {
  'use server';

  const id = parseInt(props.params.id);
  const tip = await db.tip.findUnique({
    where: {
      id: parseInt(props.params.id),
    },
    include: {
      language: true,
    },
  });

  console.log('========');
  console.log('found: ', tip);
  console.log('id: ', id);

  if (!tip) {
    notFound();
  }

  const deleteTipAction = actions.deleteTip.bind(null, tip.id);

  // const deleteAction = await actions.deleteTip(id);
  return (
    <>
      <Hero imgAlt="" imgData={ResourceImg} title={'hi'} />
      <Container wide={false}>
        <div className="w-full flex flex-col gap-3">
          <p className="font-sm text-slate-500 flex items-center gap-1 mb-3">
            <span className="text-sm   border bg-blue-100 border-blue-200 h-[26px] flex justify-center px-1 items-center">
              {tip?.language.name}
            </span>
            <span className="text-sm   gap-1 border bg-pink-100 border-pink-200 h-[26px] flex justify-center px-1 items-center">
              <Heart stroke="#f00" width="14" />
              {tip?.liked}
            </span>
          </p>
          <h1 className="text-2xl font-semibold">{tip?.title}</h1>
          <div className="border border-slate-200 rounded-md px-3 py-2">
            <Link href={tip?.link || '#'}>{tip?.link}</Link>
          </div>
          <div className="flex items-align justify-end gap-3 mt-5">
            <Button
              button={false}
              link={`/tips/${tip?.id}/edit`}
              text="Edit"
              mode="success"
            />
            <form
              action={deleteTipAction}
              method="DELETE"
              className="inline p-0 m-0"
            >
              <Button mode="danger" size="medium" text="Delete" button={true} />
            </form>
            <Button
              button={false}
              link={`/tips`}
              text="Go Back"
              mode="neutral"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
