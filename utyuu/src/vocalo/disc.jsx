import { useState, useEffect } from "react";

import ImageGrid from "./illust_wall/image_grid";
import TitleScreen from "./title_screen";
import SecPage from "./second_page/second_page";
import MusicPlayer from "./title_screen/music_player";
import ArrowDiv from "./scroller_arrow/arrow_div";

const Vocacollection = () => {
  const [songTitle, setSongTitle] = useState("");
  return (
    <div>
      <div className="fixed inset-0 overflow-hidden z-0">
        <ImageGrid folderPath={"./collection"} tileSize={100} />
      </div>
      <div className="z-10">
        <TitleScreen setSongTitle={setSongTitle} />
      </div>

      <div className="z-20 fixed inset-0 justify-center items-center mb-10">
        <MusicPlayer songTitle={songTitle} />
        <ArrowDiv />
      </div>
      <div className="z-10">
        <SecPage />
      </div>
    </div>
  );
};

export default Vocacollection;
