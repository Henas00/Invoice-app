import styles from "./Status.module.css"
import { capitalizeFirstLetter } from '../../utils/functions';


export const Status = ({ invoiceStatus }) => {

    function color() {
        if (invoiceStatus === "paid") {
            return "green";
        } else if (invoiceStatus === "pending") {
            return "yellow";
        } else {
            return "grey";
        }
    }
    const statusColor = color()

    return (
        <span className={`${styles[statusColor]} ${styles.status}`} ><span className={styles.circle} ></span>
            {capitalizeFirstLetter(invoiceStatus)}</span>
    );
};