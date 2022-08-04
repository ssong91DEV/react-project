import React from "react";
import song from "../images/song_thumb_up.png";

const ImageComponent = () => {
  return (
    <div>
      <img src={song} alt="song" width={150} />
    </div>
  );
};

export default ImageComponent;
