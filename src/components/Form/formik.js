import * as Yup from "yup";

export const initialValues = {
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientName: "",
  clientEmail: "",
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  createdAt: new Date(),
  paymentTerms: "30",
  description: "",
  items: [],
};



export const validationSchema = Yup.object({
  senderAddress: Yup.object({
    street: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    postCode: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
  }),
  clientName: Yup.string().required("Required"),
  clientEmail: Yup.string().email("Invalid email address").required("Required"),
  clientAddress: Yup.object({
    street: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    postCode: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
  }),
  createdAt: Yup.date().default(function () {
    return new Date();
  }),
  paymentTerms: Yup.string().required(),
  description: Yup.string().required("Required"),
  items: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Required"),
      quantity: Yup.number(0).required("Required"),
      price: Yup.number(0).required("Required"),
      total: Yup.number(0),
    })
  ),
});


