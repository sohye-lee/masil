import Button from '@/components/button';
import Container from '@/components/container';
import Header from '@/components/header';

export default function NotFound() {
  return (
    <>
      <Header />
      <Container wide={true}>
        <div className="w-full h-[90vh]  flex flex-col justify-center items-center">
          <h2 className="text-lg">Sorry, we cannot find what you requested.</h2>
          <Button
            size="small"
            text="Go Home"
            button={false}
            mode="neutral"
            addClass="mt-5"
          />
        </div>
      </Container>
    </>
  );
}
