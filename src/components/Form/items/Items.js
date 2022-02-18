import { FieldArray } from "formik";
import Item from "./Item";
import styles from "../FormStructure.module.css"
import Buttons from "../../layouts/buttons/Buttons";



const Items = () => {
  return (
    <FieldArray name="items">
      {({ push, remove, form }) => {
        const { values } = form;
        const { items } = values;
        return (
          <div className={styles.gap}>
            {items.map((item, index) => (
              <div key={index} className={`${styles.formRow} ${styles.gap}`}>
                <Item index={index} remove={remove} item={item} />
              </div>
            ))}
            <Buttons type="button" btnStyle="btnQuaternary" handleClick={() =>
              push({ name: "", quantity: "", price: "", total: "" })} text="+ Add New Items"/>
          </div>
        );
      }}
    </FieldArray>
  );
};

export default Items;
