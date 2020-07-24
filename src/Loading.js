import React from "react";
import Loader from "react-loader-spinner";

export default function Loading() {
  return (
    <Loader
      className="Loader"
      type="ThreeDots"
      color="#8566aa"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}
