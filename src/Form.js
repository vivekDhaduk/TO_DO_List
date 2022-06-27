import React from "react";
import validator from "react-validation";



function Form({ handleChange, display, handleSubmit }) {
 const required = (value) => {
   if (!value.toString().trim().length) {
     return "require";
   }
 };

 const email = (value) => {
   if (!validator.isEmail(value)) {
     return `${value} is not a valid email.`;
   }
 };
  return (
    <div>
      <div>
        <form onClick={handleSubmit}>
          <lable>Name:</lable>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={display.name}
            validations={[required]}
          />
          <br />
          <lable>Email:</lable>
          <input
            type="Email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={handleChange}
            value={display.email}
            validations={[required, email]}
          />
          <br />
          <lable>Phone no:</lable>
          <input
            type="number"
            name="phoneno"
            pattern="[0-9]{10}"
            minLength={10}
            maxLength={10}
            onChange={handleChange}
            value={display.phoneno}
            validations={[required]}
          />
          <br />
          <lable>Gender:</lable>
          <input
            type="text"
            name="gender"
            onChange={handleChange}
            value={display.gender}
            validations={[required]}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;


