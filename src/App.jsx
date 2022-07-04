import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App1 = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1 style={{ color: "red" }}> React勉強中 </h1>
      <ColorfulMessage color="green">2回目です</ColorfulMessage>
      <ColorfulMessage color="blue">
        まだまだ覚えられんから何度もやる
      </ColorfulMessage>
      <button onClick={onClickButton}>ボタンです</button>
    </>
  );
};

export default App1;
