import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import Section from "../components/section";

export default function Home() {
  return (
    <Layout>
      <>
        <Section>
          {" "}
          <h1>Hey! This is my Portfolio website</h1>
        </Section>
        <div className="relative">
          <Image
            src={"/projects/atmosphericCraneRender/res/image.png"}
            objectFit="cover"
            layout="fill"
            style={{ zIndex: -1 }}
          />
        </div>
      </>
    </Layout>
  );
}
