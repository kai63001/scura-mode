import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout
      title="Scura Mode Donate"
      des="You can support our efforts to keep the internet free with a donation!"
    >
      <div className="flex h-screen">
        <div className="m-auto text-center">
          <h1 className="text-6xl text-blod">Donate</h1>
          <p className="text-mute w-5/6 m-auto">
            You can support our efforts to keep the internet free with a
            donation!
          </p>
          <div className="flex justify-center mt-5">
            <Link href="/">
              <a
                target="_blank"
                className="bg-darkwhite shadow-btn hover:bg-gray-800 text-blod text-lg px-6 py-2 rounded-md flex justify-center w-2/6 mr-3"
              >
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 15 15"
                  className="mr-2 mt-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 0H0V15H3V0Z" fill="#fff" />
                  <path
                    d="M9.5 0C6.46243 0 4 2.46243 4 5.5C4 8.53757 6.46243 11 9.5 11C12.5376 11 15 8.53757 15 5.5C15 2.46243 12.5376 0 9.5 0Z"
                    fill="#fff"
                  />
                </svg>
                PATREON
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
