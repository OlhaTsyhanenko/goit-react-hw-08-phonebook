import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
import contactsReducer from "./contacts/contacts-reducer";
import {
//   persistStore,
//   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';

// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// }

const store = configureStore({
    reducer: {
        // contacts: persistReducer(contactsPersistConfig, contactsReducer),
        contacts: contactsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});

export default store;

// const persistor = persistStore(store);
// export default {store, persistor};

