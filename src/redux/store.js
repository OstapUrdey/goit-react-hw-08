import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReduser from './contactsSlice';
import filtersReducer from './filtersSlice';

const persistConfig = {
    key: "contacts",
    storage,
    whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReduser);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE,PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);