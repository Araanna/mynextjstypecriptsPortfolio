import Ecom from "../assets/images/E-commerce MockUP.png";
import Image from "next/image";
import Layout from "@/app/components/Layout";
import React from "react";
import Sidebar from "@/app/components/Sidebar";
import UIX from "../assets/images/UX Design.png";
import { motion } from "framer-motion";

const Works: React.FC = () => {
  return (
    <Layout>
      <Sidebar section="Works" />
      <div className="absolute top-[2rem] left-[18rem]">
        <h1 className="text-white text-3xl font-bold my-20">my works</h1>
        <div className="flex space-x-10">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Image
                src={Ecom}
                alt="Project 1"
                width={250}
                height={450}
                className="group-hover:scale-95 transition-transform duration-300"
              />
              <h2 className="text-white text-md font-black mt-3 hover:text-fuchsia-300">
                UI/UX Design and System Development
              </h2>
              <h2 className="text-neutral-400 text-sm font-semi text-center hover:text-fuchsia-300">
                E-commerce Platform Mockup and Full-Stack System Development
              </h2>
              <h2 className="text-stone-500 text-xs  font-bold hover:text-fuchsia-300  text-left">
                HTML, CSS, and JavaScript for Front-End, <br /> AJAX and RESTful
                APIs for Data Communication, <br />  PHP for Back-End <br />{" "}
                and Database Integration using mySQL
              </h2>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Image
                src={UIX}
                alt="Project 2"
                width={220}
                height={350}
                className="group-hover:scale-95 transition-transform duration-300"
              />
              <h2 className="text-white text-md font-black text-center hover:text-fuchsia-300">
                POS and Inventory System
              </h2>
              <h2 className="text-neutral-400 text-sm font-semi text-center hover:text-fuchsia-300">
                UIX Design
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Works;
