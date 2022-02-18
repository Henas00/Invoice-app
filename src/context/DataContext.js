import { createContext, useState, useEffect } from "react";
import data from "../data.json";
import { IconContext } from "react-icons";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [invoices, setInvoices] = useState(data);
  const [isfiltered, setIsFiltered] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [isEdit, setIseEdit] = useState(false);
  const [modalOpen, setModalOpen] = useState(false)
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [options, setOptions] = useState([
    {
      value: "paid",
      checked: false,
    },
    {
      value: "pending",
      checked: false,
    },
    {
      value: "draft",
      checked: false,
    },
  ]);
  console.log(invoices)
  useEffect(() => {
    if (window.localStorage.invoices === undefined) {
      localStorage.setItem('invoices', JSON.stringify(invoices))
    }
    setInvoices(JSON.parse(localStorage.getItem('invoices')))
  }, [window.localStorage.invoices])


  const filterInvoices = (options, filter, data) => {
    let filtered;
    const option = options.map((opt) => {
      if (opt.value === filter && !opt.checked) {
        filtered = data.filter((invoice) => invoice.status === filter);
        setFilteredData([...filteredData, ...filtered]);
        return { value: opt.value, checked: true };
      } else if (opt.value === filter && opt.checked) {
        setFilteredData(filteredData.filter((prev) => prev.status !== filter));
        return { value: opt.value, checked: false };
      } else {
        return opt;
      }
    });
    setOptions(option);
  };

  return (
    <DataContext.Provider
      value={{
        invoices,
        setInvoices,
        isDropDownOpen,
        setIsDropDownOpen,
        filterInvoices,
        filteredData,
        setFilteredData,
        options,
        setOptions,
        isfiltered,
        setIsFiltered,
        IconContext,
        formIsOpen,
        setFormIsOpen,
        modalOpen,
        setModalOpen,
        isEdit,
        setIseEdit
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
