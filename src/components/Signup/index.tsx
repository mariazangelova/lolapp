import React, { useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../../graphql/queries";
import { useStyles } from "./Styles";

import {
  Input,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Typography,
} from "@material-ui/core";
import { UserContext } from "../../context/UserContext";

export const Signup = () => {
  const classes = useStyles();
  let username: any;
  let password: any;
  const [signup, { error, data }] = useMutation(SIGNUP);

  const token = data?.login;
  const user = useContext(UserContext);
  const setToken = user?.setToken;
  const history = useHistory();
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      setToken(token);
      history.push("/");
    }
  }, [token, history]);
  return (
    <div>
      {error ? <p>Oh no! {error.message}</p> : null}
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          signup({
            variables: { username: username.value, password: username.value },
          });
          username.value = "";
          password.value = "";
        }}
      >
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Signup" />
          <CardContent>
            <div>
              <Input
                fullWidth
                id="username"
                type="username"
                placeholder="Username"
                inputRef={(node) => {
                  username = node;
                }}
              />
              <Input
                fullWidth
                id="password"
                type="password"
                placeholder="Password"
                inputRef={(node) => {
                  password = node;
                }}
              />
              <Input
                fullWidth
                id="confirmpassword"
                type="password"
                placeholder="Repeat password"
              />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              type="submit"
              className={classes.loginBtn}
            >
              Signup
            </Button>
          </CardActions>
          <Typography style={{ padding: "20px", textAlign: "center" }}>
            Already a member?
            <Link to="/login" style={{ textDecoration: "none", color: "teal" }}>
              Click here to login.
            </Link>
          </Typography>
        </Card>
      </form>
    </div>
  );
};
