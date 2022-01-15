import React from "react";
import MidContainer from "./HomeContainers/MidContainer";
import FrontContainer from "./HomeContainers/FrontContainer";
import BottomContainer from "./HomeContainers/BottomContainer";
const Home = () => {
  return (
    <div>
      <FrontContainer />
      <MidContainer />
      <BottomContainer />
    </div>
  );
};
export default Home;
