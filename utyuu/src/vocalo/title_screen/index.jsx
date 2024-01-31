import React, { useState, useEffect } from "react";
import { getTitleLyrics } from "apis/api";
import "./index.css";
import MusicPlayer from "./music_player";

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
              className={`flex h-full min-w-10 overflow-hidden mx-0 my-0`}
            >
              <p className={langClass} style={{ animationDelay }}>
                {line.lyricText}
              </p>
            </div>
          );
        })}

        <div
          className={`flex min-w-9`}
          style={{ maxHeight: "530px" }}
        >
          <div
            className="flex border-r w-auto lyrics-vert-bar h-full"
            style={{ animationDelay: `${lyricLines.length * 0.05 + 0.5}s` }}
          />
        </div>
      </div>
    </div>
  );
};

const ArrowDiv = () => {
  return (
    <div className="arrow-container">
      <span className="arrow text-4xl cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:filter-glow">
        ↓
      </span>
    </div>
  );
};

const ColorfulTestDiv = () => {
  return (
    <div class="grid grid-cols-3 grid-rows-3 place-content-center">
      <div class="bg-blue-500">1</div>
      <div class="bg-green-500">2</div>
      <div class="bg-red-500">3</div>
      <div class="bg-yellow-500">4</div>
      <div class="bg-purple-500">5</div>
      <div class="bg-pink-500">6</div>
      <div class="bg-orange-500">7</div>
      <div class="bg-indigo-500">8</div>
      <div class="bg-teal-500">9</div>
    </div>
  );
};

const TitleScreen = () => {
  const [titleLyrics, setTitleLyrics] = useState({lyrics: [], songTitle: ""});

  useEffect(() => {
    (async () => {
      let data = await getTitleLyrics();
      setTitleLyrics(data);
    })();
  }, []);

  return (
    <div className="relative flex flex-col h-screen">
      <div className="flex-1 flex items-center">
        <MusicPlayer songTitle={titleLyrics.songTitle} />
        <Lyrics lyricLines={titleLyrics.lyrics}/>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <ArrowDiv />
      </div>
    </div>
  );
};

export default TitleScreen;
