import './App.css';
import EditInformation from './components/EditInformation';
import CVdisplay from './components/CVdisplay';
import React, { Component } from "react";

class App extends Component {
  constructor(){
    super();

    this.state = {
      name: "Jack Johnson",
      currentName: "",
      email: "example@domain.com",
      currentEmail: "example@domain.com",
      phone: "555-5555",
      currentPhone: "555-5555",
      school: "Hogwarts Academy",
      currentSchool: "Hogwarts Academy",
      degree: "Doctorate",
      currentDegree: "Doctorate",
      graduated: "Yes",
      currentGraduated: "Yes"
    }
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      name: this.state.currentName,
      email: this.state.currentEmail,
      phone: this.state.currentPhone,
    });
  };

  onNameChange = (e) => {
    this.setState({
      currentName: e.target.value,
    })
  }

  onEmailChange = (e) => {
    this.setState({
      currentEmail: e.target.value,
    })
  }

  onPhoneChange = (e) => {
    this.setState({
      currentPhone: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <h1>Resume Builder</h1>
          <EditInformation
            onNameChange={this.onNameChange}
            onEmailChange={this.onEmailChange}
            onPhoneChange={this.onPhoneChange}
          />
          <button type="submit">Submit CV Info</button>
        </form>
        <CVdisplay 
        name={this.state.name} 
        email={this.state.email}
        phone={this.state.phone}
        school={this.state.school}
        degree={this.state.degree}
        graduated={this.state.graduated}
        />
      </div>
    );
  }
}

export default App;