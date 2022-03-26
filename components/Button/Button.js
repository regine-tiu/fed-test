import arrow from "../../src/assets/arrow-icon.svg"
// import styles from './Button.module.sass';

const Button = () => {
    return (
        <button>View case study
            <img src={arrow} alt="arrow icon"/>
        </button>
    )
}

export default Button;