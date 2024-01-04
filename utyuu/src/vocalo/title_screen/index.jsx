import React, { useState, useEffect } from "react";
import { getTitleLyrics } from "@src/apis/api";

const Lyrics = () => {
  const [titleLyrics, setTitleLyrics] = useState("");

  useEffect(() => {
    setTitleLyrics(getTitleLyrics());
  }, []);

  return (
    <div className="rounded-md py-4 px-6 text-center">
      <p className="text-lg font-semibold text-blue-700">{titleLyrics}</p>
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
