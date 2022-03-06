import React, {  useState, useEffect } from "react";
import Table from 'react-bootstrap/Table'
import axios from 'axios';

import "../../App.css";

export default function Leaderboard() {
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState({});


  React.useEffect(() => {
    async function getData() {
      await axios
        .get("/api/user/leaderboard")
        .then((response) => {
          // check if the data is populated
          console.log(response.data);
          setData(response.data);
          // you tell it that you had the result
          setLoadingData(false);
        });
    }
    if (loadingData) {
      // if the result is not ready so you make the axios call
      getData();
    }
  }, []);


  return (
    <div className="App">
      <Table>
        <thead>
          <th>ID</th>
          <th>Email</th>
          <th>Questions Played</th>
          <th>Correct Answer</th>
          <th>V</th>
          <th>Total</th>
        </thead>

        {loadingData ? (
          <p>Loading Please wait...</p>
        ) : (
          data.map(entry => {
            return (

              <tbody>
                <tr>
                  <td>{entry._id}</td>
                  <td>{entry.email}</td>
                  <td>{entry.questionsPlayed}</td>
                  <td>{entry.correctAnswer}</td>
                  <td>{entry.__v}</td>
                  <td>{entry.total}</td>
                </tr>
              </tbody>

            );
          })
        )}

      </Table>
    </div>
  );

}