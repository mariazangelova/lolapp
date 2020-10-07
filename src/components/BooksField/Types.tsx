import { ApolloError } from "@apollo/client";

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  genres: { name: string }[];
  comments: { comment: string }[];
}

export interface Books {
  books: [Book];
  filteredBooks: [Book];
  loading: boolean;
  error: ApolloError | undefined;
  data: Books | undefined;
}

export interface Genre {
  name: string;
}

export interface Genres {
  genres: [Genre];
}

export interface PropsInterface {
  selectGenre: any;
  filters: any;
}
