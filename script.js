
export async function getStaticProps() {
    const api = "http://n8npay.zapto.org:9099/api-beck/";

    const res = await fetch(api);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}

<Image className={style.image}
    src="/images/fundo.png"
    width="300"
    height="300"
    alt="Engrenagem"
/>