import styles from "./Button.module.css"
function Buttons(props) {
    const btn = props.btnStyle

    return (
        <button name={props.name} className={styles[btn]} type={props.type} onClick={props.handleClick} aria-label={props.ariaLabel}> 
            {props.children || props.text}
        </button>
    );
}

export default Buttons;