import Header from '../src/components/layout/header';
import CFHomepage from '../src/components/clutterfreeview/CFHomepage';
import Footer from '../src/components/layout/footer';

export default function Home() {
  return (

    <>

      {/* <div className="" style={{
        backgroundImage: "url('/noiselayer.png')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'justify',
        minHeight: '100vh',
        zIndex: 10,

      }}> */}

      <div style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05)1px, transparent 1px)`,
        backgroundSize: '17px 17px'
      }}>
        <div className="homepage-header max-w-360 mx-auto max-h-[10vh] ">
          <Header />
        </div>



        <div className="homepage-body max-w-360 mx-auto min-h-[87vh] flex flex-col justify-center items-center lg:p-10">
          <CFHomepage />
        </div>

        <div className="homepage-footer  max-w-360 mx-auto min-h-[3vh]">
          <Footer />
        </div>
      </div >



      {/* </div > */}
    </>


  );
}
