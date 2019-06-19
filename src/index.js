import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// import './index.css';

// updated in counter 5 -- importing store form store folder's index.js
import store from './store'
import { Provider } from 'react-redux'

const firebaseConfig = {
  apiKey: "AIzaSyCMo18KQsWYdSjHPrmRO9u7-GYnj9ocxO0",
  authDomain: "draganddrop-ce4f4.firebaseapp.com",
  databaseURL: "https://draganddrop-ce4f4.firebaseio.com",
  projectId: "draganddrop-ce4f4",
  storageBucket: "draganddrop-ce4f4.appspot.com",
  messagingSenderId: "957650716877",
  appId: "1:957650716877:web:c2ae8fef6fea8786"
};
firebase.initializeApp(firebaseConfig)

ReactDOM.render(

  //Wraping up in Provider
  
  <Provider store={store}>
  <div>
    <App/>
  </div>
  </Provider>
  ,
  document.getElementById('root')
);
