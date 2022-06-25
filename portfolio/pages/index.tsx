import Head from "next/head";
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
      </>
    </Layout>
  );
}
