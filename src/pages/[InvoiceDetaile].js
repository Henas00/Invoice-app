import { useContext } from "react";
import { useParams } from "react-router-dom";

import NewInvoice from "../components/Form/NewInvoice";
import InvoicePage from "../components/Invoice/InvoicePage";
import Wrapper from "../components/layouts/wrapper/Wrapper";

import DataContext from "../context/DataContext";
import NotFound from "../components/layouts/NotFound";

const InvoiceDetaile = () => {
  const { invoices, isEdit, setIseEdit } = useContext(DataContext);
  let { id } = useParams();

  const invoice = invoices.filter((invoice) => invoice.id === id);
  return (
    <>
      <Wrapper>
        {invoice.length ===0 ? <NotFound /> : 
          <InvoicePage id={id} setIseEdit={setIseEdit} invoiceP={invoice} />
        }
      </Wrapper>
      <div>
        {isEdit && (
          <NewInvoice
            id={id}
            isEdit={isEdit}
            invoice={invoice}
          />
        )}
      </div></>
  );
};

export default InvoiceDetaile;
