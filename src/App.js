
import { Component } from 'react';
import './App.css';
import Student from './student/Student';

class App extends Component{
  state = {
    myheader : "Welcome to Satishlabs",
  }
  render(){
    console.log("I am app component");
    return(
      <div className='myheader'>
        <p>{this.state.myheader}</p>
        <br/>
       <Student/>
      </div>
    )
  }
}

export default App;
