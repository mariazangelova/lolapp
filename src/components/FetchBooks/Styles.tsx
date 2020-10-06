import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 545,
      margin: 50,
    },
    list: {
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(0, 3),
      alignContent: "center",
    },
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120,
      backgroundColor: "white",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);
