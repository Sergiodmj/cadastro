Consumir e rendenizar a API{
 async function getClientes() {
  const res = await fetch("http://n8npay.zapto.org:9099/api-beck/");

  const clientes = await res.json();

  return clientes;
}

export default async function Cliente() {
  const clientes = await getClientes();
  return (
    <>
      <h1>Lista</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>{cliente.first_name}</li>
        ))}
      </ul>
    </>
  );
}

}