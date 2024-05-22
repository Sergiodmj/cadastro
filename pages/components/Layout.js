import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <Link rel="shortcut icon" href="/Images/favicon.ico" />
            </Head>
        </>
    )
}