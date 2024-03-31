import React, { useState, useEffect } from "react";

import { getSelfIntro } from "apis/api";

// import "./index_third_section.css";

const IndexThirdSection = () => {
  return (
    <div id="indexPage3" className="relative flex flex-row h-screen w-screen items-center justify-center">
      <MyProfile />
    </div>
  );
};

const MyProfile = () => {

  return (
    <div className="flex relative w-fit h-fit pr-48 bg-black opacity-85">
      <div className="relative select-text h-fit flex flex-col mb-12 px-7 py-3 justify-center items-center w-[560px]">

        <p>Guitar</p>

        {/* <div className="intro-text-div w-full h-fit">
          {selfIntro.map((line, _) => {
            return (
              <div className={`flex mx-1 my-1`} style={{ minWidth: "42px" }}>
                <p className="flex select-text text-animation featured-blog-text flex-grow">
                  {line}
                </p>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};



export default IndexThirdSection;
