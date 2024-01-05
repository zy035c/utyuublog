import React, { useState, useEffect } from "react";
import { getTitleLyrics } from "apis/api";
import "./index.css";

const Lyrics = () => {
  const [titleLyrics, setTitleLyrics] = useState([]);
  const [lyricLang, setLyricLang] = useState("Japanese");

  useEffect(() => {
    (async () => {
      let data = await getTitleLyrics();
      setTitleLyrics(data.lyricText.split("\n"));
      setLyricLang(data.language);
    })();
  }, []);

  return (
    <div>
      {/* <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 animated-text">
        Your Text Here
      </div> */}
      <div className="rounded-md py-4 px-32 justify-center">
        <div className="flex flex-row-reverse min-w-64">
          {titleLyrics.map((line, index) => {
            const animationDelay = `${index * 0.05}s`; // 根据索引计算延迟时间
            let langClass = "text-animation flex-grow titleLyricLine";
            if (lyricLang === "Japanese") {
              if (index % 2 === 0) {
                langClass += " titleLyricJapanese";
              } else {
                langClass += " titleLyricChinese";
              }
            }
            return (
              <div className="min-w-12 overflow-hidden bg-black bg-opacity-20 mx-1 my-4">
                <p className={langClass} style={{ animationDelay }}>
                  {line}
                </p>
              </div>
            );
          })}
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
  return (
    <div className="relative flex flex-col h-screen">
      <div className="flex-1 flex items-center justify-center">
        <Lyrics />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <ArrowDiv />
      </div>

      {/* <ColorfulTestDiv /> */}
    </div>
  );
};

export default TitleScreen;
