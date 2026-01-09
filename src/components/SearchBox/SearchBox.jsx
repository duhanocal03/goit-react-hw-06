import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter); // Mevcut filtreyi Redux'tan oku

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value)); // Her harf yazıldığında eylemi gönder
  };

  return (
    <div className={css.container}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;