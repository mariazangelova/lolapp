import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { EditorBorderRight } from "material-ui/svg-icons";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 545,
      margin: 50,
    },
    list: {
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(0, 3),
    },
    selector: {
      margin: theme.spacing(20),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    pageContent: {
      flexGrow: 1,
      marginTop: "20px",
      color: theme.palette.text.secondary,
    },
    paper: {
      padding: theme.spacing(2),
    },
    bookImage: {
      textAlign: "center",
      padding: theme.spacing(2),
    },
  })
);
