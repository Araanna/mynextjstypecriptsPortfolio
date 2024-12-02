import Layout from "@/app/components/Layout";
import Sidebar from "@/app/components/Sidebar";

export default function Interest() {
  return (
    <Layout>
      <Sidebar section="interest">
        <div className="absolute min-h-screen bg-black flex flex-col justify-center items-center p-6">
          <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl text-center">
            I am a passionate developer with a focus on backend technologies
            like Django, FastAPI, and more!
          </p>
        </div>
      </Sidebar>
    </Layout>
  );
}
