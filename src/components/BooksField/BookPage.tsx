import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { BooksContext } from "../../context/BooksContext";
import { ADD_COMMENT, GET_BOOKS } from "../../graphql/queries";

import { useStyles } from "./Styles";

import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Icon,
  SnackbarContent,
} from "@material-ui/core";

export const BookPage = () => {
  const classes = useStyles();
  const dataBooks = useContext(BooksContext);
  const [comment, setComment] = useState("");
  const { title }: any = useParams();
  const [addComment, { error, data }] = useMutation(ADD_COMMENT, {
    onCompleted: (data) => console.log("Data from mutation", data),
    refetchQueries: () => [{ query: GET_BOOKS }],
    onError: (error) => console.error("Error", error),
  });
  const book = dataBooks?.books.filter((book) => book.title === title)[0];
  if (error) return <p>Error!</p>;
  return (
    <Container>
      <div className={classes.pageContent}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.bookImage}>
              <img src={book?.image} alt={book?.title} />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <Typography variant="h3">{book?.title}</Typography>
              <Typography variant="h5">By {book?.author}</Typography>
              <Typography variant="body1">{book?.description}</Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <div>
                <Typography variant="h5">Comments:</Typography>
                {book?.comments?.map((comment) => (
                  <SnackbarContent
                    style={{
                      margin: "20px 20px 20px 20px",
                      background: "whitesmoke",
                      color: "black",
                    }}
                    message={comment.comment}
                  />
                ))}
              </div>
              <form
                noValidate
                autoComplete="off"
                onSubmit={(e) => {
                  e.preventDefault();
                  addComment({
                    variables: {
                      userId: "5f788c997b162a03c7dbc080",
                      bookId: book?.id,
                      comment: comment,
                    },
                  });
                  setComment("");
                }}
              >
                <TextField
                  id="comment"
                  label="Add a comment"
                  placeholder="Write here..."
                  multiline
                  variant="outlined"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button type="submit">Send</Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
