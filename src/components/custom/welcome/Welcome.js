import React from "react";

const Welcome = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ color:"#fff",flexDirection:"column"}}
    >
        <h1 className="ps-5" style={{fontSize:"50px"}} >Welcome</h1>
      <lottie-player
        src="https://assets4.lottiefiles.com/packages/lf20_29afvmmn.json"
        background="transparent"
        speed="1"
        style={{ width: "350px", height: "290px", }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Welcome;
