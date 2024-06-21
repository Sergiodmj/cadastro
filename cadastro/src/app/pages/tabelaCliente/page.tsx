import { revalidateTag } from "next/cache";
import Link from "next/link";

export default async function Cliente() {
  "use server";
  const res = await fetch("http://n8npay.zapto.org:9099/api-beck/", {
    // força o navegador a não guardar o cash, ele vai fazer uma nova requisição cada vez que for executado
    cache: "no-cache",

    //método que faz atualizar o componente assim que alterado algum dado, sem precisar atualizar a página.
    next: {
      tags: ["tabela-cliente"],
    },

    // caso queira limitar o tempo em que o navegador guarda o cash
    // next: {
    //     revalidate: 60
    // }
  });

  const data = await res.json();

  async function deleteCliente(form: FormData) {
    "use server";

    //Converte os dados em um objeto do next
    const data = Object.fromEntries(form);

    //Faz uma validação, se o objeto não conter dados, ele simplesmente retorna e nao salva nada
    if (!data) {
      return;
    }

    // Faz uma requisição POST pasa a rota
    await fetch("http://n8npay.zapto.org:9099/api-beck/delete.php", {
      //Informa o metodo que esta usando
      method: "POST",
      body: JSON.stringify(data), //encaminha o ID do objeto para a rota como JSON.
    });

    console.log(data);

    //Indica qual o componente deve ser atualizado depois da execução da função
    revalidateTag("tabela-cliente");
  }

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
                <td>{data.id}</td>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.email}</td>
                <td>{data.document}</td>
                <td>
                  <form>
                    <Link href="/pages/alterar">
                      <button type="submit">Alterar</button>
                    </Link>
                  </form>
                </td>
                <td>
                  <form action={deleteCliente} method="POST">
                    <input type="hidden" name="id" value={data.id} />
                    <button type="submit">Excluir</button>
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

//http://n8npay.zapto.org:9099/api-beck/edit.php
