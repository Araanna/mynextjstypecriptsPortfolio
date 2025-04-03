import Layout from "../app/components/Layout";
import React from "react";
import RotatingText from "../app/components/RotatingText";
import Sidebar from "../app/components/Sidebar";

const Values: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar - full width on mobile, fixed width on desktop */}
        <div className="w-full md:w-64 md:min-h-screen">
          <Sidebar section="Values" />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 overflow-y-auto flex items-center justify-center md:justify-start md:pl-12">
          <div className="translate-y-[-5rem] md:translate-y-0 md:-translate-x-[-15rem]">
            {" "}
            {/* Shifts left on desktop only */}
            <RotatingText />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Values;
