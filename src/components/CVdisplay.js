import React, { Component } from "react";

const ShowWorkItems = (props) => {
    const {workItems, deleteWorkItem} = props;

    return (
        <div>
           {workItems.map((item) => {
               return (
                   <div className={item.company}>
                        <div>{item.company}</div>
                        <div>{item.title}</div>
                        <p>From {item.startDate} Until {item.endDate}</p>
                   </div>
               );
           })} 
        </div>
    );
}

const CVdisplay = (props) => {
    const {name, email, phone, school, degree, graduated, workItems, deleteWorkItem} = props;

    return (
        <div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
            <div>School: {school}</div>
            <div>Degree: {degree}</div>
            <div>Graduated: {graduated}</div>
            <ShowWorkItems workItems={workItems} deleteWorkItem={deleteWorkItem}></ShowWorkItems>
        </div>
    )
}

export default CVdisplay;