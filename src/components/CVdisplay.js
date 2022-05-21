import React, { Component } from "react";

const CVdisplay = (props) => {
    const {name, email, phone} = props;

    return (
        <div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
        </div>
    )
}

export default CVdisplay;