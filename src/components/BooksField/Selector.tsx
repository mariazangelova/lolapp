import React from "react";

import { useStyles } from "./Styles";
import { PropsInterface, Genre } from "./Types";

import {
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
} from "@material-ui/core";

export const Selector: React.FC<PropsInterface> = ({
  selectGenre,
  filters,
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.selector}>
      <InputLabel id="demo-simple-select-helper-label">Genre</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        onChange={(e) => selectGenre(e.target.value)}
      >
        <MenuItem value={"all"}>
          <em>select all</em>
        </MenuItem>
        {filters?.map((genre: Genre, index: number) => (
          <MenuItem key={index} value={genre.name}>
            {genre.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Filter by genre</FormHelperText>
    </FormControl>
  );
};
