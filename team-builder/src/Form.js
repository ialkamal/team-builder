import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = (props) => {
  const [member, setMember] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    setMember(props.memberToEdit);
  }, [props.memberToEdit]);

  const handleChange = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addMember({ ...member, id: Date.now() });
    setMember({ id: "", name: "", email: "", role: "" });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    props.saveMember(member);
    setMember({ id: "", name: "", email: "", role: "" });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          if (props.memberToEdit) handleEdit(e);
          else handleSubmit(e);
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={member.name || ""}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={member.email || ""}
          onChange={handleChange}
        />
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          name="role"
          placeholder="Enter your role"
          value={member.role || ""}
          onChange={handleChange}
        />
        <button className="Add__Button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
