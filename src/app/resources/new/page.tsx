import Container from "@/components/container";
import Hero from "@/components/hero";
import ResourceCreateForm from "@/components/resource-create-form";
import ResourceImage  from 'public/bg-1.jpg';

export default function CreateResource () {
    return (
        <>
            <Hero title="Upload Useful Information" imgAlt="" imgData={ResourceImage} description="" />
            <Container wide={false} >
                <ResourceCreateForm />
            </Container>
        </>
    )
}