import React, { Component } from "react";

class EducationInfo extends Component {
  render() {
    return (
      <div>
        <form>
            <h3>Education Info</h3>
            <label>School</label>
            <input type="text"></input>
            <label>Degree Level</label>
            <input type="text"></input>
            <label>Graduated?</label>
            <input type="text"></input>
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EducationInfo;