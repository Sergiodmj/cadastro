import Link from "next/link"
import Image from "next/image"

export default function Navbar() {

    return (
        <nav>
            <div>
                <Image
                    src={"/Images/logo.png"}
                    width="60"
                    height="60"
                    alt="Logo"
                />
                <h1>Sistema</h1>
            </div>

            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        Sobre
                    </Link>
                </li>
            </ul>

        </nav>
    )

}