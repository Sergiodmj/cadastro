import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import './globals.css'
import Head from 'next/head'



export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <Link />
        <title>Sistema</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>

  )
}
