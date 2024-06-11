
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
                                <td><button type="button">Escluir 1</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

