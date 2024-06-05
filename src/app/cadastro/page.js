import style from "../../../styles/formulario.module.css"

export default function Cadastro() {

    async function salvar() {
        'use server'

        // event.preventDefault()

        // if ((!nome) || (!sobrenome) || (!email)) {
        //     return
        // }

        await fetch('http://n8npay.zapto.org:9099/api-beck/insert.php', {
            method: 'POST',
            body: JSON.stringify({
                nome, sobrenome, email
            })
        })

    }

    return (

        <div>
            <form action={salvar}>
                <input name="nome" placeholder="Nome" />
                <input name="sobrenome" placeholder="sobrenome" />
                <input name="email" placeholder="sobrenome" />
                <button >Salvar</button>
            </form>
        </div>

    )
}