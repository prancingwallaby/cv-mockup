import './App.css';
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import WorkInfo from './components/WorkInfo';
import CVdisplay from './components/CVdisplay';
import React, { Component } from "react";

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: "Jack Johnson",
      email: "example@domain.com",
      phone: "555-5555",
    }
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Resume Builder</h1>
        <GeneralInfo></GeneralInfo>
        <EducationInfo></EducationInfo>
        <WorkInfo></WorkInfo>
        <CVdisplay 
        name={this.state.name} 
        email={this.state.email}
        phone={this.state.phone}
        />
      </div>
    );
  }
}

export default App;