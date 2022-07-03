import React, { useEffect, useState } from 'react';
import Card from './CardComponents';
import { useSelector, useDispatch} from 'react-redux';
import { getUsers } from '../redux/actions/users';
import '../App.css';
import UserForm from './CreateUserForm';
import Button from '@mui/material/Button';
import EditUserCard from "./EditUserCard";
import Pagination from './Pagination';

const Users = () => {
    const [openUserModal, setOpenUserModal] = useState(false);
    const [editUserModal, setEditUserModal] = useState(null);
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector(state => state.users);

    const [currentPage, setCurrentpage] = useState(1);
    const [usersForPage] = useState(5);

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const lastUserIndex = currentPage * usersForPage;
    const firstUserIndex = lastUserIndex - usersForPage;
    const currentUser = users.slice(firstUserIndex, lastUserIndex);

    function paginator(pageNumber) {
        setCurrentpage(pageNumber)
    }

    return (
        <div className='App'>
        <div className='create-button'>{!openUserModal && <Button variant="contained" onClick={() => setOpenUserModal(true)}>Create User</Button>}</div>
        {editUserModal && <EditUserCard setEditUserModal={setEditUserModal} user={editUserModal} />}   
        {openUserModal && <UserForm setOpenUserModal={setOpenUserModal} />}
        {users.loading && <p>Loading...</p>}
        {users.length === 0 && !loading && <p>No users avaible!</p>}
        {error && !loading && <p>{error}</p>}
        {users.length > 0 && currentUser.map((user) => {
            return <Card key={user._id} user = {user} setEditUserModal={setEditUserModal} />
        })}
        {users.length > 0 && <Pagination paginator={paginator} usersForPage={usersForPage} totalUsers={users.length} />}
        </div>
    )
}

export default Users;