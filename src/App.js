import React, { Component } from 'react';
// import logo from './logo.svg';
import './all.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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

class App extends Component {
  constructor() {
    super()
    this.state = {
      projectName: "",
      projectDetail: "",
      projectNumber: "",
      project: false,
      data: null,
      name: null
    }
  }

  gettingData = () => {
    firebase.database().ref().child("AllProjects").on('value', (snap) => {
      if (snap.val()) {
        let data = Object.values(snap.val())
        this.setState({
          data,
        })
      }
    })
  }

  gettingValue = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    }, () => {
      // console.log(this.state)
    })
  }

  add = (ev) => {
    ev.preventDefault()
    let obj = {
      projectName: this.state.projectName,
      projectDetail: this.state.projectDetail,
      projectNumber: this.state.projectNumber,
      divNo: "div1"
    }
    firebase.database().ref().child("AllProjects").child(obj.projectName).set(obj)
    setTimeout(() => {
      this.setState({
        projectName: "",
        projectDetail: "",
        projectNumber: "",
      })
    }, 1500)
  }

  allowDrop = (ev) => {
    ev.preventDefault();
    // let defaultVal = "div1"
    let id = null
    if (ev.target.nodeName === "DIV") {
      id = ev.target.id;
    }
    if (ev.target.parentNode === "DIV") {
      id = ev.target.parentNode.id
    }
    if (id === "div1" || id === "div2" || id === "div3") {
      firebase.database().ref().child("AllProjects").child(this.state.name).child("divNo").set(id);
      // console.log(id)
    } else {
      // firebase.database().ref().child("AllProjects").child(this.state.name).child("divNo").set(defaultVal);
    }
  }

  drag = (ev, index) => {
    let p = document.getElementById("drag" + index).innerHTML;
    this.setState({
      name: p,
    }, () => {
      // console.log(this.state.name)
    })
    ev.dataTransfer.setData("text", ev.target.id);
  }

  componentWillMount() {
    this.gettingData()
  }

  render() {
    return (
      <div className="mainContainer">

        <div className="inputDiv">

          <div className="parentDiv">
            <div className="mainInputDiv">
              <p>Add Project</p>
              <form onSubmit={(ev) => { this.add(ev) }}>

                <input
                  type="text"
                  name="projectName"
                  placeholder="Project Name"
                  onChange={(ev) => { this.gettingValue(ev) }}
                  required
                  autoFocus
                />
                <input
                  type="text"
                  name="projectDetail"
                  placeholder="Project Detail"
                  onChange={(ev) => { this.gettingValue(ev) }}
                  required
                />
                <input
                  type="number"
                  name="projectNumber"
                  placeholder="Project Number"
                  onChange={(ev) => { this.gettingValue(ev) }}
                  required
                />
                <button>
                  Add
              </button>
              </form>
            </div>
          </div>

        </div>

        <div className="dragDropDivs">
          <div
            id="div1"
            // onDrop={(ev) => { this.drop(ev) }}
            onDragOver={(ev) => { this.allowDrop(ev) }}
          >
            <h3>Added Project</h3>
            {this.state.data ?
              this.state.data.map((project, index) => {
                return (
                  project.divNo === "div1" ?
                    <p
                      className="div1"
                      key={index}
                      id={"drag" + index}
                      draggable="true"
                      onDragStart={(ev) => { this.drag(ev, index) }}
                    >
                      {project.projectName}
                    </p> :
                    null
                )
              })
              : null}
          </div>

          <div
            id="div2"
            // onDrop={(ev) => { this.drop(ev) }}
            onDragOver={(ev) => { this.allowDrop(ev) }}
          >
            <h3>On Progress</h3>
            {this.state.data ?
              this.state.data.map((project, index) => {
                return (
                  project.divNo === "div2" ?
                    <p
                      key={index}
                      id={"drag" + index}
                      draggable="true"
                      onDragStart={(ev) => { this.drag(ev, index) }}
                    >
                      {project.projectName}
                    </p> :
                    null
                )
              })
              : null}
          </div>

          <div
            id="div3"
            // onDrop={(ev) => { this.drop(ev) }}
            onDragOver={(ev) => { this.allowDrop(ev) }}
          >
            <h3>Completed</h3>
            {this.state.data ?
              this.state.data.map((project, index) => {
                return (
                  project.divNo === "div3" ?
                    <p
                      key={index}
                      id={"drag" + index}
                      draggable="true"
                      onDragStart={(ev) => { this.drag(ev, index) }}
                    >
                      {project.projectName}
                    </p> :
                    null
                )
              })
              : null}
          </div>
        </div>

      </div>
    )
  }
}

export default App;
