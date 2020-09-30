import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "./graphql/queries";
import ErrorIcon from "@material-ui/icons/Error";

interface User {
  username: string;
  password: string;
}

export function User() {
  const { loading, error, data } = useQuery<User>(GET_USERS);
  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        <ErrorIcon fontSize="large" />
        Error! ${error.message}
      </p>
    );
  console.log(data);
  return <div></div>;
}
