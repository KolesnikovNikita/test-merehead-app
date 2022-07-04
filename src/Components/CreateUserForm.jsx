import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import * as type from "../redux/types";
import Stack from "@mui/material/Stack";
import "../App.css";

function UserForm({ setOpenUserModal }) {
  const dispatch = useDispatch();
  const wrapperStyle = {
    padding: "30px 20px",
    width: 300,
    position: "fixed",
    margin: "auto",
    top: "120px",
    right: 0,
    bottom: 0,
    left: 0,
  };
  const headerStyle = { margin: 0 };
  const inputStyle = { marginBottom: "10px" };

  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    desc: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: type.POST_USERS_CREATE, user: formValues });
    setOpenUserModal(false);
  }

  return (
    <Grid>
      <Paper evelation={20} style={wrapperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption">
            Please fill this form to create a user
          </Typography>
        </Grid>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            required
            style={inputStyle}
            fullWidth
            label="First Name"
            id="name-input"
            name="name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <TextField
            required
            style={inputStyle}
            fullWidth
            label="Surname"
            id="surname-input"
            name="surname"
            type="text"
            value={formValues.surname}
            onChange={handleInputChange}
          />
          <TextareaAutosize
            required
            minRows={4}
            style={{ width: 295, marginBottom: "10px" }}
            label="Describe yourself"
            id="desc-input"
            name="desc"
            type="text"
            value={formValues.desc}
            onChange={handleInputChange}
          />
          <div>
            <Stack spacing={5} direction="row">
              <Button
                onClick={() => setOpenUserModal(false)}
                variant="outlined"
                color="error"
              >
                Cancel
              </Button>
              <Button type="submit" color="primary" variant="contained">
                Add User
              </Button>
            </Stack>
          </div>
        </form>
      </Paper>
    </Grid>
  );
}

export default UserForm;
