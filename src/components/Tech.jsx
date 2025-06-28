import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Technologies
        </h2>
        <p className="text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto mt-4">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>
      </div>
      
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
        <div className='w-28 h-28 flex flex-col items-center justify-center group' key={technology.name}>
          <div className='w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm p-3 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110'>
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-full h-full object-contain'
            />
          </div>
          <p className='text-secondary text-sm mt-2 text-center font-medium'>
            {technology.name}
          </p>
        </div>
      ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
