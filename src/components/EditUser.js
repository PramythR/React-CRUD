import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
    phone: "",
  });
  const { users, editUser } = useContext(GlobalContext);
  const history = useHistory();
  const currentUserId = props.match.params.id;
  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    console.log(`scsc`, selectedUser);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);
  const onSubmit = () => {
    editUser(selectedUser);
    alert(`yolo`);
    history.push("/");
  };

  const onChange = (e) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.name]: e.target.value,
      [e.target.phone]: e.target.value,
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          onChange={onChange}
          value={selectedUser.name}
          name="name"
          type="text"
          placeholder="Enter Name"
        ></Input>
        <Label>Name</Label>
        <Input
          value={selectedUser.phone}
          onChange={onChange}
          name="phone"
          type="number"
          placeholder="Enter Name"
        ></Input>
      </FormGroup>

      <Button type="submit">Edit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};

export default EditUser;
