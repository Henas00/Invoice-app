import { useField } from "formik";
import styles from '../input/Input.module.css'
const Select = (props) => {

  const dropdownOptions = [
    { name: "Net 1 Day", value: 1 },
    { name: "Net 7 Days", value: 7 },
    { name: "Net 14 Days", value: 14 },
    { name: "Net 30 Days", value: 30 },
  ];
  const [field, meta] = useField(props)
  return (
    <div className={`${styles.select} ${styles.inputGroup}`}>
      <label htmlFor={props.name}>{props.label}</label>
      <select className={styles.input} name={props.name} {...field} {...props}>
        {dropdownOptions.map((opt) => {
          return (
            <option key={opt.name} value={opt.value}>
              {opt.name}
            </option>
          );
        })}
      </select>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default Select;

