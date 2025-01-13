import Image from "next/image";
import Layout from "@/app/components/layout";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projectsData";

const Sidebar = dynamic(() => import("@/app/components/Sidebar"), {
  ssr: false,
});

const Works: React.FC = () => {
  return (
    <Layout>
      <Sidebar section="Works" />
      <div className="absolute top-[2rem] left-[28rem]">
        <h1 className="text-white text-6xl font-bold my-20">ᵐʸ ʷᵒʳᵏˢ</h1>
        <div className="flex flex-wrap gap-10 overflow-y-auto max-h-[calc(90vh-200px)]">
          {projectsData.map(({ title, description, tags, imageUrl }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="group w-[50rem] rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center border border-white/20 rounded-xl p-4 bg-gradient-to-br from-indigo-500/10 via-transparent to-white/5 backdrop-blur-md hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex flex-row w-full gap-6 bg-transparent">
                  <div className="w-[200px] flex-shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={imageUrl}
                      alt={title}
                      width={200}
                      height={200}
                      className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between py-2 bg-transparent">
                    <div className="space-y-4 bg-transparent">
                      <h2 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors bg-transparent">
                        {title}
                      </h2>
                      <p className="text-gray-200 text-sm bg-transparent pb-[5rem] pr-[18rem]">
                        {description}
                      </p>
                    </div>

                    <ul className="flex flex-wrap gap-2 mt-10 bg-transparent">
                      {tags.map((tag, index) => (
                        <li
                          key={index}
                          className="z-0 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide 
                            text-gray-200 rounded-full hover:bg-indigo-600/20 
                            transition-colors duration-200"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Works;
