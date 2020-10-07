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
      isEditing: 0,
    },
  ]);
  const [memberToEdit, setMemberToEdit] = useState("");

  const addMember = (newMember) => {
    setMembers([...members, newMember]);
  };

  const editMember = (editableMember) => {
    document.querySelector(".Add__Button").textContent = "Save";
    const editButtons = document.querySelectorAll(".edit");

    editButtons.forEach((button) => {
      button.disabled = true;
    });

    setMemberToEdit(editableMember);

    let membersToEdit = [...members];
    membersToEdit = members.map((member) => {
      if (editableMember.id === member.id) {
        return editableMember;
      } else return member;
    });
    setMembers(membersToEdit);
  };

  const saveMember = (editableMember) => {
    let membersToEdit = [...members];
    membersToEdit = members.map((member) => {
      if (member.isEditing === 1) {
        return editableMember;
      } else return member;
    });
    setMembers(membersToEdit);

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
              <button
                className="edit"
                onClick={() => editMember({ ...member, isEditing: 1 })}
              >
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
