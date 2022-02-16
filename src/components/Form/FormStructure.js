import Input from "./input/Input";
import Items from "./items/Items";

import Select from "./select/Select";
import DatePick from "./datePicker/DatePick";
import styles from "./FormStructure.module.css"



const FormStructure = () => {


  return (
    <>
      <section className={styles.gap}>
        <h3>Bill From</h3>
        <Input
          label="Street Address"
          name="senderAddress.street"
          type="text"
        />
        <div className={`${styles.formRow} ${styles.gap}`}>
          <Input label="City" name="senderAddress.city" type="text" />
          <Input
            label="Post Code"
            name="senderAddress.postCode"
            type="text"
          />
          <Input label="Country" name="senderAddress.country" type="text" />
        </div>
      </section>
      <section className={styles.gap}>
        <h3>Bill To</h3>
        <div className={styles.gap} >
          <Input label="Client's Name" name="clientName" type="text" />
          <Input label="Client's Email" name="clientEmail" type="email" />
          <Input
            label="Street Address"
            name="clientAddress.street"
            type="text"
          />
          <section className={`${styles.formRow} ${styles.gap}`}>
            <Input label="City" name="clientAddress.city" type="text" />
            <Input
              label="Post Code"
              name="clientAddress.postCode"
              type="text"
            />
            <Input label="Country" name="clientAddress.country" type="text" />
          </section>
          <div className={`${styles.formRow} ${styles.gap}`}>
            <DatePick label="Invoice Date" name="createdAt" />
            <Select label="Payment Terms" name="paymentTerms" />
          </div>
          <Input label="Description" name="description" />
        </div>
      </section>
      <section className={styles.gap}>
        <h3>Item List</h3>
          <Items />
        </section>
    </>
  );

}

export default FormStructure;