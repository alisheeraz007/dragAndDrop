import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Admin from './Admin'

// Mapping the component's property to Redux's state
function mapStateToProps(state) {
  return {
    // counter - this will be component's property counter and can be accessed
    // as this.props.counter
    // state - this will be the state of redux, whatever value we return from
    // reducer function will be in state, for now we are sending simple numaric
    // value therefore it will be simple integer
    counter: state,
  };
}

// Update in counter 4
// increment and decrement will be functions and will be 
// available in this.props.increment and this.props.decrement.

// store object is not avaiable here so we will map dispatch to properties and
// pass it in connect function then redux will map it
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    incrementAgain: function () {
      console.log("Incrementing value ");
      // any logic and come here

      // then return dispatch
      return dispatch({ type: 'INCREMENT' });
    }
  };
}

class DashBoard extends Component {

  abc() {
    console.log("abc")
    console.log(firebase.database().ref().child("AllProjects").child("FlatApp"))
  }

  render() {
    return (
      <div >
        DashBoard {console.log(this.props.counter)}
        <div>
            <Admin/>
            </div>  
      </div>
    );
  }
}

// connect function will wrap component and attached properties
// from mapStateToProps into App component
// Update in coutner 4 -- sending mapDispatchToProps in connect
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
