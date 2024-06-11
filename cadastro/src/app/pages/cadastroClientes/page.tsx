import { revalidateTag } from "next/cache"
import Cliente from "../tabelaCliente/page"

export default function CadastroClientes() {
  
    // Recebe os dados do dormulario
    async function createCliente(form: FormData) {
        'use server'

        //Converte os dados em um objeto do next
         const data = Object.fromEntries(form);

        //Faz uma validação, se o objeto não conter dados, ele simplesmente retorna e nao salva nada
        if (!data) {
            return
        }

        // Faz uma requisição POST pasa a rota
        await fetch('http://n8npay.zapto.org:9099/api-beck/insert.php', {
        //Informa o metodo que esta usando
         method: 'POST',
         body: JSON.stringify(data)    //encaminha o objeto para a rota como JSON.
         })
        
        // console.log(data);       


        //Indica qual o componente deve ser atualizado depois da execução da função
        revalidateTag('tabela-cliente')

}

    return (
        <>
            <form action={createCliente} method="POST">
                <input type="text" name="nome" placeholder="Nome" />
                <input type="text" name="sobrenome" placeholder="Sobrenome" />
                <input type="text" name="email" placeholder="E-mail" />
                <button type="submit">Salvar</button>
            </form>

            <Cliente/>
        </>
    )
}


//http://n8npay.zapto.org:9099/api-beck/insert.php