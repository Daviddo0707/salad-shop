import React from "react";
import ReactLoading from "react-loading";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="react-loader-container">
      <ReactLoading
        type={"spinningBubbles"}
        color={"darkGray"}
        height={"30%"}
        width={"30%"}
      />
    </div>
  );
};
export default Loader;
