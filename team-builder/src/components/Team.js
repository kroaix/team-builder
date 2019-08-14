import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
`

const Member = styled.div`
  width: 335px;
  border: 1px solid #A6A6A6;
  border-radius: 10px;
  margin: 30px 10px 10px 10px;
`

const Team = props => {
  return(
    <Container>
      {props.memberList.map(team => {
        return (
          <Member key={team.id}>
            <h3>Member Name</h3>
            <p>{team.name}</p>

            <h3>Member Email</h3>
            <p>{team.email}</p>

            <h3>Member Role</h3>
            <p>{team.role}</p>
          </Member>
        )
      })}
    </Container>
  )
}

export default Team;