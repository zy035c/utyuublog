import React, { useState } from "react";
import "./music_player.css";
import AudioPlayer from "react-audio-player";

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
    <div>
      <PlayerControl />
      <AudioPlayer autoPlay src="" />
    </div>
  );
};

const PlayerControl = () => {
  return (
    <div className="absolute flex flex-1 h-16 min-w-16 max-w-64">
      <div className="bg-opacity-50 bg-white flex flex-1 rounded-full w-16 player-control-extend">
        <div className="flex flex-initial justify-center items-center control-circle">
          <img
            className="player-control-icon"
            src="/title_music/live-music.png"
            alt="Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
