import Image from "next/image";
import Image1 from "../assets/images/image 1.png";
import Image2 from "../assets/images/image 2.png";
import Image3 from "../assets/images/image 3.png";
import Image4 from "../assets/images/image 4.png";
import Image5 from "../assets/images/image 5.png";
import Image6 from "../assets/images/image 6.png";
import Layout from "../app/components/Layout";
import Sidebar from "../app/components/Sidebar.tsx";
import { motion } from "framer-motion";

export default function Interest() {
  // Floating animation variants
  const floatVariants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [-5, 5, -5],
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  // Staggered fade-in animation for items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-64 md:min-h-screen">
          <Sidebar section="interest" />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:px-8 overflow-y-auto">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-left mb-6 md:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ᵐʸ ᶦⁿᵗᵉʳᵉˢᵗ
          </motion.h1>

          {/* Mobile: Vertical stack */}
          <motion.div
            className="md:hidden space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {[Image1, Image2, Image3, Image4, Image5, Image6].map(
              (image, index) => (
                <motion.div
                  key={`mobile-${index}`}
                  className="relative h-48 w-full"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    variants={floatVariants}
                    initial="initial"
                    animate="animate"
                    custom={index}
                    className="h-full w-full"
                  >
                    <Image
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="object-cover rounded-lg shadow-md"
                      layout="fill"
                    />
                  </motion.div>
                </motion.div>
              )
            )}

            <motion.div
              className="p-4 shadow-md border border-stone-800 rounded-md"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              <h2 className="text-xs leading-relaxed">
                When I was a teenager, I dreamed of owning a surfboard when I
                grew up. Looking at my family's situation, which could barely
                afford to send us to school, I downloaded images from the
                internet, printed them, and posted them on my wall. I still
                haven't fulfilled that dream yet. I've always been a daydreamer,
                imagining myself exploring and traveling to discover different
                cultures. From this constant daydreaming before I sleep, I
                started thinking about a career that would allow me to live
                boldly, freely, and vibrantly while making a living. That's when
                I discovered the field of IT. Now, I'm even more passionate
                about learning new technologies and aligning them with my
                personality, which seeks peace through my designs. I always aim
                to keep my designs minimalist and straightforward. Currently, I
                work on non-profitable projects as a collaborator with different
                teams. This helps me practice my front-end and back-end skills.
                I also enjoy learning to design databases using MySQL, but I'm
                much more confident working with front-end technologies. I love
                engaging in volunteer activities whenever I spot an opportunity.
                Besides these interests, what excites me the most is learning
                different languages and cuisines.
              </h2>
            </motion.div>
          </motion.div>

          {/* Desktop: Grid layout */}
          <motion.div
            className="hidden md:grid grid-cols-5 grid-rows-5 gap-4 w-full h-[80vh]"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Div1 */}
            <motion.div
              className="row-span-3 relative"
              variants={itemVariants}
              custom={0}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
                custom={0}
                className="h-full w-full"
              >
                <Image
                  src={Image1}
                  alt="Image 1"
                  className="object-cover rounded-lg shadow-md"
                  layout="fill"
                />
              </motion.div>
            </motion.div>

            {/* Div2 */}
            <motion.div
              className="row-span-2 col-start-1 row-start-4 relative"
              variants={itemVariants}
              custom={1}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
                custom={1}
                className="h-full w-full"
              >
                <Image
                  src={Image4}
                  alt="Image 4"
                  className="object-cover rounded-lg shadow-md"
                  layout="fill"
                />
              </motion.div>
            </motion.div>

            {/* Div3 */}
            <motion.div
              className="row-span-5 col-start-2 row-start-1 relative"
              variants={itemVariants}
              custom={2}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
                custom={2}
                className="h-full w-full"
              >
                <Image
                  src={Image2}
                  alt="Image 2"
                  className="object-cover rounded-lg shadow-md"
                  layout="fill"
                />
              </motion.div>
            </motion.div>

            {/* Div4 */}
            <motion.div
              className="row-span-3 col-start-3 row-start-1 relative"
              variants={itemVariants}
              custom={3}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
                custom={3}
                className="h-full w-full"
              >
                <Image
                  src={Image3}
                  alt="Image 3"
                  className="object-cover rounded-lg shadow-md"
                  layout="fill"
                />
              </motion.div>
            </motion.div>

            {/* Div5 */}
            <motion.div
              className="row-span-2 col-start-3 row-start-4 relative"
              variants={itemVariants}
              custom={4}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
                custom={4}
                className="h-full w-full"
              >
                <Image
                  src={Image5}
                  alt="Image 5"
                  className="object-cover rounded-lg shadow-md"
                  layout="fill"
                />
              </motion.div>
            </motion.div>

            {/* Div6 */}
            <motion.div
              className="row-span-5 col-start-4 row-start-1 relative"
              variants={itemVariants}
              custom={5}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
                custom={5}
                className="h-full w-full"
              >
                <Image
                  src={Image6}
                  alt="Image 6"
                  className="object-cover rounded-lg shadow-md"
                  layout="fill"
                />
              </motion.div>
            </motion.div>

            {/* Div7 */}
            <motion.div
              className="row-span-5 col-start-5 row-start-1 relative object-cover shadow-md border border-stone-800 rounded-md p-4 overflow-auto"
              variants={itemVariants}
              whileHover={{ y: -3 }}
            >
              <h2 className="text-xs leading-relaxed">
                When I was a teenager, I dreamed of owning a surfboard when I
                grew up. Looking at my family's situation, which could barely
                afford to send us to school, I downloaded images from the
                internet, printed them, and posted them on my wall. I still
                haven't fulfilled that dream yet. I've always been a daydreamer,
                imagining myself exploring and traveling to discover different
                cultures. From this constant daydreaming before I sleep, I
                started thinking about a career that would allow me to live
                boldly, freely, and vibrantly while making a living. That's when
                I discovered the field of IT. Now, I'm even more passionate
                about learning new technologies and aligning them with my
                personality, which seeks peace through my designs. I always aim
                to keep my designs minimalist and straightforward. Currently, I
                work on non-profitable projects as a collaborator with different
                teams. This helps me practice my front-end and back-end skills.
                I also enjoy learning to design databases using MySQL, but I'm
                much more confident working with front-end technologies. I love
                engaging in volunteer activities whenever I spot an opportunity.
                Besides these interests, what excites me the most is learning
                different languages and cuisines.
              </h2>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
