import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../../context/BooksContext";

import { useStyles } from "./Styles";

import { Typography } from "@material-ui/core";

export function BookPage() {
  const classes = useStyles();
  const data = useContext(BooksContext);
  const { title }: any = useParams();
  const book = data?.books.filter((book) => book.title === title)[0];
  return (
    <div>
      <Typography variant="h3">{book?.title}</Typography>
      <Typography variant="h5">By {book?.author}</Typography>
      <img src={book?.image} alt={book?.title} />
      <Typography variant="body1">{book?.description}</Typography>
    </div>
  );
}
