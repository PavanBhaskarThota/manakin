import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Register } from "../Pages/Register";
import { ThemeProvider, createTheme } from "@mui/material";
import { Login } from "../Pages/Login";
import { ForgotPassword } from "../Pages/ForgotPassword";
import { ResetPassword } from "../Pages/ResetPassword";
import { ChakraProvider } from "@chakra-ui/react";
import { PinTab } from "../Components/PinTab";
import { Sensors } from "../Pages/Sensors";
import { SideMenu } from "../Components/SideMenu";
import { DashBoard } from "../Pages/DashBoard";
import { DashBoardPin } from "../Components/DashBoardPin";
import { ModelPop } from "../Components/ModelPop";
import { DashBoardError } from "../Pages/DashBoardError";

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
        path="/sidemenu/*"
        element={
          <ThemeProvider theme={theme}>
            <SideMenu>
              <Outlet />
            </SideMenu>
          </ThemeProvider>
        }
      >
        <Route path="sensors" element={<Sensors />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Route>

      <Route
        path="/dashpin"
        element={
          <ChakraProvider>
            <DashBoardPin />
          </ChakraProvider>
        }
      />

      <Route
        path="dashboarderror"
        element={
          <ThemeProvider theme={theme}>
            <DashBoardError />
          </ThemeProvider>
        }
      />

      <Route
        path="/model"
        element={
          <ChakraProvider>
            <ModelPop />
          </ChakraProvider>
        }
      />
    </Routes>
  );
};
