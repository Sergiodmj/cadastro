import style from "../../../styles/formulario.module.css"

export default function Cadastro() {

    function createPost(cliente) {
        fetch('http://n8npay.zapto.org:9099/api-beck/insert.php', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
        })
    }

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(cliente)
    }

    return (
        <>
            <div className={style.container}>
                <form className={style.form} action="Cadastro">
                    <div className={style.input_field}>
                        <input
                            type="text"
                            name="text"
                            id="nome"
                        />
                        <label for="username">Nome</label>
                    </div>
                    <div className={style.input_field}>
                        <input
                            type="text"
                            name="text"
                            id="sobrenome"
                        />
                        <label for="username">Sobrensome</label>
                    </div>
                    <div className={style.input_field}>
                        <input
                            type="text"
                            name="text"
                            id="email"
                        />
                        <label for="username">E-mail</label>
                    </div>

                    <div className={style.btn_container}>
                        <button className={style.btn}>Salvar</button>

                    </div>
                </form>
            </div>

        </>
    )
}