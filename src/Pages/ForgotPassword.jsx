import { TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import image from "../images/manakin_logo_white.png";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
  return (
    <DIV>
      <div className="forgotPage">
        <div className="manakinLogo">
          <img src={image} alt="" />
          <h1>MANAKIN</h1>
        </div>

        <div className="registerForm">
          <h2>Forgot Password</h2>

          <form>
            <TextField
              variant="standard"
              label="Email"
              type="email"
              InputLabelProps={{
                style: { fontSize: "16px" },
              }}
              InputProps={{
                style: { paddingTop: "10px", fontSize: "20px" },
              }}
              style={{ marginBottom: "30px", width: "100%" }}
            />
          </form>
          <p>
            <Link to={"/"}>- Go Back</Link>
          </p>
          <Link to={"/resetpassword"}>
            <button>Reset Password</button>
          </Link>
        </div>
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

  .registerForm {
    width: 35%;
    margin: auto;
    padding: 50px;
  }

  h2 {
    text-align: center;
    margin-bottom: 30%;
    font-size: 28px;
  }

  form {
    width: 80%;
    margin: auto;
    padding: 20px;
  }

  form div:nth-child(1) {
    width: 100%;
  }

  form div:nth-child(2) {
    width: 100%;
  }

  p {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
  }

  button {
    height: 50px;
    display: block;
    margin: auto;
    width: 50%;
    font-size: 20px;
    background-color: #081a51;
    color: white;
    border-radius: 25px;
    cursor: pointer;
    border: none;
  }
`;
