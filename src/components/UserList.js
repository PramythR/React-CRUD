import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button, Label, List } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

import "./UserList.css";
const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  console.log(`>>>`, users);
  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem className="d-flex" key={user.id}>
              <List>
                <ul>
                  <li>{user.name}</li>
                  <li>{user.phone}</li>
                </ul>
              </List>

              <div className="ml-auto">
                <Link className="btn btn-success" to={`/edit/${user.id}`}>
                  Edit
                </Link>
                <Button
                  onClick={() => removeUser(user.id)}
                  className="ml-2"
                  color="danger"
                >
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No User</h4>
      )}
    </ListGroup>
  );
};

export default UserList;
