import React, { useState, useEffect } from "react";
import { getTitleLyrics } from "apis/api";

import "./index.css";
import MusicPlayer from "./music_player";
import ArrowDiv from "vocalo/scroller_arrow/arrow_div";

const Lyrics = ({ lyricLines }) => {
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-row-reverse pr-8 py-8 md:pr-24 md:py-16 min-w-64">
        <div
          className={`flex flex-row-reverse min-w-12`}
          style={{ maxHeight: "530px" }}
        >
          <div
            className="flex border-r w-auto lyrics-vert-bar h-full"
            style={{ animationDelay: `0.4s` }}
          />
        </div>

        {lyricLines.map((line, index) => {
          const animationDelay = `${index * 0.05}s`; // 根据索引计算延迟时间
          let langClass = "text-animation flex-grow titleLyricLine";
          if (line.language === "Japanese") {
            langClass += " titleLyricJapanese";
          } else if (line.language === "Chinese") {
            langClass += " titleLyricChinese";
          }
          return (
            <div
              className={`flex h-full overflow-hidden mx-0 my-0`}
              style={{ minWidth: "42px" }}
            >
              <p className={langClass} style={{ animationDelay }}>
                {line.lyricText}
              </p>
            </div>
          );
        })}

        <div className={`flex min-w-9`} style={{ maxHeight: "530px" }}>
          <div
            className="flex border-r w-auto lyrics-vert-bar h-full"
            style={{ animationDelay: `${lyricLines.length * 0.05 + 0.5}s` }}
          />
        </div>
      </div>
    </div>
  );
};

const TitleScreen = ({ setSongTitle }) => {
  const [titleLyrics, setTitleLyrics] = useState({ lyrics: [], songTitle: "" });

  useEffect(() => {
    (async () => {
      let data = await getTitleLyrics();
      setTitleLyrics(data);
      setSongTitle(data.songTitle);
    })();
  }, [setSongTitle]);

  return (
    <div className="flex relative h-screen">
      <div className="flex-1 flex">
        {/* <div className="fixed">
          <MusicPlayer songTitle={titleLyrics.songTitle} />
        </div> */}
        <div className="absolute right-6 top-2">
          <Lyrics lyricLines={titleLyrics.lyrics} />
        </div>
      </div>
    </div>
  );
};

export default TitleScreen;
