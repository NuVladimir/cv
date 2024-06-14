import ThemeToggle from "@/components/toggles/ThemeToggle";
import Overlay from "@/components/layouts/partials/Overlay";
import Sidebar from "@/components/layouts/partials/Sidebar";
import { ThemeProvider } from "next-themes";
import { Onest } from 'next/font/google'
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import "@/styles/globals.css";
import "@/styles/css/fa.min.css";
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';
import Aos from "aos";
import dynamic from "next/dynamic";
import { DefaultSeo } from "next-seo";
import defaultSEOConfig from '../../next-seo.config';
import { getLastCommitDate } from "@/services/GithubServices";
import Layout from "@/components/layouts/Layout";

const onest = Onest({
  subsets: ['latin'],
})
const ProgressBar = dynamic(
  () => import('../components/elements/ProgressBar'),
  { ssr: false }
);

export default function App({ Component, pageProps, lastCommitDate }) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return <>
  
    <DefaultSeo {...defaultSEOConfig} />

    <style jsx global>
      {`
          html {
            font-family: ${onest.style.fontFamily};
          }
        `}
    </style>

    <Toaster
      toastOptions={{
        style: {
          background: "var(--container-color)",
          color: "var(--text-color)",
        },
      }}
      position="top-right"
    />

    <ThemeProvider attribute='class' enableSystem={false} disableTransitionOnChange={true}>
      <Layout lastUpdate={lastCommitDate}>
        <ProgressBar />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
}
App.getInitialProps = async () => {
  const lastCommitDate = await getLastCommitDate();
  return { lastCommitDate };
};