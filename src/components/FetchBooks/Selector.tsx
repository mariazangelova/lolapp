import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles } from "./Styles";
import { PropsInterface, Genre } from "./Types";

export const Selector: React.FC<PropsInterface> = ({
  selectGenre,
  filters,
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-helper-label">Genre</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        onChange={(e) => selectGenre(e.target.value)}
      >
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
