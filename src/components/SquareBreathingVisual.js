import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';  

const SquareBreathingVisual = ({ videoLink }) => {
  const [player, setPlayer] = useState(null);

  const onReady = (event) => {
    setPlayer(event.target);
  };

  const onEnded = () => {
    player.seekTo(0);
  };

  return (
    <div className="w-full text-3xl font-bold items-center justify-center flex flex-col ">
      <h1 className="pb-4">Breathing Exercise</h1>
      <ReactPlayer
        url={videoLink}
        controls
        onEnded={onEnded}
        onReady={onReady}
      />
    </div>
  );
};

export default SquareBreathingVisual;
