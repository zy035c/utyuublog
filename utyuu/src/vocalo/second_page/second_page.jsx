import React, { useState, useEffect } from "react";

import { getSelfIntro } from "apis/api";

import "./second_page.css";

const SecPage = () => {
  return (
    <div id="secondPage" className="relative flex flex-col h-screen">
      {/* <div className="w-1/3"> */}
        <SelfIntroduction />
      {/* </div>
      <SelfInfo /> */}
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
    <div className="relative select-text intro-text-div flex flex-col my-12 px-7 py-3">
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
  return <div className="flex w-12 bg-white h-screen"></div>;
};

export default SecPage;
