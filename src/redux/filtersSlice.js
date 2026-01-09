import { createSlice } from "@reduxjs/toolkit";

// Başlangıç durumu (Ödevde belirtildiği gibi filters: { name: "" })
const initialState = {
  name: ""
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // Arama kutusuna her harf yazıldığında çalışacak eylem
    changeFilter: (state, action) => {
      // payload olarak gelen metni state'teki name alanına atarız
      state.name = action.payload;
    },
  },
});

// Dispatch içinde kullanmak için eylemi (action) dışa aktarıyoruz
export const { changeFilter } = filtersSlice.actions;

// useSelector ile name değerini çekmek için seçiciyi (selector) dışa aktarıyoruz
export const selectNameFilter = (state) => state.filters.name;

// Store'a eklemek için redüktörü (reducer) dışa aktarıyoruz
export default filtersSlice.reducer;