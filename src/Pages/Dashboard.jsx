import React from "react";
import { Blog, Cards, Navbar, Player, Timer } from "src/Layouts";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Timer />
      <Cards />
      <Blog />
      <Player />
    </>
  );
};

export default Dashboard;
