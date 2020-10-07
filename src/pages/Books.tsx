import * as React from "react";
import { FetchBooks } from "../components/BooksField";
import Container from "@material-ui/core/Container";
import { BooksProvider } from "../context/BooksContext";

export const Books: React.FC = () => (
  <Container>
    <BooksProvider>
      <FetchBooks />
    </BooksProvider>
  </Container>
);
