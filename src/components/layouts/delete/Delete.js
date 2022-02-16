import { useNavigate } from "react-router-dom";
import Buttons from "../buttons/Buttons";
import DataContext from "../../../context/DataContext";
import { useContext, useRef, useEffect } from "react";
import styles from './Delete.module.css'
import { deleteInvoice } from "../../utils/functions";

const Delete = ({invoice}) => {
    const { invoices, setInvoices, setModalOpen } = useContext(DataContext);

    let navigate = useNavigate();

    const modal = useRef();
    useEffect(() => {
        function handleClickOutside(event) {
            if (modal.current && !modal.current.contains(event.target)) {
                setModalOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modal]);


    function closeModal() {
        setModalOpen(false)
    }

    return ( 
        <div className={styles.back}>
            <div className={styles.deleteModal} ref={modal}>
                <h2 className={styles.title}>Confirm Deletion!</h2>
                <div>
                    <p>Are you sure you want to delete invoice #
                        <span className={styles.bold}>{invoice.id}</span>?</p>
                    <p>This action cannot be undone.</p>
                </div>
                <div className={styles.btns}>
                    <Buttons handleClick={closeModal} type="button" text="Cancle" btnStyle="btnQuaternary" />
                    <Buttons handleClick={() => {
                        deleteInvoice(invoice.id, invoices, setInvoices, setModalOpen);
                        navigate("/");
                    }} text="Delete" btnStyle="btnDelete" ariaLabel="Save Functionality Button For Delete Invoice" />
                </div>
           </div>
    </div>
     );
}
 
export default Delete;