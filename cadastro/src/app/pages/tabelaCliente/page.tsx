import { revalidateTag } from "next/cache";

export default async function Cliente() {
    const res = await fetch('http://n8npay.zapto.org:9099/api-beck/', {

        // força o navegador a não guardar o cash, ele vai fazer uma nova requisição cada vez que for executado
        cache: 'no-cache',

        //método que faz atualizar o componente assim que alterado algum dado, sem precisar atualizar a página.
        next: {
            tags: ['tabela-cliente']
        }

        // caso queira limitar o tempo em que o navegador guarda o cash
        // next: {
        //     revalidate: 60
        // }

    })

    async function deleteData(id: number) {
        'use server'

    try {
        const response = await fetch(`${"http://n8npay.zapto.org:9099/api-beck/delete.php"}/${id}`, { // Faz uma requisição DELETE para o URL fornecido com o ID específico.
            method: 'DELETE', // Define o método da requisição como DELETE.
        });

        if (!response.ok) { // Verifica se a resposta HTTP indica um sucesso (código 2xx).
            throw new Error(`Failed to delete data: ${response.statusText}`); // Se a resposta não for bem-sucedida, lança um erro com a mensagem da resposta.
        }

        console.log('Data deleted successfully'); // Se a exclusão for bem-sucedida, exibe uma mensagem de sucesso.
        } catch (error) { // Captura e trata quaisquer erros que ocorram durante o processo.
        console.error('Error deleting data:', error); // Se ocorrer um erro, exibe uma mensagem de erro com detalhes.
        }
        
        revalidateTag('tabela-cliente')
    
}

    
    
    const data = await res.json();
    
    return (
        <>
            <table>
                <tbody>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>SOBRENOME</th>
                    <th>E-MAIL</th>
                    <th>DOCUMENTO</th>
                    <th></th>
                </tr>
                    {data.map((data: any) => {
                        return (
                            <tr key={data.id}>
                                <td>{ data.id }</td>
                                <td>{ data.first_name }</td>
                                <td>{ data.last_name }</td>
                                <td>{ data.email }</td>
                                <td>{ data.document }</td>
                                <td><button type="button">Alterar</button></td>
                                <td><button type="button">Escluir</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

