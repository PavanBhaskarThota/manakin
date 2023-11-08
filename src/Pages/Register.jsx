import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import image from "../images/manakin_logo_white.png";
import { TextField } from "@mui/material";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  organization: "",
  role: "",
};

export const Register = () => {
  const [user, setUser] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <DIV>
      <div className="manakinLogo">
        <img src={image} alt="" />
        <h1>MANAKIN</h1>
      </div>

      <div className="registerForm">
        <h2>Register</h2>

        <form>
          {/* Name */}
          <Flex gap="5%" direction={{ base: "column", lg: "row" }}>
            <Box width="100%">
              <TextField
                variant="standard"
                label="First Name"
                type="text"
                required
                className="userDetails"
                InputLabelProps={{
                  style: { fontSize: "16px" },
                }}
                InputProps={{
                  style: { paddingTop: "10px", fontSize: "20px" },
                }}
                style={{ marginBottom: "30px", width: "60%" }}
              />
            </Box>
            <Box width="100%">
              <TextField
                variant="standard"
                label="Last Name"
                type="text"
                required
                className="userDetails"
                InputLabelProps={{
                  style: { fontSize: "16px" },
                }}
                InputProps={{
                  style: { paddingTop: "10px", fontSize: "20px" },
                }}
                style={{ marginBottom: "30px", width: "60%" }}
              />
            </Box>
          </Flex>

          {/* Email and Password */}
          <Flex gap="5%" direction={{ base: "column", lg: "row" }}>
            <Box width="100%">
              <TextField
                variant="standard"
                label="Email"
                type="email"
                required
                className="userDetails"
                InputLabelProps={{
                  style: { fontSize: "16px" },
                }}
                InputProps={{
                  style: { paddingTop: "10px", fontSize: "20px" },
                }}
                style={{ marginBottom: "30px", width: "80%" }}
              />
              <TextField
                variant="standard"
                label="Password"
                type="password"
                required
                className="userDetails"
                InputLabelProps={{
                  style: { fontSize: "16px" },
                }}
                InputProps={{
                  style: { paddingTop: "10px", fontSize: "20px" },
                }}
                style={{ marginBottom: "30px", width: "80%" }}
              />
              <TextField
                variant="standard"
                label="Re-enter Password"
                type="text"
                required
                className="userDetails"
                InputLabelProps={{
                  style: { fontSize: "16px" },
                }}
                InputProps={{
                  style: { paddingTop: "10px", fontSize: "20px" },
                }}
                style={{ marginBottom: "30px", width: "80%" }}
              />
            </Box>

            <Box width="100%">
              <TextField
                variant="standard"
                label="Organization"
                type="text"
                required
                className="userDetails"
                InputLabelProps={{
                  style: { fontSize: "16px" },
                }}
                InputProps={{
                  style: { paddingTop: "10px", fontSize: "20px" },
                }}
                style={{ marginBottom: "30px", width: "80%" }}
              />
              <TextField
                variant="standard"
                label="Role"
                type="text"
                required
                className="userDetails"
                InputLabelProps={{
                  style: { fontSize: "16px" },
                }}
                InputProps={{
                  style: { paddingTop: "10px", fontSize: "20px" },
                }}
                style={{ marginBottom: "30px", width: "80%" }}
              />
            </Box>
          </Flex>

          <button type="submit">Register</button>
        </form>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 10px;

  .manakinLogo {
    width: 15%;
    display: flex;
    align-items: center;
  }

  .manakinLogo img {
    width: 70%;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 36px */
    letter-spacing: 6.48px;

    background: linear-gradient(90deg, #0a194e 28.55%, #97a7e1 99.82%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    color: #383838;
    text-align: center;
    /* font-family: Roboto; */
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10%;
  }

  .registerForm {
    width: 60%;
    margin: auto;
    /* padding: 50px; */
  }

  form {
    width: 100%;
    margin: auto;
    gap: 5%;
    padding: 20px;
  }

  .userDetails .MuiInputLabel-asterisk {
    color: red;
  }

  button {
    width: 345.194px;
    height: 52.491px;
    border-radius: 29.5px;
    background: #072f78;
    color: #fff;
    /* font-family: Roboto; */
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.075px;
    display: block;
    margin: auto;
    margin-top: 5%;
  }

  @media (max-width: 450px) {
    width: 100%;
    .registerForm {
      width: 90%;
    }

    .manakinLogo {
      width: 70%;
      flex-direction: column;
      margin: auto;
      margin-bottom: 10%;
    }

    .manakinLogo h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 20px;
    }

    form {
      width: 100%;
    }

    button {
      height: 50px;
      display: block;
      margin: auto;
      width: 100%;
      font-size: 20px;
      background-color: #081a51;
      color: white;
      border-radius: 25px;
      cursor: pointer;
      border: none;
      margin-top: 5%;
    }
  }

  /* Media Queries for Tablet */
  @media (min-width: 450px) and (max-width: 1024px) {
    min-height: 100%;
    .loginForm {
      width: 70%;
      padding: 40px;
    }
  }

  /* Media Queries for Laptop and Desktop */
  @media (min-width: 1025px) {
    .loginForm {
      width: 35%;
      padding: 100px;
    }
  }
`;
