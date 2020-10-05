import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../../graphql/queries";

import { useStyles } from "./Styles";
import ErrorIcon from "@material-ui/icons/Error";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Book } from "./BookCard";

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
}

interface Books {
  books: [Book];
}

export function FetchBooks() {
  const classes = useStyles();
  const { loading, error, data } = useQuery<Books>(GET_BOOKS);
  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        <ErrorIcon fontSize="large" />
        Error! ${error.message}
      </p>
    );
  return (
    <div className={classes.list}>
      {data?.books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          image={book.image}
        />
      ))}
    </div>
  );
}
