import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
const AddUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { users, addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name,
      phone,
    };
    addUser(newUser);
    history.push("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };
  const onChangeTele = (e) => {
    setPhone(e.target.value);
  };
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          placeholder="Enter Name"
        ></Input>
        <Label>Phone</Label>
        <Input
          type="number"
          value={phone}
          onChange={onChangeTele}
          placeholder="Enter Tele"
        ></Input>
      </FormGroup>

      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};

export default AddUser;
