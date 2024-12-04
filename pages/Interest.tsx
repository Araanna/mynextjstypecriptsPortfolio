import Image from "next/image"; // Import Next.js Image component
import Image1 from "@/assets/images/image 1.png";
import Image2 from "@/assets/images/image 2.png";
import Image3 from "@/assets/images/image 3.png";
import Image4 from "@/assets/images/image 4.png";
import Image5 from "@/assets/images/image 5.png";
import Image6 from "@/assets/images/image 6.png";
import Layout from "@/app/components/Layout";
import Sidebar from "@/app/components/Sidebar";

export default function Interest() {
  return (
    <Layout>
      <Sidebar section="interest">
        <div className="absolute min-h-screen flex flex-col px-[12rem] py-[4rem]">
          <h1 className="text-5xl font-bold text-white text-left">
            ᵐʸ ᶦⁿᵗᵉʳᵉˢᵗ
          </h1>
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            <Image
              src={Image1}
              alt="Image 1"
              className="row-start-2 row-span-2 object-cover rounded-lg shadow-md"
              layout="responsive"
              width={300}
              height={300}
            />
            <Image
              src={Image4}
              alt="Image 1"
              className="col-start-1 col-span-1 object-cover rounded-lg shadow-md"
              layout="responsive"
              width={300}
              height={300}
            />
            <Image
              src={Image2}
              alt="Image 1"
              className="row-start-1 row-span-2 object-cover rounded-lg shadow-md"
              layout="responsive"
              width={300}
              height={300}
            />
            <Image
              src={Image3}
              alt="Image 3"
              className="row-start-1 col-start-3 col-span-2 row-span-2 object-cover rounded-lg shadow-md"
              layout="responsive"
              width={300}
              height={300}
            />

            {/* how to place this below the Image 3 */}
            <Image
              src={Image5}
              alt="Image 5"
              className="row-start-2 col-start-3 col-span-2 object-cover rounded-lg shadow-md"
              layout="responsive"
              width={300}
              height={300}
            />
            <Image
              src={Image6}
              alt="Image 1"
              className="row-start-1 row-span-2 object-cover rounded-lg shadow-md"
              layout="responsive"
              width={300}
              height={300}
            />
            <div className="row-start-1 row-span-2 object-cover shadow-md border border-stone-800 rounded-md w-[15rem] h-[33rem]">
              <p className="text-xs p-2 text-pretty">
                When I was a teenager, I dreamed of owning a surfboard when I
                grew up. Looking at my family’s situation, which could barely
                afford to send us to school, I downloaded images from the
                internet, printed them, and posted them on my wall. I still
                haven’t fulfilled that dream yet. I've always been a daydreamer,
                imagining myself exploring and traveling to discover different
                cultures. From this constant daydreaming before I sleep, I
                started thinking about a career that would allow me to live
                boldly, freely, and vibrantly while making a living. That’s when
                I discovered the field of IT. Now, I’m even more passionate
                about learning new technologies and aligning them with my
                personality, which seeks peace through my designs. I always aim
                to keep my designs minimalist and straightforward. Currently, I
                work on non-profitable projects as a collaborator with different
                teams. This helps me practice my front-end and back-end skills.
                I also enjoy learning to design databases using MySQL, but I’m
                much more confident working with front-end technologies. I love
                engaging in volunteer activities whenever I spot an opportunity.
                Besides these interests, what excites me the most is learning
                different languages and cuisines.
              </p>
            </div>
          </div>
        </div>
      </Sidebar>
    </Layout>
  );
}
