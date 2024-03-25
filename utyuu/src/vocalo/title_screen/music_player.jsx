import React, { useState } from "react";
import "./music_player.css";
import AudioPlayer from "react-audio-player";

const MusicPlayer = ({ songTitle }) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const musicUrl = "/title_music/04. Q.mp3";

  return (
    <div>
      <PlayerControl
        isMuted={isMuted}
        toggleMute={toggleMute}
        songTitle={songTitle}
      />
      <AudioPlayer autoPlay src={musicUrl} volume={isMuted ? 0 : 0.02} />
    </div>
  );
};

const PlayerControl = ({ isMuted, toggleMute, songTitle }) => {
  let spinningClassname = "icon-spin";
  if (isMuted) {
    spinningClassname = "icon-unspin";
  }
  const [iconHover, setIconHover] = useState(false);

  console.log(songTitle);

  let shouldShowPause = isMuted ? true : iconHover;

  return (
    <div
      className="absolute top-1/3 flex flex-1 h-18 min-w-20 max-w-64"
      style={{ scale: "84%" }}
    >
      <div className="rounded-r-full max-h-18 flex flex-row player-control-extend">
        <div className="flex">
          <div
            className={`control-circle ${
              isMuted ? "" : "control-circle-blink "
            }  m-1.5 ${spinningClassname}`}
            onClick={() => {
              toggleMute();
            }}
            onMouseEnter={() => setIconHover(true)}
            onMouseLeave={() => setIconHover(false)}
          >
            {shouldShowPause ? (
              <img
                className="player-control-pause-icon"
                style={{
                  filter: isMuted
                    ? "invert(92%) sepia(64%) saturate(7498%) hue-rotate(101deg) brightness(102%) contrast(104%)"
                    : "", // 如果 isMuted 为 false，不应用任何滤镜效果
                }}
                src="/title_music/speech.png"
                alt="Icon"
              ></img>
            ) : (
              <img
                className={`player-control-icon`}
                src="/title_music/live-music.png"
                alt="Icon"
              />
            )}
          </div>
        </div>
        <div className="flex right-0 h-16 items-center pl-2 pr-4 overflow-hidden">
          <div className="pt-3">
            <p className="flex max-h-18 song-title">{songTitle}</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
