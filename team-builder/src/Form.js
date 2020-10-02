import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleChange = (e) => {
    e.preventDefault();
    console.log("Name:", e.target.name);
    console.log("Value:", e.target.value);
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={member.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={member.email}
          onChange={handleChange}
        />
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          placeholder="Enter your role"
          value={member.role}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
