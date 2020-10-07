import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BooksContext } from "../../context/BooksContext";

import { useStyles } from "./Styles";

import { Container, Typography, Grid, Paper } from "@material-ui/core";

export const BookPage = () => {
  const classes = useStyles();
  const data = useContext(BooksContext);
  const { title }: any = useParams();
  const book = data?.books.filter((book) => book.title === title)[0];
  return (
    <Container>
      <div className={classes.pageContent}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.bookImage}>
              <img src={book?.image} alt={book?.title} />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography variant="h3">{book?.title}</Typography>
              <Typography variant="h5">By {book?.author}</Typography>
              <Typography variant="body1">{book?.description}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
