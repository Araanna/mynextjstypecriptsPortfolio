import Fligno from "../assets/images/Fligno.png";
import Image from "next/image";
import Layout from "@/app/components/Layout";
import React from "react";
import Sidebar from "@/app/components/Sidebar";
import Tesda from "../assets/images/TESDA.png";
import { motion } from "framer-motion";

const Certificate: React.FC = () => {
  return (
    <Layout>
      <Sidebar section="Certificate" />
      <div className="absolute top-[2rem] left-[18rem]">
        <h1 className="text-white text-5xl font-bold my-20">ᶜᵉʳᵗᶦᶠᶦᶜᵃᵗᵉ</h1>
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
                src={Fligno}
                alt="Certificate 1"
                width={200}
                height={300}
                className="group-hover:scale-95 transition-transform duration-300"
              />
              <h2 className="text-white text-md font-semi text-center hover:text-fuchsia-300">
                Fligno
              </h2>
              <h2 className="text-white text-md font-semi text-center hover:text-fuchsia-300">
                Linux Fundamentals
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
                src={Tesda}
                alt="Certificate 2"
                width={200}
                height={300}
                className="group-hover:scale-95 transition-transform duration-300"
              />
              <h2 className="text-white text-md font-semi text-center hover:text-fuchsia-300">
                TESDA
              </h2>
              <h2 className="text-white text-md font-semi text-center hover:text-fuchsia-300">
                User Design for User Interface
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Certificate;
