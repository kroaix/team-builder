import React, { useState } from 'react';

import Form from './components/Form.js';
import Team from './components/Team.js';
import data from './data.js';

import './App.css';

function App() {
  const [members, setMembers] = useState(data);

  const addNewMember = newMember => {
    setMembers([...members, newMember])
  };

  return (
    <div className="App">
      <h1>Add a Team Member</h1>
      <Form addNewMember={addNewMember} />
      <Team memberList={members} />
    </div>
  );
}

export default App;