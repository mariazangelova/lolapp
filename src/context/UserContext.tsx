import React, { createContext, useState } from "react";

export interface User {
  id: string;
  username: string;
  password: string;
  token: string | null;
  setToken: () => {};
}

export const UserContext = createContext<User | any>(null);

export const UserProvider = (props: any) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const user = {
    id: "",
    username: "",
    password: "",
    token,
    setToken,
  };

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
