import Layout from "@/app/components/Layout";
import React from "react";
import RotatingText from "@/app/components/RotatingText";
import Sidebar from "@/app/components/Sidebar";
import { motion } from "framer-motion";

const Values: React.FC = () => {
  return (
    <Layout>
      <Sidebar section="Values" />
      <div className="relative">
        <div className="absolute flex justify-center items-baseline sm:transform sm:-inset-1-translate-x-[20px] sm:translate-y-0 sm:left-1/2 sm:top-1/2 sm:-translate-x-[20px] sm:-translate-y-1/2 transform translate-x-[40rem] -translate-y-[50rem]">
          <RotatingText />
        </div>
      </div>
    </Layout>
  );
};

export default Values;
