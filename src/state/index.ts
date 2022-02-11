import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension/';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(persistedReducer, composedEnhancers);
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export {store, persistor};

