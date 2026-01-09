import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // Verileri LocalStorage'a kaydeder
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// 1. Persist Yapılandırması
// Sadece 'contacts' dilimindeki 'items' dizisini saklamak istiyoruz
const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"], 
};

// 2. Persisted Reducer Oluşturma
// contactsReducer'ı persist özellikleriyle sarmalıyoruz
const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

// 3. Store Yapılandırması
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer, // Persist edilmiş reducer
    filters: filtersReducer,            // Persist edilmeyen (normal) reducer
  },
  // Redux Persist ile çalışırken hata almamak için middleware ayarı
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 4. Persistor Oluşturma
export const persistor = persistStore(store);