import React, { useState } from "react";
import Form from "./Form";

import "./App.css";

function App() {
  const [members, setMembers] = useState([
    {
      id: Date.now(),
      name: "Ismail",
      email: "ismail@nawatt.com",
      role: "founder",
    },
  ]);
  const [memberToEdit, setMemberToEdit] = useState("");

  // Add new member
  const addMember = (newMember) => {
    setMembers([...members, newMember]);
  };

  // Edit an existing member
  const editMember = (editableMember) => {
    document.querySelector(".Add__Button").textContent = "Save";
    
    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((button) => {
      button.disabled = true;
    });

    setMemberToEdit(editableMember);
  };

  // Save an edited member
  const saveMember = (editedMember) => {
    let membersWithNewEdit = [...members];
    membersWithNewEdit = members.map((member) => {
      if (editedMember.id === member.id) {
        return editedMember;
      } else return member;
    });
    setMembers(membersWithNewEdit);

    setMemberToEdit("");

    document.querySelector(".Add__Button").textContent = "Add";

    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((button) => {
      button.disabled = false;
    });
  };

  return (
    <div className="App">
      <Form
        addMember={addMember}
        saveMember={saveMember}
        memberToEdit={memberToEdit}
      />
      <div className="Team__Cards">
        {members.map((member, index) => {
          return (
            <div key={index} className="Member__Box">
              <p>Name: {member.name}</p>
              <p>Email: {member.email}</p>
              <p>Role: {member.role}</p>
              <button className="edit" onClick={() => editMember(member)}>
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
