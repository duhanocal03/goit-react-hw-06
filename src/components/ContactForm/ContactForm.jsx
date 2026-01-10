import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
// ... (Yalınlık için validasyon şeması kodlarını buraya eklemiyorum)

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // Yeni kişi objesini oluşturup dispatch ediyoruz
    dispatch(addContact({
      id: nanoid(),
      name: values.name,
      number: values.number
    }));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field name="name" className={css.input} />
        </label>
        <label className={css.label}>
          Number
          <Field name="number" className={css.input} />
        </label>
        <button type="submit" className={css.btn}>Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;