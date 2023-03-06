import React, { useState, useEffect } from "react";
import "./Table.css";

function Table() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setdata(data));
  }, []);

  const DisplayData = () => {
    return (
      <tbody>
        {data &&
          data.map((item) => {
            return (
              <tr id={item.id}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
      </tbody>
    );
  };

  return (
    <div>
      <table id="customers">
        <thead>
          <tr id="1">
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <DisplayData value={props.value} />
      </table>
    </div>
  );
}

export default Table;
