import React, { Component } from "react";

class WorkInfo extends Component {

  render() {
    return (
      <div>
        <form>
            <h3>Work Info</h3>
            <label>Company</label>
            <input type="text"></input>
            <label>Title</label>
            <input type="text"></input>
            <label>Date Started</label>
            <input type="date"></input>
            <label>Date Ended</label>
            <input type="date"></input>
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default WorkInfo;