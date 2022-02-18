import { useContext, useEffect, useRef } from "react";
import { initialValues, validationSchema } from "./formik";
import { Formik, Form } from "formik";
import DataContext from "../../context/DataContext";

import { updateInvoice, createInvoice, addInvoice, generateUniqueId } from "../utils/functions";

import FormStructure from "./FormStructure";
import Buttons from "../layouts/buttons/Buttons";

import styles from "./NewInvoice.module.css";


const NewInvoice = (props) => {
  const { invoices, setInvoices, setFormIsOpen, setIseEdit } = useContext(DataContext);

  const invoice = props.isEdit && props.invoice[0];
  const editInitialValues = props.isEdit && {
    senderAddress: invoice.senderAddress,
    clientName: invoice.clientName,
    clientEmail: invoice.clientEmail,
    clientAddress: invoice.clientAddress,
    createdAt: new Date(invoice.createdAt),
    paymentTerms: invoice.paymentTerms,
    description: invoice.description,
    items: invoice.items,
  };


  const form = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (form.current && !form.current.contains(event.target)) {
        setFormIsOpen(false);
        setIseEdit(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [form]);


  function discardForm() {
    setFormIsOpen(false);
    setIseEdit(false)
    console.log("clicked")
  }

  function onSubmitNew(values) {
    const newInvoice = {
      ...createInvoice("pending", values),
      id: generateUniqueId(invoices),
    };
    addInvoice(newInvoice, invoices, setInvoices);
    setFormIsOpen(false);
  }

  function addDraft(values) {
    console.log('çlickd')
    const newInvoice = {
      ...createInvoice("draft", values),
      id: generateUniqueId(invoices),
    };
    addInvoice(newInvoice, invoices, setInvoices);
    setFormIsOpen(false);
  }

  function onSubmitUpdate(values) {
    const newInvoice = { ...createInvoice("pending", values), id: invoice.id };
    updateInvoice(newInvoice, invoices, setInvoices);
    setIseEdit(false);
  }


  return (
    <div className={styles.overlayForm} ref={form}>
      <header className={styles.title}>
        <h1>{!props.isEdit ? "New Invoice" : `Edit # ${invoice.id}`}</h1>
      </header>
      <main className={styles.form}>

        <Formik
          initialValues={props.isEdit ? editInitialValues : initialValues}
          validationSchema={validationSchema}
          onSubmit={props.isEdit ? onSubmitUpdate : onSubmitNew}
        >

          {(formik) => (
            <Form>
              <FormStructure />
              <footer className={styles.btns}>
                {props.isEdit ? (
                  <>
                    <Buttons type="button" handleClick={discardForm} text="Cancle" btnStyle="btnQuaternary" />
                    <Buttons type="submit" text="Save Changes" btnStyle="btnPrimary" ariaLabel="Save Functionality Button For Edit Invoice" />
                  </>
                ) : (

                  <>
                    <Buttons type="button" handleClick={discardForm} text="Discard" btnStyle="btnQuaternary" />
                    <div className={styles.btnGap}>
                        <Buttons type="button" handleClick={() => addDraft(formik.values)} btnStyle="btnTertiary" ariaLabel="Save as Draft Functionality Button for New Invoice"><span className={styles.hide}>Save as </span>Draft</Buttons>
                        <Buttons type="submit" btnStyle="btnPrimary" ariaLabel="Save Functionality Button For New Invoice">Save<span className={styles.hide}> &amp; Send</span></Buttons>
                    </div>
                  </>
                )}
              </footer>
            </Form>
          )}

        </Formik>
      </main>

    </div>
  );
};

export default NewInvoice;
