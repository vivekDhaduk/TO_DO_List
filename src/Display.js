import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

function Display() {
  const [table, setTable] = useState([]);
  const [display, setDisplay] = useState({
    name: "",
    email: "",
    phoneno: "",
    gender: "",
  });

  const handleChange = (e) => {
    const newInput = (data) => ({
      ...data,
      [e.target.name]: e.target.value,
    });
    setDisplay(newInput);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmptyInput = !Object.values(display).every((res) => res === "");
    if (checkEmptyInput) {
      const newData = (data) => [...data, display];
      setTable(newData);
      const emptyInput = { name: "", email: "", phoneno: "", gender: "" };
      setDisplay(emptyInput);
    }
  };
  return (
    <div>
      <Form
        handleChange={handleChange}
        display={display}
        handleSubmit={handleSubmit}
      />
      <Table table={table} />
    </div>
  );
}

export default Display;
