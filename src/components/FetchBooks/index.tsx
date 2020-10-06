import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS, GET_GENRES } from "../../graphql/queries";

import { useStyles } from "./Styles";
import ErrorIcon from "@material-ui/icons/Error";

import { Book } from "./BookCard";
import { Selector } from "./Selector";
import { Books, Genres } from "./Types";

export function FetchBooks() {
  const [selectedGenre, setGenre] = useState<string>("");
  const classes = useStyles();
  const { loading, error, data } = useQuery<Books>(GET_BOOKS);
  const { data: filters } = useQuery<Genres>(GET_GENRES);
  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        <ErrorIcon fontSize="large" />
        Error! ${error.message}
      </p>
    );
  console.log(selectedGenre);

  return (
    <div className={classes.list}>
      <Selector
        filters={filters?.genres}
        selectGenre={(selectedGenre: string) => setGenre(selectedGenre)}
      />
      {data?.books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          image={book.image}
          genres={book.genres}
        />
      ))}
    </div>
  );
}
