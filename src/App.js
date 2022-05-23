import './styles/App.css';
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
      currentGraduated: "Yes",
      currentWorkItem: {
        company: "",
        title: "",
        startDate: "",
        endDate: "",
      },
      workItems: [],
      deleteIndex: 0,
    }
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      name: this.state.currentName,
      email: this.state.currentEmail,
      phone: this.state.currentPhone,
      school: this.state.currentSchool,
      degree: this.state.currentDegree,
      graduated: this.state.currentGraduated,
    });
  };

  onSubmitWorkItem = (e) => {
    this.setState({
      workItems: this.state.workItems.concat(this.state.currentWorkItem),
    })
    console.log(this.state.workItems)
  }

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

  onSchoolChange = (e) => {
    this.setState({
      currentSchool: e.target.value,
    })
  }

  onDegreeChange = (e) => {
    this.setState({
      currentDegree: e.target.value,
    })
  }

  onGraduatedChange = (e) => {
    this.setState({
      currentGraduated: e.target.value,
    })
  }

  onCompanyChange = (e) => {
    this.setState({
      currentWorkItem: {
        company: e.target.value,
        title: this.state.currentWorkItem.title,
        startDate: this.state.currentWorkItem.startDate,
        endDate: this.state.currentWorkItem.endDate,
      }
    })
  }

  onTitleChange = (e) => {
    this.setState({
      currentWorkItem: {
        company: this.state.currentWorkItem.company,
        title : e.target.value,
        startDate: this.state.currentWorkItem.startDate,
        endDate: this.state.currentWorkItem.endDate,
      }
    })
  }

  onStartDateChange = (e) => {
    this.setState({
      currentWorkItem: {
        company: this.state.currentWorkItem.company,
        title: this.state.currentWorkItem.title,
        startDate : e.target.value,
        endDate: this.state.currentWorkItem.endDate,
      }
    })
  }

  onEndDateChange = (e) => {
    this.setState({
      currentWorkItem: {
        company: this.state.currentWorkItem.company,
        title: this.state.currentWorkItem.title,
        startDate: this.state.currentWorkItem.startDate,
        endDate : e.target.value,
      }
    })
  }

  deleteWorkItem = (item) => {
    let deleteIndex = this.state.workItems.indexOf(item);
    this.setState({
      workItems: this.state.workItems.splice(deleteIndex)
    })
  }

  render() {
    return (
      <div className='appBody'>
        <form onSubmit={this.onSubmitForm}>
          <h1>Resume Builder</h1>
          <EditInformation
            onNameChange={this.onNameChange}
            onEmailChange={this.onEmailChange}
            onPhoneChange={this.onPhoneChange}
            onDegreeChange={this.onDegreeChange}
            onSchoolChange={this.onSchoolChange}
            onGraduatedChange={this.onGraduatedChange}
            onSubmitWorkItem={this.onSubmitWorkItem}
            onCompanyChange={this.onCompanyChange}
            onTitleChange={this.onTitleChange}
            onStartDateChange={this.onStartDateChange}
            onEndDateChange={this.onEndDateChange}
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
        workItems={this.state.workItems}
        deleteWorkItem={this.deleteWorkItem}
        />
      </div>
    );
  }
}

export default App;