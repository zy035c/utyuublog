import React from "react";

const SecPage = () => {
  return (
    <div className="relative flex flex-col ">
      <div id="secondPage">
        <SelfIntroduction />
      </div>
    </div>
  );
};

const SelfIntroduction = () => {
  return (
    <div className="relative flex flex-col w-20">
      <div id="selfIntroduction">Content of the self introduction</div>
    </div>
  );
};

export default SecPage;
