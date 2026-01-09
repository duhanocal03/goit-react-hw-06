import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
      <Form>
        <Field name="name" />
        <Field name="number" />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;