import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Login } from "../../pages/login";
import { Signup } from "../../pages/signup";

export const AuthNavigator = () => {
  return (
    <Route path="/" element={<Login />}>
      <Route index path="/login" element={<Login />} />
      <Route index path="/signup" element={<Signup />} />
    </Route>
  );
};
