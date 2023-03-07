import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Data from "@/components/Data";
import ContactForm from "@/components/ContactForm";
import Counter from "@/components/Counter";
import State from "@/components/State";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>my-next-js-app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Data />
        {/* <ContactForm />
        <Section /> */}
        <State />
        <Counter />
      </main>
    </>
  );
}
