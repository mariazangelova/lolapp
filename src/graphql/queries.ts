import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      username
      password
    }
  }
`;

export const LOGIN = gql`
  mutation login($username: String, $password: String) {
    login(username: $username, password: $password)
  }
`;

export const SIGNUP = gql`
  mutation signup($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      username
    }
  }
`;
