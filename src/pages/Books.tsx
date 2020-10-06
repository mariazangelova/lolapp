import * as React from "react";
import { FetchBooks } from "../components/FetchBooks";
import Container from "@material-ui/core/Container";

export const Books: React.FC = () => (
  <Container>
    <FetchBooks />
  </Container>
);
