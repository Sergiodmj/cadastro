import style from "../styles/table.module.css";

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

export default function Cliente(data) {
  return data;
}
