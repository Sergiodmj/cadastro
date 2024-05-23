import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";

import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <Link rel="shortcut icon" href="/Images/favicon.ico" />
                <title>Sistema</title>
            </Head>
            <main>{children}</main>
            <Navbar />
            <Footer />
        </>
    )
}