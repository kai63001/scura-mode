import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const data = [
    { link: "/", name: "HOME" },
    { link: "/install", name: "INSTALL" },
    { link: "/donate", name: "DONATE" },
  ];
  return (
    <nav className="fixed w-screen">
      <ul className="flex justify-center mt-5">
        {data.map((res, i) => (
          <li
            key={i}
            className={
              router.asPath == res["link"]
                ? "mr-6 border-b-2 border-red-400"
                : "mr-6"
            }
          >
            <Link href={res["link"].toLowerCase()}>
              <a>{res["name"]}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
