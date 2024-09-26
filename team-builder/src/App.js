import React, { useState, useEffect } from "react";
import TeamMember from "./components/TeamMember";
import TeamMemberForm from "./components/TeamMemberForm";
import axios from './axios';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}


export default function App() {
  
  const [ teamMembers, setTeamMembers ] = useState([]);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ error, setError ] = useState("");
  
  const UpdateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newTeamMember.name) {
      setError("You Must Enter a Name");
    } else if (!newTeamMember.email) {
      setError("You Must Enter an E-mail");
    } else if (!newTeamMember.role) {
      setError("You Must Enter an role");
    }else {
      setError("");
    }

    if (!error) {
      axios.post('fakeapi.com', newTeamMember)
      .then(response => {
        const memberFromDb = response.data;
        setTeamMembers([memberFromDb, ...teamMembers]);
        setFormValues(initialFormValues);
      })
    }
  }

  useEffect(() => {
    axios.get('fakeapi.com')
    .then( response => setTeamMembers(response.data))
  }, [])

  return (
    <div className="container">
      <h1>Team Builder</h1>

      {error && <h2 className="error-text">{error}</h2>}
      <TeamMemberForm 
        update={UpdateForm}
        submit={submitForm}
        values={formValues}
      />

      {
        teamMembers.map( teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember} />
          )
        })
      }
    </div>
  )
}