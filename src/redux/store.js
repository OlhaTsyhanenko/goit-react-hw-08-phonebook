// import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import contactsReducer from "./contacts/contacts-reducer";
import  authReducer from "./auth/auth-slice";
import {
  persistStore,
  persistReducer,
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

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
        // .concat(logger),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
// export default {store, persistor};

