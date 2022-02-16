import { Link } from 'react-router-dom';
import styles from './Cards.module.css'
import {
    MdOutlineKeyboardArrowRight
} from "react-icons/md";
import { Status } from '../status/Status';
import { dateToString } from '../../utils/functions';

const Cards = ({ data }) => {

    return (
        <Link to={"/" + data.id} className={styles.card}>
            < p className={styles.id} >
                <span > # </span> {data.id}
            </p >
            <span className={styles.paymentDue} > Due {dateToString(data.paymentDue)} </span>
            <span className={styles.clienName} > {data.clientName} </span>
            <span className={styles.amount} > $ {data.total.toLocaleString()} </span>
            <span className={styles.status}>            <Status invoiceStatus={data.status} />
</span>
            < span className={styles.arrowBtn} > < MdOutlineKeyboardArrowRight />
            </span>
        </Link>
    );
};

export default Cards;