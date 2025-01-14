import Layout from "../app/components/Layout";
import React from "react";
import RotatingText from "../app/components/RotatingText";
import Sidebar from "../app/components/Sidebar";

const Values: React.FC = () => {
  return (
    <Layout>
      <Sidebar section="Values" />

      <div className="absolute top-[10rem] left-[50rem] ">
        <div className="absolute left-1/2 transform -translate-x-1/2 ">
          <RotatingText />
        </div>
      </div>
    </Layout>
  );
};

export default Values;
