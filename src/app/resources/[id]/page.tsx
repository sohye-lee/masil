import * as actions from "@/actions";
import Button from "@/components/button";
import Container from "@/components/container";
import Hero from "@/components/hero";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import ResourceImg from 'public/bg-3.jpg';

interface ResourceProps {
    params: {
        id: string;
    }
}

export default async function  Resource(props:ResourceProps) {
    const id = parseInt(props.params.id);
    const resource = await db.resource.findUnique({
        where: {id}
    })

    if (!resource) {
        notFound();
    }

    const deleteAction = actions.deleteResource(id);
    return (
        <>
            <Hero imgAlt="" imgData={ResourceImg} title={resource.title} />
            <Container wide={false}>
                <div className="w-full flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold">{resource.title}</h1>
                    <div className="border border-slate-200 rounded-md px-3 py-2">
                        <Link href={resource.link}>
                            {resource.link}
                        </Link>
                    </div>
                    <div className="flex justify-end gap-3">
                        <Button button={false} link={`/resources/${resource.id}`} text="Edit" mode="success"  />
                        <Button button={true} onClick={deleteAction} text="Delete" mode="danger"  />
                        <Button button={false} link={`/resources`} text="Go Back" mode="neutral"  />
                    </div>
                </div>
            </Container>
        </>
    )
}