import React from "react";
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
} from "@material-ui/core";

const Login = () => {
  const classes = useStyles();
  let username: any;
  let password: any;
  const [login, { error, data }] = useMutation(LOGIN);
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
        </Card>
      </form>
    </div>
  );
};
export default Login;
