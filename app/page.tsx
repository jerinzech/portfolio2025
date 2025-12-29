
import Header from '../src/components/layout/header';
// import BentoGridDemo from '../src/components/bento/BentoGrid';
// import BentoGridDemo from '@/src/components/bento/BentoGrid';
import CFHomepage from '@/src/components/clutterfreeview/CFHomepage';

export default function Home() {
  return (

    <>
      <div style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}>
        <div className="homepage-header border max-w-360 mx-auto max-h-[10vh] ">
          <Header />
        </div>

        {/*<div className="homepage-container border max-w-[1440px] mx-auto">
        <BentoGridDemo />
      </div> */}

        <div className="homepage-body border max-w-360 mx-auto min-h-[88vh] flex flex-col justify-center items-center">
          <CFHomepage />
        </div>
        <div className="homepage-footer border max-w-360 mx-auto min-h-[3vh]">
          Footer
        </div>
      </div >


    </>


  );
}
