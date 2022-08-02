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
      <div>워커노드 생성 후</div>
      <div>이 프로젝트를 react-project라는 라벨을 가진 노드에서 빌드</div>
      <div>테스트</div>
      <div>파이프라인 실행하기</div>
      <div>
        {time.toLocaleDateString()} {time.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default MainComponent;
