import React, { Component } from "react";
import '../styles/App.css';

class EditInformation extends Component {

  render() {
    return (
      <div className="infoInput">
            <div className="generalInfo">
                <h3>General Info</h3>
                <label>Name</label>
                <input type="text" onChange={this.props.onNameChange}></input>
                <label>Email</label>
                <input type="email" onChange={this.props.onEmailChange}></input>
                <label>Phone Number</label>
                <input type="text" onChange={this.props.onPhoneChange}></input>
            </div>
            <div className="educationInfo">
                <h3>Education Info</h3>
                <label>School</label>
                <input type="text" onChange={this.props.onSchoolChange}></input>
                <label>Degree Level</label>
                <input type="text" onChange={this.props.onDegreeChange}></input>
                <label>Graduated?</label>
                <input type="text" onChange={this.props.onGraduatedChange}></input>
            </div>
            <div className="workInfo">
                <h3>Work Info</h3>
                <label>Company</label>
                <input type="text" onChange={this.props.onCompanyChange}></input>
                <label>Title</label>
                <input type="text" onChange={this.props.onTitleChange}></input>
                <label>Date Started</label>
                <input type="date" onChange={this.props.onStartDateChange}></input>
                <label>Date Ended</label>
                <input type="date" onChange={this.props.onEndDateChange}></input>
                <button type="submit" onClick={this.props.onSubmitWorkItem}>Add Work Item</button>
            </div>
      </div>
    );
  } 
}

export default EditInformation;