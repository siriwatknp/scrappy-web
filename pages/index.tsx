import React from "react";
import Head from "next/head";
import Image from "next/image";

{
  /* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */
}

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Scrappy</title>
        <meta
          name="description"
          content="The perfect companion for your recycling factory."
        />
      </Head>
    </React.Fragment>
  );
}
