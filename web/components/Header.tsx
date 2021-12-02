import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

type Header = {
  title?: string;
  des?: string;
  asPath?: string;
  image?: string;
};

const Header = (props: Header) => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <NextSeo
      title={
        props.title
          ? `${props.title}`
          : "Scura Mode"
      }
      description={
        props.des
          ? props.des
          : "Browser extension (Chrome) that helps you quickly turn the screen (browser) to dark at night time."
      }
      canonical={`https://kai63001.github.io/scura-mode${router.asPath}`}
      openGraph={{
        type: "website",
        locale: "en_EN",
        title: props.title
          ? `${props.title}`
          : "Scura Mode",
        description: props.des
          ? props.des
          : "Browser extension (Chrome) that helps you quickly turn the screen (browser) to dark at night time.",
        images: [
          {
            url:
              props.image == undefined || props.image.length == 0
                ? "https://kai63001.github.io/scura-mode"
                : props.image,
          },
        ],
        url: `https://kai63001.github.io/scura-mode${router.asPath}`,
        site_name: "scuraMode",
      }}
      twitter={{
        handle: "@scuraMode",
        site: "@scuraMode",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Header;