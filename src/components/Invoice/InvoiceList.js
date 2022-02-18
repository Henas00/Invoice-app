
import { useContext, useEffect } from "react";
import Cards from "../layouts/cards/Cards.js";
import DataContext from "../../context/DataContext";
import styles from "./InvoiceList.module.css";
import NoInvoice from "../layouts/NoInvoice.js";

const InvoiceList = () => {
  const { invoices, filteredData, options, isfiltered, setIsFiltered } =
    useContext(DataContext);

  const filter = options.filter((opt) => opt.checked)

  useEffect(() => {
    if (filter.length) {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, [filter]);
  return (
    <div className={styles.list}>
      {invoices.length === 0 && <NoInvoice />}
      {!isfiltered
        ? invoices.map((invoice) => {
          return <Cards key={invoice.id} data={invoice} />;
        })
        : filteredData.map((invoice) => {
          return <Cards key={invoice.id} data={invoice} />;
        })}
    </div>
  );
};

export default InvoiceList;
