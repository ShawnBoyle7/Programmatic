import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../../store/session';

const EditUserForm = ({ setShowModal }) => {
    const user = useSelector(state => state.session.user);
    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState(user?.firstName);
    const [lastName, setLastName] = useState(user?.lastName);
    const [username, setUsername] = useState(user?.username);
    const [email, setEmail] = useState(user?.email);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [imgUrl, setImgUrl] = useState(user?.imgUrl || '')
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const data = await dispatch(updateUser(firstName, lastName, username, email, password, imgUrl, user?.id));
        if (data) {
            setErrors(data)
        }
        else {
            setShowModal(false)
        }
        }
    }

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const updateLastName = (e) => {
        setLastName(e.target.value);
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    const updateImgUrl = (e) => {
        setImgUrl(e.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
        <div>
            {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
            ))}
        </div>
        <div>
            <input
            type='integer'
            name='userId'
            value={user?.id}
            hidden
            readOnly
            ></input>
        </div>
        <div>
            <label>First Name</label>
            <input
            type='text'
            name='firstName'
            onChange={updateFirstName}
            value={firstName}
            ></input>
        </div>
        <div>
            <label>Last Name</label>
            <input
            type='text'
            name='lastName'
            onChange={updateLastName}
            value={lastName}
            ></input>
        </div>
        <div>
            <label>User Name</label>
            <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
            ></input>
        </div>
        <div>
            <label>Email</label>
            <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
            ></input>
        </div>
        <div>
            <label>Password</label>
            <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            ></input>
        </div>
        <div>
            <label>Repeat Password</label>
            <input
            type='password'
            name='repeatPassword'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            ></input>
        </div>
        <div>
            <label>Profile Image</label>
            <input
            type='text'
            name='imgUrl'
            onChange={updateImgUrl}
            value={imgUrl}
            required={false}
            ></input>
        </div>
        <button type='submit'>Submit Edit</button>
        </form>
    );
};

export default EditUserForm;