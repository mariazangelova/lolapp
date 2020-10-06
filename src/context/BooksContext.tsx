import React, { createContext } from "react";
import { useQuery } from "@apollo/client";

import { Books } from "../components/FetchBooks/Types";
import { GET_BOOKS } from "../graphql/queries";

export const BooksContext = createContext<Books | undefined>(undefined);

export const BooksProvider = (props: any) => {
  const { loading, error, data } = useQuery<Books>(GET_BOOKS);
  return (
    <BooksContext.Provider value={data}>{props.children}</BooksContext.Provider>
  );
};
