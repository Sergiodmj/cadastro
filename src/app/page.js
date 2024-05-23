import Link from "next/link";
import Footer from "../../pages/components/footer";
import Navbar from "../../pages/components/navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <Link rel="shortcut icon" href="/Images/favicon.ico" />
        <title>Sistema</title>
      </Head>
      <Navbar />
      <Footer /></>
  )
}
