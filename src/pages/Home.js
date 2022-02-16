import { useContext } from "react";
import Header from "../components/layouts/header/Header";
import NewInvoice from "../components/Form/NewInvoice";
import InvoiceList from "../components/Invoice/InvoiceList";
import Wrapper from "../components/layouts/wrapper/Wrapper";
import DataContext from "../context/DataContext";

const Home = () => {
  const { formIsOpen, setFormIsOpen } = useContext(DataContext);
 

  function openForm() {
    setFormIsOpen(true);
  }
  return (
    <>
      <Wrapper>
        <main>
          <Header handleClick={openForm} />
          <InvoiceList /></main>
      </Wrapper>
      <div> {formIsOpen && <NewInvoice />}</div>
    </>

  );
};

export default Home;
