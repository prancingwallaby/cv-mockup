import React, { Component } from "react";

const CVdisplay = (props) => {
    const {name, email, phone, school, degree, graduated} = props;

    return (
        <div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
            <div>School: {school}</div>
            <div>Degree: {degree}</div>
            <div>Graduated: {graduated}</div>
        </div>
    )
}

export default CVdisplay;