import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;