import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table'
// import "../App.css";

export default function Leaderboard() {
  
    React.useEffect(() => {
        fetch('/api/user/leaderboard')
          .then(results => results.json())
          .then(data => {
           console.log(data)
          });
      }, []);

      const TableData=[
  {
    "_id": "62133b2827e86405c66c14c0",
    "email": "test10@example.com",
    "questionsPlayed": 13,
    "correctAnswer": 6,
    "__v": 0,
    "total": 46.15384615384615
  },
  {
    "_id": "6212817be53d27427a44f9dd",
    "email": "test@example.com",
    "questionsPlayed": 0,
    "correctAnswer": 0,
    "__v": 0,
    "total": 0
  },
  {
    "_id": "621282d399567368c2d1b408",
    "email": "test1@example.com",
    "questionsPlayed": 0,
    "correctAnswer": 0,
    "__v": 0,
    "total": 0
  },
  {
    "_id": "621282f999567368c2d1b40a",
    "email": "test2@example.com",
    "questionsPlayed": 0,
    "correctAnswer": 0,
    "__v": 0,
    "total": 0
  },
  {
    "_id": "6212832d7309f09b08267391",
    "email": "test3@example.com",
    "questionsPlayed": 0,
    "correctAnswer": 0,
    "__v": 0,
    "total": 0
  },
  {
    "_id": "621283648f1c051188e1cb3c",
    "email": "test4@example.com",
    "questionsPlayed": 0,
    "correctAnswer": 0,
    "__v": 0,
    "total": 0
  },
  {
    "_id": "62129054b3289c2130930f17",
    "email": "test6@example.com",
    "questionsPlayed": 0,
    "correctAnswer": 0,
    "__v": 0,
    "total": 0
  },
  {
    "_id": "621321bb9e01186a661b2c99",
    "email": "test8@example.com",
    "questionsPlayed": 0,
    "correctAnswer": 0,
    "__v": 0,
    "total": 0
  },
  {
    "_id": "62133ab6d71c63650386a5e7",
    "email": "test7@example.com",
    "questionsPlayed": 0,
    "correctAnswer": 0,
    "__v": 0,
    "total": 0
  }
];

    const column = Object.keys(TableData[0]);
 // get table heading data
 const ThData =()=>{
    
     return column.map((data)=>{
         return <th key={data}>{data}</th>
     })
 }
// get table row data
const tdData =() =>{
   
     return TableData.map((data)=>{
       return(
           <tr>
                {
                   column.map((v)=>{
                       return <td>{data[v]}</td>
                   })
                }
           </tr>
       )
     })
}

  return (
    <div className="Login">
    {/* <Table striped bordered hover>
  <thead>
    <tr>
  
        <th>Email</th>
 
    </tr>
  </thead>
  <tbody><tr>asas@dd.com</tr></tbody>

</Table> */}

<table className="table">
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
  )
    </div>

  );

}