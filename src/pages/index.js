import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/components/layouts/partials/Container";
import Homepage from "@/components/views//home/Home";
import { NextSeo } from "next-seo";
import CollabsToggle from "@/components/toggles/CollabsToggle";
import Head from "next/head";
import { useRouter } from "next/router";
import Overlay from "@/components/layouts/partials/Overlay";
import { schemaMarkup } from "@/lib/schema-markup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const { locale, asPath } = useRouter();
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
  const lang = locale == 'en' ? '/en' : ''

  return (
    <>
      <NextSeo
        title="Dwi Wijaya - Personal Website"
        canonical={SITE_URL + lang + asPath}
        additionalLinkTags={[
          { rel: 'alternate', hreflang: 'id', href: `${SITE_URL}${asPath}` },
          { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en${asPath}` },
          { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${asPath}` },
        ]}
      />

      <div className="group-[.sidebar-expanded]/main:blur-[1px] z-[-1] bg-container border border-b border-stroke top-0 left-0 w-full h-[24vh] bg-endless-clouds"></div>
      <section data-section className="group-[.sidebar-expanded]/main:blur-[2px] relative p-[15px] pl-5 mx-auto max-w-[1024px]">
        <Homepage />
      </section>
    </>
  );
}
export const getStaticProps = async () => {

  return {
    props: {
    },
  };
};