import * as dayjs from "dayjs";
//capitalize
export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
//date to string
export const dateToString = (date) => {
    const options = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    };
    const newDate = new Date(date).toLocaleString('en-GB', options)
    return newDate;
};
//id
function generateID() {
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const randomNumber = random(1000, 9999);
    const randomLetter = String.fromCharCode(random(65, 90), random(65, 90));
    return randomLetter + randomNumber;
}
export const generateUniqueId = (arr) => {
    const allIds= arr.map((item) => {
        return item.id;
    });
    while (true) {
        let id = generateID();

        if (!allIds.includes(id)) {
            return id;
        }
    }
};

//local storage
export const getInvoicesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('invoices'));
};
export const postInvoicesToLocalStorage = (invoices) => {
    localStorage.setItem('invoices', JSON.stringify(invoices));
};

//calculation
export function calcTotal(items) {
    let total = 0;
    for (let item of items) {
        total += item.total;
    }
    return total;
}
//create an invoice
export function createInvoice(status, values) {
    const newInvoice = {
        ...values,
        createdAt: dayjs(values.createdAt).format("YYYY-MM-DD"),
        paymentDue: dayjs(values.createdAt)
            .add(Number(values.paymentTerms), "day")
            .format("YYYY-MM-DD"),
        status,
        total: calcTotal(values.items),
    };
    console.log(values);

    return newInvoice;
}
//add an invoice
export function addInvoice(invoice, invoices, setInvoices) {
    const newInvoices = [invoice, ...invoices];
    setInvoices(newInvoices);
    localStorage.setItem('invoices', JSON.stringify(newInvoices))
}
//delete an invoice
export function deleteInvoice(id, invoices, setInvoices, setModalOpen) {
    const newInvoices = invoices.filter((invoice) => {
        return id !== invoice.id;
    });
    setInvoices(newInvoices);
    setModalOpen(false)
    localStorage.setItem('invoices', JSON.stringify(newInvoices))
}

//update an invoice
export function updateInvoice(newInvoice, invoices, setInvoices) {
    const newInvoices = invoices.map(invoice => {
        if (newInvoice.id === invoice.id) {
            return newInvoice
        }
        return invoice;
    })
    setInvoices(newInvoices);
    console.log(newInvoices);
    localStorage.setItem('invoices', JSON.stringify(newInvoices))
}
//mark as paid function
export function markAsPaid(id, invoices, setInvoices) {
    const newInvoices = invoices.map((invoice) => {
        if (id === invoice.id) {
            return { ...invoice, status: 'paid' }
        }
        return invoice
    })
    setInvoices(newInvoices)
    localStorage.setItem('invoices', JSON.stringify(newInvoices))
    console.log("clicked")
}