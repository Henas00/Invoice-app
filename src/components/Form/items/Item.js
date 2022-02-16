import Input from "../input/Input";
import { useEffect } from "react";
import { useFormikContext } from "formik";
import { MdDelete } from "react-icons/md";
import styles from "../FormStructure.module.css"

const Item = ({ index, remove, item }) => {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    const total = values.items[index].quantity * values.items[index].price;
    setFieldValue(`items[${index}].total`, total || "0");
  }, [values.items[index].quantity, values.items[index].price]);

  return (
    <>
      <Input label="name" name={`items[${index}].name`} />
      <div className={styles.grid} >
        <Input label="qty" name={`items[${index}].quantity`} />
        <Input label="price" name={`items[${index}].price`} />
        <Input label="total" name={`items[${index}].total`} disabled />
        <div className={styles.trash} type="button" onClick={() => remove(index)}>
          <MdDelete />
        </div>
      </div>
    </>
  );
};

export default Item;
