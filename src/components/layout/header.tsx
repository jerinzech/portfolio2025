import React from 'react'

export default function header() {
  return (
    <>
      {/* <div className="signageLogo">Jerin Ja es</div>
      <div className="starIcon">Star</div>
      <div className="ctaButtonCombo">

        <div className="ctaButtonStudio">Studio</div>
        <div className="ctaButtonResume">Resume</div>
      </div> */}


      <div className=" flex justify-between items-center px-6 py-8">
        {/* Left - Signage */}
        < img src="/signage.png" alt="Jerin James" className="h-8 pl-10 lg:h-10" />

        {/* Middle - Star */}
        {/* < img src="/star.png" alt="Star" className="h-10" /> */}

        {/* Right - Buttons */}
        {/* < div className="flex gap-3" >
          <button className="px-4 py-4 rounded-lg">Button 1</button>
          <button className="px-4 py-4 rounded-lg">Button 2</button>
        </ div > */}
      </div>



    </>

  );
}
