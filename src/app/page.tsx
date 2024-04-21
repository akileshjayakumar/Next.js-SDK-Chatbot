import Chat from "@/components/chat";
import Head from "next/head";

export const runtime = "edge";

export default function Page() {
  return (
    <>
      <Head>
        <link rel="icon" href="src/app/favicon.ico" />
      </Head>
      <Chat />
    </>
  );
}
