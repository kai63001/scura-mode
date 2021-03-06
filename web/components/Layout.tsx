import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(import("./Header"));
const Navbar = dynamic(import("./Navbar"));

type Layout = {
  title?: string | undefined;
  des?: string | undefined;
  image?: string | undefined;
  children?: any | undefined;
};

const Layout = (props: Layout) => {
  return (
    <>
      <Header title={props.title} des={props.des} image={props.image} />
      <header>
          <Navbar/>
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
