import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import {store, persistor} from './store';
import Root from './src/components/screens/root';
import mock from './mocks/setup';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toast />
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
