import Image from "next/image";
import Image1 from "../assets/images/image 1.png";
import Image2 from "../assets/images/image 2.png";
import Image3 from "../assets/images/image 3.png";
import Image4 from "../assets/images/image 4.png";
import Image5 from "../assets/images/image 5.png";
import Image6 from "../assets/images/image 6.png";
import Layout from "../app/components/Layout.tsx";
import Sidebar from "../app/components/Sidebar.tsx";

export default function Interest() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar - full width on mobile, fixed width on desktop */}
        <div className="w-full md:w-64 md:min-h-screen">
          <Sidebar section="interest" />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:px-8 relative md:right-[6rem] right-0 overflow-y-auto">
          <h1 className="text-3xl md:text-5xl font-bold  text-left mb-6 md:mb-8">
            ᵐʸ ᶦⁿᵗᵉʳᵉˢᵗ
          </h1>

          {/* Mobile: Vertical stack */}
          <div className="md:hidden space-y-4">
            <div className="relative h-48 w-full">
              <Image
                src={Image1}
                alt="Image 1"
                className="object-cover rounded-lg shadow-md"
                layout="fill"
              />
            </div>

            <div className="relative h-48 w-full">
              <Image
                src={Image2}
                alt="Image 2"
                className="object-cover rounded-lg shadow-md"
                layout="fill"
              />
            </div>

            <div className="relative h-48 w-full">
              <Image
                src={Image3}
                alt="Image 3"
                className="object-cover rounded-lg shadow-md"
                layout="fill"
              />
            </div>

            <div className="relative h-48 w-full">
              <Image
                src={Image4}
                alt="Image 4"
                className="object-cover rounded-lg shadow-md"
                layout="fill"
              />
            </div>

            <div className="relative h-48 w-full">
              <Image
                src={Image5}
                alt="Image 5"
                className="object-cover rounded-lg shadow-md"
                layout="fill"
              />
            </div>

            <div className="relative h-48 w-full">
              <Image
                src={Image6}
                alt="Image 6"
                className="object-cover rounded-lg shadow-md"
                layout="fill"
              />
            </div>

            <div className="p-4 shadow-md border border-stone-800 rounded-md">
              <h2 className=" text-xs leading-relaxed">
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
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden md:grid grid-cols-5 grid-rows-5 gap-4 w-full h-[80vh]">
            {/* Div1 */}
            <div className="row-span-3 relative">
              <Image
                src={Image1}
                alt="Image 1"
                className="object-cover rounded-lg shadow-md w-full h-full"
                layout="fill"
              />
            </div>

            {/* Div2 */}
            <div className="row-span-2 col-start-1 row-start-4 relative">
              <Image
                src={Image4}
                alt="Image 4"
                className="object-cover rounded-lg shadow-md w-full h-full"
                layout="fill"
              />
            </div>

            {/* Div3 */}
            <div className="row-span-5 col-start-2 row-start-1 relative">
              <Image
                src={Image2}
                alt="Image 2"
                className="object-cover rounded-lg shadow-md w-full h-full"
                layout="fill"
              />
            </div>

            {/* Div4 */}
            <div className="row-span-3 col-start-3 row-start-1 relative">
              <Image
                src={Image3}
                alt="Image 3"
                className="object-cover rounded-lg shadow-md w-full h-full"
                layout="fill"
              />
            </div>

            {/* Div5 */}
            <div className="row-span-2 col-start-3 row-start-4 relative">
              <Image
                src={Image5}
                alt="Image 5"
                className="object-cover rounded-lg shadow-md w-full h-full"
                layout="fill"
              />
            </div>

            {/* Div6 */}
            <div className="row-span-5 col-start-4 row-start-1 relative">
              <Image
                src={Image6}
                alt="Image 6"
                className="object-cover rounded-lg shadow-md w-full h-full"
                layout="fill"
              />
            </div>

            {/* Div7 */}
            <div className="row-span-5 col-start-5 row-start-1 relative object-cover shadow-md border border-stone-800 rounded-md p-4 overflow-auto">
              <h2 className=" text-xs leading-relaxed">
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
