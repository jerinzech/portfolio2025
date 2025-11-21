import React from 'react'

export default function header() {
  return (
    <>
      {/* <div className="signageLogo">Jerin James</div>
      <div className="starIcon">Star</div>
      <div className="ctaButtonCombo">

        <div className="ctaButtonStudio">Studio</div>
        <div className="ctaButtonResume">Resume</div>
      </div> */}


      <div className=" flex justify-between items-center px-6 py-4">
        {/* Left - Signage */}
        < img src="/signage.png" alt="Logo" className="h-8" />

        {/* Middle - Star */}
        < img src="/star.png" alt="Star" className="h-6" />

        {/* Right - Buttons */}
        < div className="flex gap-3" >
          <button className="px-4 py-2 border rounded-lg">Button 1</button>
          <button className="px-4 py-2 bg-black text-white rounded-lg">Button 2</button>
        </ div >
      </div>



    </>

  );
}
