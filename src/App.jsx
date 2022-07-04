import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App1 = () => {
  console.log("最初");
  const [num, setNum] = useState(1);
  const [flgFaceShow, setFlgFaceShow] = useState(true);

  const onClickCountUp = () => {
    setNum(Math.ceil(num + num / 2));
  };
  const onClickFaceShow = () => {
    setFlgFaceShow(!flgFaceShow);
  };

  // 関心の分離
  useEffect(() => {
    console.log("numえふぇくと");
    if (num % 3 === 0) {
      flgFaceShow || setFlgFaceShow(true);
    } else {
      flgFaceShow && setFlgFaceShow(false);
    }
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}> React勉強中 </h1>
      <ColorfulMessage color="green">2回目です</ColorfulMessage>
      <ColorfulMessage color="blue">
        まだまだ覚えられんから何度もやる
      </ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップボタンです</button>
      <p>{num}</p>
      <button onClick={onClickFaceShow}>顔文字on/off/off</button>
      {flgFaceShow && <p> ^^) _旦~~</p>}
    </>
  );
};

export default App1;
