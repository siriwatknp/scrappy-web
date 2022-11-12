import Head from "next/head";
import Image from "next/image";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material";

{
  /* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */
}

export default function Home() {
  return (
    <CssVarsProvider>
      <Head>
        <title>Scrappy</title>
        <meta
          name="description"
          content="The perfect companion for your recycling factory."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="robots" content="noindex" /> {/* TODO: enable later */}
      </Head>
    </CssVarsProvider>
  );
}
