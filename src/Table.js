import React from "react";

function Table({ table }) {
  return (
    <table style={{ border: "1px solid black" }}>
      <thead style={{ border: "1px solid black" }}>
        <th style={{ border: "1px solid black" }}>No</th>
        <th style={{ border: "1px solid black" }}>Name</th>
        <th style={{ border: "1px solid black" }}>Email</th>
        <th style={{ border: "1px solid black" }}>Phone no</th>
        <th style={{ border: "1px solid black" }}>Gender</th>
      </thead>
      {table.map((data, index) => {
        return (
          <tr key={index}>
            <td style={{ border: "1px solid black" }}>{index + 1}</td>
            <td style={{ border: "1px solid black" }}>{data.name}</td>
            <td style={{ border: "1px solid black" }}>{data.email}</td>
            <td style={{ border: "1px solid black" }}>{data.phoneno}</td>
            <td style={{ border: "1px solid black" }}>{data.gender}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default Table;
