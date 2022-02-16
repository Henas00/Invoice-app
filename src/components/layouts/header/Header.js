import { useState, useEffect, useRef, useContext } from "react";
import styles from "../header/Header.module.css";
import DataContext from "../../../context/DataContext";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import DropDown from "../dropdown/DropDown";

const Header = ({ handleClick }) => {
  const { invoices, isfiltered, filteredData, IconContext } =
    useContext(DataContext);
  const dropdown = useRef();
  const [dropDownOpen, setDropDownOpen] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setDropDownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  function toggleDropDown(e) {
    e.preventDefault();
    setDropDownOpen((prev) => !prev);
  }

  function ShowInvoiceNumber(data) {
    if (data.length === 0) {
      return "There are no invoices";
    } else if (data.length === 1) {
      return "There is 1 invoice";
    } else {
      return `There are ${data.length} total invoices`;
    }
  }
  const message = !isfiltered
    ? ShowInvoiceNumber(invoices)
    : ShowInvoiceNumber(filteredData);

  return (
    <header className={styles.header}>
      <div>
        <h1>Invoices</h1>
        <p className={`${styles.message} ${styles.hide} `}>{message}</p>
      </div>
      <IconContext.Provider value={{ size: "1rem", color: "#7c5df8" }}>
        <div className={styles.filter} ref={dropdown}>
          <div className={styles.button} onClick={toggleDropDown}>
            <span>
              <span className={styles.hide}>Filter by</span> status
            </span>
            {!dropDownOpen ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </div>
          <div className={styles.drop}>
            {dropDownOpen && <DropDown />}
         </div>
        </div>
      </IconContext.Provider>
     
      <button onClick={handleClick} className={styles.new}>
        <span className={styles.plusBtn}>+</span>
        <span></span> New<span className={styles.hide}>Invoice</span>  
      </button>
    </header>
  );
};

export default Header;
