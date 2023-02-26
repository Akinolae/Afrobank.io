import { combineReducers, createSlice, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REGISTER,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = createSlice({
  name: "user",
  initialState: {
    token: "",
    isSignedIn: false,
    payLoad: {},
  },
  reducers: {
    updateUser: (state, data) => {
      state.payLoad = data.payload;
    },
    updateToken: (state, data) => {
      state.token = data.payload;
    },
    updateSignIn: (state, data) => {
      state.isSignedIn = data.payload;
    },
  },
});

const { updateSignIn, updateToken, updateUser } = reducers.actions;

const rootReducer = combineReducers({
  user: reducers.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

let persistor = persistStore(store);

export { store, persistor, updateSignIn, updateToken, updateUser };
