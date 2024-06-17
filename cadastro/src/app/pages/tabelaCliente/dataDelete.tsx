import { revalidateTag } from "next/cache";

 export async function DeleteData(id: number) {
        'use server'

    try {
        const response = await fetch(`${"http://n8npay.zapto.org:9099/api-beck/delete.php/"}${id}`, { // Faz uma requisição DELETE para o URL fornecido com o ID específico.
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