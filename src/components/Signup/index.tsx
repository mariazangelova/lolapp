import React from "react";
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
} from "@material-ui/core";

const Signup = () => {
  const classes = useStyles();
  let username: any;
  let password: any;
  const [signup, { error, data }] = useMutation(SIGNUP);
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
                ref={(node) => {
                  username = node;
                }}
              />
              <Input
                fullWidth
                id="password"
                type="password"
                placeholder="Password"
                ref={(node) => {
                  password = node;
                }}
              />
              <Input
                fullWidth
                id="confirm-password"
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
        </Card>
      </form>
    </div>
  );
};
export default Signup;
