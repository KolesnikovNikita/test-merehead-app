import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as type from '../redux/types';
import { useDispatch } from "react-redux";
import '../App.css';

function UserCard(props) {
  const dispatch = useDispatch()
  
  function handleDeleteUser(id) {
    dispatch({type: type.DELETE_USER, id,})
  }

  return (
    <div className='App'>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography  variant="h5" color="text.secondary" gutterBottom>
        {props.user.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
        {props.user.surname}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.user.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleDeleteUser(props.user.user_id)} size="small">Delete</Button>
      </CardActions>
    </Card>
    </div>
  );
}

export default UserCard;