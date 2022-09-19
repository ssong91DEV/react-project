import React, { useEffect, useState } from "react";
import ImageComponent from "../components/ImageComponent";
const MainComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <div>2022-09-19 </div>
      테스트
      <div>
        {time.toLocaleDateString()} {time.toLocaleTimeString()}
      </div>
      <div>
        <ImageComponent />
      </div>
    </div>
  );
};

export default MainComponent;
