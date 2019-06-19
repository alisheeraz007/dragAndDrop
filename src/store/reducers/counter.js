import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

function counter(value = 0, action) {
    switch (action.type) {
    case 'INCREMENT':
      let flatApp = firebase.database().ref().child("wholeData").child("FlatApp").child("divNo")
      return flatApp
    case 'DECREMENT':
      return value - 1
    default:
      return value
    }
  }
  
  export default counter;