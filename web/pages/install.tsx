import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Browser extension turn to dark mode - Scura Mode">
      <div className="flex h-screen">
        <div className="m-auto text-center">
          <h1 className="text-6xl text-blod">Scura Mode</h1>
          <p className="text-mute">
            Browser extension (Chrome) that helps you quickly turn the screen
            (browser) to dark at night time.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
