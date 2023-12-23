import Container from '@/components/container';
import Hero from '@/components/hero';
import TipImage from 'public/bg-3.jpg';

export default function EditTipPage() {
  return (
    <>
      <Hero title={``} imgData={TipImage} imgAlt="" />
      <Container wide={false}>
        <div className="w-full">Edit</div>
      </Container>
    </>
  );
}
