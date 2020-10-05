import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      background: "teal",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuList: {
      color: "teal",
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: 300,
    },
    fullList: {
      width: "auto",
    },
  })
);
