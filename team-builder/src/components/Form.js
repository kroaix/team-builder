import React, { useState } from 'react';
import styled from 'styled-components';

const MemberForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  *:focus{
    outline: none;
    background: #F0F8FF;
  } 
`

const Input = styled.input`
  margin-bottom: 10px;
  height: 30px;
  font-size: 1em;
  padding-left: 5px;
  border-radius: 5px;
  border: 1px solid #A6A6A6;
`

const Button = styled.button`
  padding: 7px 0;
  font-size: 1em;
  border: 1px solid #28A745;
  color: #28A745;
  border-radius: 5px;
  :hover {
    color: #FFF;
    background: #28A745;
    transition: ease .5s;
    cursor: pointer;
  }
`

const Form = (props) => {
  const [teamMember, setTeamMember] = useState({name: "", email: "", role: ""});

  const changeHandler = event => {
    setTeamMember({...teamMember, [event.target.name]: event.target.value});
  };

  const submitForm = event => {
    event.preventDefault();
    const newTeamMember = {
      ...teamMember,
      id: Date.now()
    }
    props.addNewMember(newTeamMember);
  };

  return (
    <MemberForm onSubmit={submitForm}>
      <label htmlFor="name" hidden>Member Name</label>
      <Input type="text" name="name" placeholder="Member Name" value={teamMember.name} onChange={changeHandler} />

      <label htmlFor="email" hidden>Member Email</label>
      <Input type="email" name="email" placeholder="Member Email" value={teamMember.email} onChange={changeHandler} />

      <label htmlFor="role" hidden>Member Role</label>
      <Input type="text" name="role" placeholder="Member Role" value={teamMember.role} onChange={changeHandler} />

      <Button type="submit">+ Add Member</Button>
    </MemberForm>
  )
}

export default Form;