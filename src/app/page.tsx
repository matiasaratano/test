import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';
import AnimatedTextCycle from '@/components/ui/animated-text-cycle';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="p-4 max-w-[500px] mx-auto mt-10 text-center">
        <h1 className="text-4xl font-light text-muted-foreground">
          Tu lugar para{' '}
          <AnimatedTextCycle
            words={[
              'relajar',
              'disfrutar',
              'descansar',
              'conectar',
              'explorar',
              'desconectar',
            ]}
            interval={3000}
            className={'text-foreground font-semibold'}
          />{' '}
          en Villa Gesell
        </h1>
      </div>
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            Bienvenido a nuestra web <br />
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Departamentos Norte
            </span>
          </h1>
        }
      >
        <div className="h-full w-full rounded-lg overflow-hidden">
          <Image
            src="/about-img1.webp"
            alt="Paisaje natural"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </ContainerScroll>
    </main>
  );
}
