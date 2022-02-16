import { useContext } from "react";
import DataContext from "../../../context/DataContext";
import styles from "./DropDown.module.css";
import { MdOutlineCheck } from "react-icons/md";
import { IconContext } from "react-icons";

const DropDown = () => {
  const {
    invoices,
    filterInvoices,
    options,
  } = useContext(DataContext);


  return (
    <IconContext.Provider value={{ size: "1rem", color: "#fff" }}>
      <ul className={styles.dropdown}>
        {options.map((opt) => {
          return (
            <li
              key={opt.value}
              onClick={() => filterInvoices(options, opt.value, invoices)}
            >
              <span className={opt.checked ? `${styles.checked}` : ""}>
                {opt.checked && <MdOutlineCheck />}
              </span>
              {opt.value}
            </li>
          );
        })}
      </ul>
    </IconContext.Provider>
  );
};

export default DropDown;
