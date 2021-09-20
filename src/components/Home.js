import React from "react";
import Heading from "./Heading";
import UserList from "./UserList";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Heading />
      <UserList />
    </>
  );
};

export default Home;
