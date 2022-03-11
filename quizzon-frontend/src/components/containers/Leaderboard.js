import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

export default function Leaderboard() {
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState({});

  React.useEffect(() => {
    async function getData() {
      await axios.get("/api/user/leaderboard").then((response) => {
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
          <th>Email</th>
          <th>Questions Played</th>
          <th>Correct Answer</th>
          <th>Total</th>
        </thead>
    <tbody>

    
        {loadingData ? (
          <p>Loading Please wait...</p>
        ) : (
          data.map((entry) => {
            return (
                <tr>
                  <td>{entry.email}</td>
                  <td>{entry.questionsPlayed}</td>
                  <td>{entry.correctAnswer}</td>
                  <td>{entry.total}</td>
                </tr>
            );
          })
        )}
        </tbody>
      </Table>
    </div>
  );
}
