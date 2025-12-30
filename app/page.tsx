
import Header from '../src/components/layout/Header';
// import BentoGridDemo from '../src/components/bento/BentoGrid';
// import CustomCursor from '@/src/components/clutterfreeview/CustomCursor.jsx';
// import BentoGridDemo from '@/src/components/bento/BentoGrid';
import CFHomepage from '@/src/components/clutterfreeview/CFHomepage';
import Footer from '@/src/components/layout/Footer';
export default function Home() {
  return (

    <>
      {/* <CustomCursor /> */}
      <div style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}>
        <div className="homepage-header max-w-360 mx-auto max-h-[10vh] ">
          <Header />
        </div>

        {/*<div className="homepage-container border max-w-[1440px] mx-auto">
        <BentoGridDemo />
      </div> */}

        <div className="homepage-body max-w-360 mx-auto min-h-[87vh] flex flex-col justify-center items-center">
          <CFHomepage />
          {/* <div className=""> <a href="#" className="px-6 py-3 bg-gray-200 rounded-lg text-xl text-black">
            Hover Me
          </a></div> */}
        </div>

        <div className="homepage-footer  max-w-360 mx-auto min-h-[3vh]">
          <Footer />
        </div>
      </div >


    </>


  );
}
