import style from "../../../styles/table.module.css"

async function getClientes() {
  const res = await fetch("http://n8npay.zapto.org:9099/api-beck/");

  const clientes = await res.json();

  return clientes;
}

const headers = [
  "ID",
  "NOME",
  "SOBRENOME",
  "EMAIL",
  "DOCUMENTO",
]

export default async function Cliente() {
  const clientes = await getClientes();
  return (
    <>
      <table>
        <thead>
          {headers.map((header) => (
            <th key={header} className={style.cabecalho}>
              {header}
            </th>
          ))}
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.first_name}</td>
              <td>{cliente.last_name}</td>
              <td>{cliente.email}</td>
              <td>{cliente.document}</td>
              <td><button>Alterar</button></td>
              <td><button>Excluir</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}


