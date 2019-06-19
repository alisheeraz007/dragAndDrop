import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

function counter(value = 0, action) {
    switch (action.type) {
    case 'INCREMENT':
      let adminData = {
        name: "admin",
        password: 123456,
      }
    return adminData
    case 'DECREMENT':
      return value - 1
    default:
      return value
    }
  }
  
  export default counter;