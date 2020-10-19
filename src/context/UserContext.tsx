import React, { createContext, useState } from "react";

export interface User {
  id: string;
  username: string;
  password: string;
  token: string | null;
  setUser: () => {};
  setToken: () => {};
}

export const UserContext = createContext<User | any>(null);

export const UserProvider = (props: any) => {
  const [data, setUser] = useState({ id: "", username: "" });
  const [token, setToken] = useState(localStorage.getItem("token"));
  const user = {
    id: data?.id,
    username: data?.username,
    password: "",
    token,
    setUser,
    setToken,
  };
  console.log("USER", user);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
