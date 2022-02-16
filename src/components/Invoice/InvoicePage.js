import DataContext from "../../context/DataContext";
import { useContext } from "react";
import styles from "./InvoicePage.module.css";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Buttons from "../layouts/buttons/Buttons";
import { Status } from "../layouts/status/Status";
import Delete from "../layouts/delete/Delete";
import { markAsPaid } from "../utils/functions";


const InvoicePage = ({ id, setIseEdit }) => {
  const { invoices, IconContext, modalOpen, setModalOpen, setInvoices } = useContext(DataContext);
  console.log(invoices)
  const invoiceP = invoices.filter((i) => i.id === id);
  const invoice = invoiceP[0];

  function openEditForm() {
    setIseEdit(true)
  }
  function openModal() {
    setModalOpen(true)
  }

  
  return (
    <div className={styles.container}>
      {modalOpen && <Delete invoice={invoice}/>}
        <IconContext.Provider value={{ size: "1.2rem", color: "#7c5df8" }}>
          <Link to={"/"}>
            <div className={styles.back}>
              <MdOutlineKeyboardArrowLeft />
              <span> Go Back</span>
            </div>
          </Link>
        </IconContext.Provider>
        <div className={styles.invoice}>
          <div className={styles.status}>
            <h4>Status</h4>
            <Status invoiceStatus={invoice.status}/>
          </div>

          <div className={styles.button}>
            <Buttons handleClick={openEditForm} type="button" text="Edit" btnStyle="btnQuaternary" />
          <Buttons type="button" handleClick={openModal} text="Delete" btnStyle="btnDelete" ariaLabel="Delete Functionality Button For Delete Invoice" />
          {invoice.status !== "paid" && <Buttons handleClick={() => markAsPaid(id, invoices, setInvoices)} type="button" text="Mark as Paid" btnStyle="btnPrimary" />}

          </div>
        </div>

        <div className={styles.data}>
          <div className={styles.header}>
            <div className={styles.description}>
              <div className={styles.title}>
                <h1><span>#</span>{invoice.id}</h1>
                <p>{invoice.description}</p>
              </div>
              <div className={styles.senderAddress}>
                <p>{invoice.senderAddress.street}</p>
                <p>{invoice.senderAddress.city}</p>
                <p>{invoice.senderAddress.postCode}</p>
                <p>{invoice.senderAddress.country}</p>
              </div>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.dates}>
              <div>
                <h4>Invoice Date</h4>
                <p>{invoice.createdAt}</p>
              </div>
              <div>
                <h4>Payment Due</h4>
                <p>{invoice.paymentDue}</p>
              </div>
            </div>

            <div className={styles.billTo}>
              <h4>Bill To</h4>
              <p>{invoice.clientName}</p>
              <div className={styles.clientAddress}>
                <span>{invoice.clientAddress.street}</span>
                <span>{invoice.clientAddress.city}</span>
                <span>{invoice.clientAddress.postCode}</span>
                <span>{invoice.clientAddress.country}</span>
              </div>
            </div>
            <div className={styles.sendTo}>
              <h4>Send To</h4>
              <p>{invoice.clientEmail}</p>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.itemsTable}>
              <div className={styles.items}>
                <h4>Item Name</h4>
                <p>{invoice.items[0].name}</p>
              </div>
              <div className={`${styles.items} ${styles.hide}`}>
                <h4>QTY. </h4>
                <p>{invoice.items[0].quantity}</p>
              </div>
            <div className={`${styles.items} ${styles.hide}`}>
                <h4>Price</h4>
                <p>$ {invoice.items[0].price.toLocaleString()}</p>
              </div>
              <div className={styles.items}>
                <h4>Total</h4>
                <p>$ {invoice.total.toLocaleString()}</p>
              </div>
            </div>
            <div className={styles.amount}>
              <p>Amount Due </p>
              <h5>$ {invoice.total.toLocaleString()}</h5>
            </div>
          </div>
        </div>
      </div>
  );
};

export default InvoicePage;
