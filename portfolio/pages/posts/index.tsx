import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Layout from "../../components/layout";

export default function Post() {
  return (
    <Layout>
      <Head>
        <title>Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image src="/images/test.jpg" width="100" height="100" alt="test image" />
    </Layout>
  );
}
