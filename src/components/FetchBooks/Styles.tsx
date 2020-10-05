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
  })
);
