async function getData() {
    const res = await fetch('http://n8npay.zapto.org:9099/api-beck/')


    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    console.log(data);

    return {
        props: {
            clientes: data.results,
        },
    }
}


export default function Cliente({ data }) {
    return (
        <>
            <div>
                teste
            </div>
        </>
    )
}
