import React, { useState, useEffect } from "react";

import { getSelfIntro } from "apis/api";

import "./second_page.css";

const SecPage = () => {
  return (
    <div id="indexPage2" className="relative flex flex-row h-screen w-screen">
      <SelfIntroduction />
      <SelfInfo />
    </div>
  );
};

const SelfIntroduction = () => {
  const [selfIntro, setSelfIntro] = useState([]);

  useEffect(() => {
    (async () => {
      let text = await getSelfIntro();
      //   data = data.split/\n/g, '<br>');
      const paras = text.split("\n");
      setSelfIntro(paras);
    })();
  }, []);

  return (
    <div
      className="relative select-text h-fit intro-text-div 
    flex flex-col mb-12 px-7 py-3"
    >
      {selfIntro.map((line, _) => {
        return (
          <div className={`flex mx-1 my-1`} style={{ minWidth: "42px" }}>
            <p className="flex select-text text-animation self-intro-text flex-grow">
              {line}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const SelfInfo = () => {
  return (
    <div
      className="flex flex-col items-center h-full absolute 
     self-info-column top-0 right-0 justify-start"
    >
      <img
        className="my-avatar left-1/2"
        src="/title_music/myavatar.png"
        alt="my avatar"
      ></img>
      <MyName />
    </div>
  );
};

const MyName = () => {
  return (
    <div className="py-2 my-names">
      <p>utyuu</p>
    </div>
  );
};

export default SecPage;
