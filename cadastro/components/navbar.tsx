'use client'
import Link from 'next/link'
import style from '../style/navBar.module.css'


export default function Navbar() {
   
    return (
               
            <nav className={style.navbar}>
                <ul className={style.link}>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/pages/cadastroClientes">
                            Cadastro
                        </Link>
                    </li>
                    <li>
                        <Link href="/pages/tabelaCliente">
                            Clientes
                        </Link>
                    </li>
                </ul>

            </nav>

        
    )
}