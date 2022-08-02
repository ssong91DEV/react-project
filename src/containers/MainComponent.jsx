import React, { useEffect, useState } from "react";
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
      <div>2022-08-02 NCP 젠킨스 - 깃허브 웹훅 연동</div>
      <div>
        {time.toLocaleDateString()} {time.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default MainComponent;
