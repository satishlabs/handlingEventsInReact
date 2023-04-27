import { Component } from "react";
import '../course/Course.css';

class Course extends Component{
    state = {
        courseId:"C-201",
        courseName:"ReactJS",
        price:15000,
        duration:"50 Hours",
        trainer:"Satishpd",
        showCourse:false,
    }

    showCourseInfo = () =>{
        console.log("Course Button Clicked");
        let courseFlag = this.state.showCourse;
        // Do not mutate state directly. 
        // Use setState() to change the state
        // this.state.showCourse =! courseFlag;
        this.setState({
            showCourse: !courseFlag
        })
    }

    render(){
        console.log("I am course component");
        let mycourseInfo = null;
        if(this.state.showCourse === true){
            mycourseInfo = (
                <div className="mycourse">
                <p>CourseId: {this.state.courseId}</p>
                <p>CourseName: {this.state.courseName}</p>
                <p>Price: {this.state.price}</p>
                <p>Duration: {this.state.duration}</p>
                <p>Trainer: {this.state.trainer}</p>
            </div>
        )
            }
        return(
            <div>
                <button className="mybutton" onClick={this.showCourseInfo}>Course Info</button>
                {mycourseInfo}
            </div>
           
        )
        }
    }
export default Course;