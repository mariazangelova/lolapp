import React, { useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_GENRES } from "../../graphql/queries";

import { useStyles } from "./Styles";
import ErrorIcon from "@material-ui/icons/Error";

import { Book } from "./BookCard";
import { Selector } from "./Selector";
import { Genres } from "./Types";
import { BooksContext } from "../../context/BooksContext";

export function FetchBooks() {
  const data = useContext(BooksContext);
  const [selectedGenre, setGenre] = useState<string>("all");
  const classes = useStyles();
  const { data: filters } = useQuery<Genres>(GET_GENRES);
  // if (loading) return <p>Loading...</p>;
  // if (error)
  //   return (
  //     <p>
  //       <ErrorIcon fontSize="large" />
  //       Error! ${error.message}
  //     </p>
  //   );

  const filteredBooks =
    selectedGenre === "all"
      ? data?.books
      : data?.books.filter((book) => {
          if (
            book.genres.filter((genre) => genre.name === selectedGenre).length >
            0
          ) {
            return true;
          }
          return false;
        });

  return (
    <div className={classes.list}>
      <Selector
        filters={filters?.genres}
        selectGenre={(selectedGenre: string) => setGenre(selectedGenre)}
      />
      {filteredBooks?.map((book) => (
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
