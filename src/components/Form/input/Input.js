import { useField } from "formik";
import styles from "./Input.module.css";
// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
// which we can spread on <input>. We can use field meta to show an error
// message if the field is invalid and it has been touched (i.e. visited)


const Input = (props) => {
  const [field, meta] = useField(props);
 
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={props.name}><span>{props.label}</span>{meta.touched && meta.error ? (
        <span className={styles.error}>{meta.error}</span>
      ) : null}</label>
      <input className={`${styles.input} ${meta.touched && meta.error ? styles.invalid : "" }`} {...field} {...props}/>
      
    </div>
  );
};

export default Input;
