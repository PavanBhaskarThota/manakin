import React from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "../Pages/Register";
import { ThemeProvider, createTheme } from "@mui/material";
import { Login } from "../Pages/Login";
import { ForgotPassword } from "../Pages/ForgotPassword";
import { ResetPassword } from "../Pages/ResetPassword";

const theme = createTheme();

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ThemeProvider theme={theme}>
            <Login />
          </ThemeProvider>
        }
      />
      <Route
        path="/register"
        element={
          <ThemeProvider theme={theme}>
            <Register />
          </ThemeProvider>
        }
      />

      <Route
        path="/forgotpassword"
        element={
          <ThemeProvider theme={theme}>
            <ForgotPassword />
          </ThemeProvider>
        }
      />

      <Route
        path="/resetpassword"
        element={
          <ThemeProvider theme={theme}>
            <ResetPassword />
          </ThemeProvider>
        }
      />
    </Routes>
  );
};
