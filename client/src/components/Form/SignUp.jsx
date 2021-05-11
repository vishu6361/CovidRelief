import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/index';

export default function SignUp() {
    const [user, setUser] = useState({name: "", email: "", password: ""});
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(createUser(user));
    }

    return (
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <label htmlFor="name">Fullname</label>
            <input type="text" name="name" value={user.name} onChange={(e)=> setUser({ ...user, name: e.target.value })} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={user.email} onChange={(e)=> setUser({ ...user, email: e.target.value })} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={user.password} onChange={(e)=> setUser({ ...user, password: e.target.value })} />
            <button type="submit">SignUp</button>
        </form>
    )
}
