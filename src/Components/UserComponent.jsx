import React, { useEffect, useState } from 'react';
import Card from './CardComponents';
import { useSelector, useDispatch} from 'react-redux';
import { getUsers } from '../redux/actions/users';
import '../App.css';
import UserForm from './CreateUserForm';

const Users = () => {
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    return (
        <div className='App'>
        <UserForm setOpenModal={setOpenModal} />
        {users.loading && <p>Loading...</p>}
        {users.length === 0 && !loading && <p>No users avaible!</p>}
        {error && !loading && <p>{error}</p>}
        {users.length > 0 && users.map((user) => {
            return <Card key={user._id} user = {user} />
        })}
        </div>
    )
}

export default Users;