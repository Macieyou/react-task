import React, {useState, useContext} from 'react';
import {UsersContext} from "../contexts/UsersContext";

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [desc, setDesc] = useState('');
    const [users, setUsers] = useContext(UsersContext);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updatePhone = (e) => {
        setPhone(e.target.value);
    }

    const updateDesc = (e) => {
        setDesc(e.target.value);
    }

    const addUser = e => {
        e.preventDefault();
        setUsers(prevUsers => [...prevUsers, {
            name: name,
            email: email,
            phone: phone,
            desc: desc,
            id: users.length + 1
        }])
    }

    return (
        <form onSubmit={addUser}>
            <input type="text" name="name" value={name} onChange={updateName}/>
            <input type="text" name="email" value={email} onChange={updateEmail}/>
            <input type="text" name="phone" value={phone} onChange={updatePhone}/>
            <input type="text" name="desc" value={desc} onChange={updateDesc}/>
            <button>Submit</button>
        </form>
    );
};

export default AddUser;