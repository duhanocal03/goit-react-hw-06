import { createSlice } from "@reduxjs/toolkit";

// Başlangıç durumu (Initial State)
const initialState = {
  items: []
};

const contactsSlice = createSlice({
  name: "contacts", // Dilim adı
  initialState,
  reducers: {
    // Yeni bir iletişim ekleme eylemi
    addContact: (state, action) => {
      // Redux Toolkit içinde state'i doğrudan "mutate" eder gibi yazabiliriz (Immer kütüphanesi sayesinde)
      state.items.push(action.payload);
    },
    // ID ile iletişim silme eylemi
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

// Eylemleri (actions) dışa aktarıyoruz
export const { addContact, deleteContact } = contactsSlice.actions;

// Seçici fonksiyonu (selector) dışa aktarıyoruz
// Bu fonksiyon useSelector içinde kullanılacak
export const selectContacts = (state) => state.contacts.items;

// Redüktörü (reducer) default olarak dışa aktarıyoruz
export default contactsSlice.reducer;