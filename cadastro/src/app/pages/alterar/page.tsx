import { revalidateTag } from "next/cache";

export default async function FormAlterar(form: FormData) {
  "use server";

  async function AlterarCliente(form: FormData) {
    //Converte os dados em um objeto do next
    const dataAlt = Object.fromEntries(form);

    // Faz uma requisição POST pasa a rota
    await fetch("http://n8npay.zapto.org:9099/api-beck/edit.php", {
      //Informa o metodo que esta usando
      method: "POST",
      body: JSON.stringify(dataAlt), //encaminha o objeto para a rota como JSON.
    });

    //console.log(data);

    //Indica qual o componente deve ser atualizado depois da execução da função
    revalidateTag("tabela-cliente");
  }
  return (
    <>
      <form>
        <input type="text" name="nome" placeholder="Nome" required />
        <input type="text" name="sobrenome" placeholder="Sobrenome" required />
        <input type="text" name="email" placeholder="E-mail" required />
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}
