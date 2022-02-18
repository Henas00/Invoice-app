import noInvoice from '../../assets/images/no-invoice.png'
import styles from './NotFound.module.css'

const NoInvoice = () => {
    return ( 
        <>
            <h3>There is no invoice!</h3>

            <div className={styles.notfound}>
                <img src={noInvoice} alt="" />
            </div></>
     );
}
 
export default NoInvoice;