import React, { useState } from "react";
import Form from "./Form";

import "./App.css";

function App() {
  const [members, setMembers] = useState([
    { name: "Ismail", email: "ismail@nawatt.com", role: "founder" },
  ]);

  const addMember = (newMember) => {
    console.log(newMember);
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <Form addMember={addMember} />
      <div className="Team__Cards">
        {members.map((member, index) => {
          return (
            <div key={index} className="Member__Box">
              <p>Name: {member.name}</p>
              <p>Email: {member.email}</p>
              <p>Role: {member.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
