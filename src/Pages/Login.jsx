import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import image from "../images/mankin logo black.svg";
import { Link } from "react-router-dom";
import path from "../images/Path.svg";
import fill from "../images/Fill 1.svg";

export const Login = () => {
  return (
    <DIV>
      <div className="loginForm">
        <div className="manakinImg">
          <img src={image} alt="" />
          <h1>MANAKIN</h1>
        </div>

        <div>
          <form>
            <TextField
              variant="standard"
              type="email"
              placeholder="Email"
              InputLabelProps={{
                style: { color: "#a0a0a0", fontSize: "18px" },
              }}
              sx={{ borderColor: "white" }}
              InputProps={{
                style: {
                  color: "#D8D8D8",

                  fontSize: "16px",
                  fontStyle: "normal",
                  fontHeight: "300",
                  lineHeight: "normal",
                  fontWeight: "100",
                  letterSpacing: "1.5px",
                  paddingBottom: "10px",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={path} alt="" />
                  </InputAdornment>
                ),
              }}
              style={{ marginBottom: "20px" }}
            />

            <TextField
              variant="standard"
              type="password"
              placeholder=" Password"
              InputLabelProps={{
                style: { color: "#a0a0a0", fontSize: "18px" },
              }}
              InputProps={{
                style: {
                  color: "#D8D8D8",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontHeight: "300",
                  lineHeight: "normal",
                  fontWeight: "100",
                  letterSpacing: "1.5px",
                  paddingBottom: "10px",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={fill} alt="" />
                  </InputAdornment>
                ),
              }}
              style={{ marginBottom: "20px" }}
            />

            <p>
              <Link to={"/forgotpassword"}>Forgot password?</Link>
            </p>
            <Link to={"/pintab"}>
              <button>Log in</button>
            </Link>
          </form>

          <p style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <Link to={"/register"}>
              <span style={{ fontWeight: "bold", color: "white" }}>
                Register!
              </span>
            </Link>
          </p>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  background-color: #081a51;
  height: 100vh;
  max-height: 100%;

  .loginForm {
    width: 40%;
    margin: auto;
    /* padding: 100px; */
    padding-top: 10%;
  }

  .manakinImg {
    width: 40%;
    margin: auto;
  }

  .manakinImg img {
    width: 70%;
    display: block;
    margin: auto;
  }

  h1 {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 10px;
    text-align: center;
    margin-bottom: 50px;
  }

  form {
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    row-gap: 5%;
  }

  .MuiInputBase-root::before {
    border-bottom-color: white;
  }
  .MuiInputBase-root::after {
    border-bottom-color: white;
  }


  .MuiTextField-root .MuiInputBase-root:hover:before {
    border-bottom: 2px solid teal;
  }

  p {
    text-align: right;
    margin-bottom: 20px;
    color: #a0a0a0;
    font-size: 17px;
  }

  a {
    text-decoration: none;
    color: #a0a0a0;
  }

  a:hover {
    text-decoration: solid;
  }

  button {
    height: 45px;
    display: block;
    margin: auto;
    width: 100%;
    font-size: 20px;
    background-color: white;
    color: black;
    border-radius: 25px;
    cursor: pointer;
    border: none;
  }

  /* Media Queries for Mobile */
  @media (max-width: 450px) {
    min-height: 100%;

    .loginForm {
      width: 90%;
    }

    .manakinImg {
      width: 75%;
    }

    form {
      width: 90%;
    }
  }

  /* Media Queries for Tablet */
  @media (min-width: 450px) and (max-width: 1024px) {
    min-height: 100%;
    .loginForm {
      width: 70%;
      padding: 40px;
    }

    /* .manakinImg {
      width: 50%;
    } */
  }

  /* Media Queries for Laptop and Desktop */
  @media (min-width: 1025px) {
    .loginForm {
      width: 35%;
      padding: 100px;
    }
  }
`;
