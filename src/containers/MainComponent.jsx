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
      <div>220801 도커 배포 테스트 1</div>
      <div>
        {time.toLocaleDateString()} {time.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default MainComponent;
