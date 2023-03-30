import React from "react";

const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <lottie-player
        src="https://assets7.lottiefiles.com/temp/lf20_ssLgHu.json"
        background="transparent"
        speed="1"
        style={{ width: "280px", height: "280px" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Loading;
