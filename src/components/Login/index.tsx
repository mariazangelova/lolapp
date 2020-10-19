import React, { useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../graphql/queries";
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

const Login = () => {
  const classes = useStyles();
  let username: any;
  let password: any;
  const [login, { error, data }] = useMutation(LOGIN);
  const token = data?.login;
  const user = useContext(UserContext);
  const setToken = user?.setToken;
  const setUser = user?.setUser;
  const history = useHistory();
  useEffect(() => {
    if (token) {
      setToken(token);
      setUser({ id: data.login.user.id, username: data.login.user.username });
      localStorage.setItem("token", token);
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
          login({
            variables: { username: username.value, password: username.value },
          });
          username.value = "";
          password.value = "";
        }}
      >
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Login" />
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
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              size="large"
              type="submit"
              className={classes.loginBtn}
            >
              Login
            </Button>
          </CardActions>
          <Typography style={{ padding: "20px", textAlign: "center" }}>
            Not a member?{" "}
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "teal" }}
            >
              Click here to signup.
            </Link>
          </Typography>
        </Card>
      </form>
    </div>
  );
};
export default Login;
