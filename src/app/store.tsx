import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import formReducer from "../features/formSlice";
import employeeReducer from "../features/employeeSlice";

//Combine reducers
const rootReducer = combineReducers({
  form: formReducer,
  employee: employeeReducer,
});

//Config Redux Persist
const persistConfig = {
  key: "root",
  storage,
};

//Reducer persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

//Config the store with the persistent reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
