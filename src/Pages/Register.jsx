import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import image from "../images/manakin_logo_white.png";
import { TextField } from "@mui/material";

export const Register = () => {
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
          <Flex gap="20px" direction={{ base: "column", lg: "row" }}>
            <Box width="100%">
              <TextField
                variant="standard"
                label="First Name"
                type="text"
                required
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
          <Flex gap="20px" direction={{ base: "column", lg: "row" }}>
            <Box width="100%">
              <TextField
                variant="standard"
                label="Email"
                type="email"
                required
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

          <Button type="submit" colorScheme="teal" size="lg">
            Register
          </Button>
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
    letter-spacing: 10px;
  }

  h2 {
    text-align: center;
    margin-bottom: 70px;
    letter-spacing: 5px;
    font-size: 30px;
  }

  .registerForm {
    width: 60%;
    margin: auto;
    /* padding: 50px; */
  }

  form {
    width: 100%;
    margin: auto;
    margin-bottom: 20px;
    gap: 5%;
    padding: 20px;
  }

  button {
    height: 50px;
    display: block;
    margin: auto;
    width: 30%;
    font-size: 20px;
    background-color: #081a51;
    color: white;
    border-radius: 25px;
    cursor: pointer;
    border: none;
    margin-top: 5%;
  }
`;
