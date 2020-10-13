import React, { useContext, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { UserContext } from "../../context/UserContext";

import { useStyles } from "./Styles";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  ListItemText,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const NavigationBar: React.FC = (props: any) => {
  const classes = useStyles();
  const user = useContext(UserContext);
  const token = user?.token;
  const setToken = user?.setToken;
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  const activeRoute = (routeName: any) => {
    return props.location.pathname === routeName ? true : false;
  };
  console.log(token);

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              SOME NAME
            </Typography>
            {token ? (
              <Button
                onClick={() => setToken(localStorage.removeItem("token"))}
              >
                LOGOUT
              </Button>
            ) : (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to={"/login"}
              >
                <Button>LOGIN</Button>
              </NavLink>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <Drawer
        classes={{ paper: classes.drawer }}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <MenuList className={classes.menuList}>
            {Routes.map((prop, key) => {
              return (
                <NavLink
                  to={prop.path}
                  style={{ textDecoration: "none", color: "teal" }}
                  key={key}
                >
                  <MenuItem selected={activeRoute(prop.path)}>
                    <ListItemText primary={prop.sidebarName} />
                  </MenuItem>
                </NavLink>
              );
            })}
          </MenuList>
        </div>
      </Drawer>
    </div>
  );
};

export default withRouter(NavigationBar);
