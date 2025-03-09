import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Muhammad Agung&apos;s Portfolio Website</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="subject"
        content="Muhammad Agung, Bachelor of Applied Informatics Management from State Polytechnic of Sriwijaya"
      />
      <meta
        name="description"
        content="Hello Everyone👋 I'm Muhammad Agung. Bachelor of Applied Informatics Management from State Polytechnic of Sriwijaya. This is my personal portfolio website that created using Next.js and Chakra UI"
      />
      <meta
        name="author"
        content="Muhammad Agung"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
}
