import React, { Component } from "react";

class GeneralInfo extends Component {
  render() {
    return (
      <div>
        <form>
            <h3>General Info</h3>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Phone Number</label>
            <input type="text"></input>
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;