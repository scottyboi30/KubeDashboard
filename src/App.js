import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as firebase from 'firebase';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Provider} from 'react-redux';

import store from './store/store';

import RouterComponent from './Router';

Icon.loadFont();

const firebaseConfig = {
  apiKey: 'AIzaSyAiusjd5NqgjgtTA9T8EDTb3hJOcKg4PJU',
  authDomain: 'kubeconsole-5de74.firebaseapp.com',
  databaseURL: 'https://kubeconsole-5de74.firebaseio.com',
  projectId: 'kubeconsole-5de74',
  storageBucket: 'kubeconsole-5de74.appspot.com',
  messagingSenderId: '374417477226',
  appId: '1:374417477226:web:b825301a3d0a82f471c413',
  measurementId: 'G-656RCZNW4X',
};
firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
