import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Index from './navigators';
import {store, persistor} from './state';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Index />
    </PersistGate>
  </Provider>

);

export default App;
