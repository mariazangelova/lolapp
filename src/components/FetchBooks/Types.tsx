export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  genres: { name: string }[];
}

export interface Books {
  books: [Book];
  filteredBooks: [Book];
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
