
import Header from '../src/components/layout/header';
import BentoGridDemo from '../src/components/bento/BentoGrid';

export default function Home() {
  return (

    <>
      <div className="homepage-container border max-w-[1440px] mx-auto">
        <Header />
      </div>

      <div className="homepage-container border max-w-[1440px] mx-auto">
        <BentoGridDemo />
      </div>


    </>


  );
}
