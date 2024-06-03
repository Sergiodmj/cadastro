import style from '../../../styles/imput.module.css'

export default function Imput(props) {
    return (
        <div >
            <input type="text" ></input>
            <label >{props.name}</label>
        </div>

    )
}