import { revalidateTag } from "next/cache"

export default function CadastroClientes() {
  
    async function createCliente(form: FormData) {
        'use server'

        const cliente = form.values()

        if (!cliente) {
            return
        }

            await fetch('http://n8npay.zapto.org:9099/api-beck/insert.php', {
            method: 'POST',
            body: JSON.stringify({
                first_name: 'first_name',
                last_name: 'last_name',
                email: 'email',
            })
            })
        
        console.log(cliente);

        //Indica qual o componente deve ser atualizado depois da execução da função
        revalidateTag('tabela-cliente')

}

    return (
        <>
            <form action={createCliente} method="POST">
                <input type="text" name="first_name" placeholder="Nome" />
                <input type="text" name="last_name" placeholder="Sobrenome" />
                <input type="text" name="email" placeholder="E-mail" />
                <button type="submit">Salvar</button>
            </form>
        </>
    )
}


//http://n8npay.zapto.org:9099/api-beck/insert.php