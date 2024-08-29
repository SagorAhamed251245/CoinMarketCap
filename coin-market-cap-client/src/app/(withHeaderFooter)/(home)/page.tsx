import { Button } from "antd";
import React from "react";

const HomePage = () => {
  const navStyles: {
    head: string;
    footer: string;
  } = {
    head: `text-3xl`,
    footer: ``,
  };
  return (
    <div className="text-3xl">
      This is home
      <Button> Sagor akta gay</Button>
    </div>
  );
};

export default HomePage;
