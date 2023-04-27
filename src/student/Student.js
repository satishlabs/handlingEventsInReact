import { Component } from "react";
import Course from "../course/Course";
import '../student/Student.css';

class Student extends Component{
    state={
        sid:101, 
        sname:"Satish",
        email:"satish@gmail.com",
        phone:7676134553,
        city:"Bangalore",
        showStudent : false
    }

    showStudentInfo=() =>{
        console.log("student button clicked");
        let studentFlag = this.state.showStudent;
        this.setState({
            showStudent : !studentFlag
        })
    }

    render(){
        console.log("I am student component");
        let mystudentInfo = null;
        if(this.state.showStudent === true){
            mystudentInfo=(
            <div className="mystudent">
                <p>Sid: {this.state.sid}</p>
                <p>Sname: {this.state.sname}</p>
                <p>Email: {this.state.email}</p>
                <p>Phone: {this.state.phone}</p>
                <p>City: {this.state.city}</p>
                <Course/>
            </div>
        )
    }
        return(
            <div>
                <button className="mystudent" onClick={this.showStudentInfo}>Student Info</button>
                {mystudentInfo}
                 <br/>
            </div>
        )
    }
}
export default Student;