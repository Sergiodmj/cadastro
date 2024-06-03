import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={"/Images/logo.png"} width="70" height="70" alt="Logo" />
      </div>

      <ul className={styles.link_items}>
        <li>
          <Link href="/cadastro">
            Cadastro
          </Link>
        </li>
        <li>
          <Link href="/cliente/">
            Cliente
          </Link>
        </li>
      </ul>
    </nav>
  );
}
