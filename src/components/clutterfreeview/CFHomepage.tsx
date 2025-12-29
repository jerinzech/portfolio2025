import React from 'react'


function CFHomepage() {
  return (

    <>
      <div className="CFHomepage-text flex-row items-center text-justify w-4/5 md:w-2/3 lg:w-[calc(100%*7/12)] h-min text-[15px] lg:text-[20px] font-['Alexandria'] font-extralight" >
        <p><span className="text-[16px] lg:text-[20px]" style={{ fontWeight: 'bold', marginRight: '7px' }}>Hey!! </span> I&apos;m <span className="peer" style={{ fontWeight: 'bolder' }}><a
          href="#"
          target=""
          rel="noreferrer"
          className=" peer
            /* 1. Base Layout & Positioning */
            inline-block  rounded-[7px]
            
            /* 2. Initial State (Subtle Text) */
            text-gray-300 bg-transparent
            
            /* 3. Transition Settings (Smoot  hness) */
            transition-all duration-300 ease-out

            /* 4. Hover State (The Transformation) */
            
            hover:text-white
            
          ">Jerin James</a></span>

          < img src="/jerinlineart.png" alt="Jerin James" className="
        
        /* --- LAYOUT & STYLE --- */

          absolute top-30 right-100
          w-100 h-auto
          shadow-2xl rounded-lg object-cover
          grayscale /* Auto-applies B&W filter */
          z-20

          /* --- DEFAULT STATE (Hidden) --- */
          opacity-0 invisible translate-x-1 translate-y-1 scale-95
          pointer-events-none 
          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]

          /* --- HOVER STATE (PC Only) --- 
             'lg:peer-hover:' means: On Large screens, when the peer (Name) is hovered...
          */
          lg:peer-hover:opacity-100 
          lg:peer-hover:visible 
          lg:peer-hover:translate-x-0 
          lg:peer-hover:translate-y-0
          lg:peer-hover:scale-100" />

          .</p>

        < br />

        <p>I am a <span style={{ fontWeight: 'bolder' }}>visual storyteller</span> and <span style={{ fontWeight: 'bolder' }}>strategist</span> based in <span style={{ fontWeight: 'bolder' }}>Grenoble, France</span>, currently pursuing an <span style={{ fontWeight: 'bolder' }}>MSc in Managing with Data and Artificial Intelligence</span> .</p>

        < br />

        <p>As an aspiring <span style={{ fontWeight: 'bolder' }}>Product Manager</span> and <span style={{ fontWeight: 'bolder' }}>Data Strategist</span>, I bridge the gap between technical AI concepts and tangible business value . My focus is on leveraging Data Analytics and Artificial Intelligence to build user - centric intelligent systems .</p>

        < br />

        <p>Here&apos;s my <span style={{ fontWeight: 'bolder' }}>
          <a
            href="https://www.linkedin.com/in/jerinzjames/"
            target="_blank"
            rel="noreferrer"
            className="
            /* 1. Base Layout & Positioning */
            inline-block px-2 py-1 rounded-[7px]
            
            /* 2. Initial State (Subtle Text) */
            text-gray-300 bg-transparent
            
            /* 3. Transition Settings (Smoothness) */
            transition-all duration-300 ease-out

            /* 4. Hover State (The Transformation) */
            hover:bg-white 
            hover:text-black 
            hover:-translate-y-0.5 
            hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]
          ">
            LinkedIn
          </a></span>, <span style={{ fontWeight: 'bolder' }}><a
            href="https://github.com/jerinzech"
            target="_blank"
            rel="noreferrer"
            className="
            /* 1. Base Layout & Positioning */
            inline-block px-2 py-1 rounded-[7px]
            
            /* 2. Initial State (Subtle Text) */
            text-gray-300 bg-transparent
            
            /* 3. Transition Settings (Smoothness) */
            transition-all duration-300 ease-out

            /* 4. Hover State (The Transformation) */
            hover:bg-white 
            hover:text-black 
            hover:-translate-y-0.5 
            hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]
          ">Github</a> </span>, <span style={{ fontWeight: 'bolder' }}><a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="
            /* 1. Base Layout & Positioning */
            inline-block px-2 py-1 rounded-[7px]
            
            /* 2. Initial State (Subtle Text) */
            text-gray-300 bg-transparent
            
            /* 3. Transition Settings (Smoothness) */
            transition-all duration-300 ease-out

            /* 4. Hover State (The Transformation) */
            hover:bg-white 
            hover:text-black 
            hover:-translate-y-0.5 
            hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]
          ">Resume</a>  </span> and <span style={{ fontWeight: 'bolder' }}><a
            href="https://photos.app.goo.gl/yHzx75hVmGATTPnv7"
            target="_blank"
            rel="noreferrer"
            className="
            /* 1. Base Layout & Positioning */
            inline-block px-2 py-1 rounded-[7px]
            
            /* 2. Initial State (Subtle Text) */
            text-gray-300 bg-transparent
            
            /* 3. Transition Settings (Smoothness) */
            transition-all duration-300 ease-out

            /* 4. Hover State (The Transformation) */
            hover:bg-white 
            hover:text-black 
            hover:-translate-y-0.5 
            hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]
          ">Gallery</a></span> .</p>

        {/* < img src="/jerinlineart.png" alt="Jerin James" className="lineartpotrait absolute hidden top-0 right-0 w-2/8 h-auto px-2 py-2" />  */}



      </div >




    </>

  )
}

export default CFHomepage