import React from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "../Pages/Register";
import { ThemeProvider, createTheme } from "@mui/material";
import { Login } from "../Pages/Login";
import { ForgotPassword } from "../Pages/ForgotPassword";
import { ResetPassword } from "../Pages/ResetPassword";
import { ChakraProvider } from "@chakra-ui/react";
import { PinTab } from "../Components/PinTab";
import { Sensors } from "../Pages/Sensors";

const theme = createTheme();

export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <h1 style={{ textAlign: "center", marginTop: "20%" }}>
            404 Page not Exist
          </h1>
        }
      />
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
          <ChakraProvider>
            <ThemeProvider theme={theme}>
              <Register />
            </ThemeProvider>
          </ChakraProvider>
        }
      />

      <Route
        path="/forgotpassword"
        element={
          <ChakraProvider>
            <ThemeProvider theme={theme}>
              <ForgotPassword />
            </ThemeProvider>
          </ChakraProvider>
        }
      />

      <Route
        path="/resetpassword"
        element={
          <ChakraProvider>
            <ThemeProvider theme={theme}>
              <ResetPassword />
            </ThemeProvider>
          </ChakraProvider>
        }
      />

      <Route
        path="/pintab"
        element={
          <ChakraProvider>
            <PinTab />
          </ChakraProvider>
        }
      />
      <Route
        path="/sensors"
        element={
          <ThemeProvider theme={theme}>
            <Sensors />
          </ThemeProvider>
        }
      />
    </Routes>
  );
};
