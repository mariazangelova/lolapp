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
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation signup($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      username
    }
  }
`;
export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      author
      description
      image
      genres {
        name
      }
      comments {
        comment
      }
    }
  }
`;

export const GET_GENRES = gql`
  query GetGenres {
    genres {
      name
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($userId: ID!, $bookId: ID!, $comment: String!) {
    addComment(userId: $userId, bookId: $bookId, comment: $comment) {
      comment
    }
  }
`;
