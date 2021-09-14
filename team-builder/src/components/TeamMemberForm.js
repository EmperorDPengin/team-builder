import React from 'react';

export default function TeamMemberForm(props) {
    
    const { values, update, submit} = props;

    const onChange = evt => {
        console.log(evt.target);
        const { name, value } = evt.target;
        update(name, value);
        
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name</label>
                <input 
                    type="text"
                    name="name"
                    placeholder="type a Name"
                    onChange={onChange}
                    value={values.name}
                />
                
                <label>Email</label>
                <input 
                    type="email"
                    name="email"
                    placeholder="type an E-mail"
                    onChange={onChange}
                    value={values.email}
                />

                <label>Role</label>
                <select value={values.role} name="role" onChange={onChange}>
                    <option value=''>-- Select a Role --</option>
                    <option value="Rookie">Rookie</option>
                    <option value="TL">Team Lead</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Prodigy">Prodigy</option>
                </select>
                
                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}