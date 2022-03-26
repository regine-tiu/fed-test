import arrow from "../../assets/arrow-icon.svg"
import styles from "./Button.module.sass"

const Button = () => {
    const {slide_fx} = styles;
    return (
        <button className={slide_fx}>View case study
            <img src={arrow} alt="arrow icon"/>
        </button>
    )
}

export default Button;