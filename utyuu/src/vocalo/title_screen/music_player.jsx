import React, { useState } from "react";
import "./music_player.css";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songName, setSongName] = useState("");

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const openPlayer = () => {
    // 在这里可以实现打开音乐列表、显示歌曲名字等功能
    setSongName("Your Song Name");
  };

  return (
    <div className="flex flex-1 h-full w-full px-10 py-10 justify-start">
      <div className="flex top-1/2 bg-yellow-200 music-player w-auto h-16">
        <div
          className={`play-button ${isPlaying ? "pause" : "play"}`}
          onClick={togglePlay}
        ></div>
        {isPlaying && <div className="flex min-w-12 song-name">{songName}</div>}
        <div className="open-player" onClick={openPlayer}>
          Open Player
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
