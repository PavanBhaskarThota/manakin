import { TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import image from "../images/Manakin Logo White.svg";
import { Link } from "react-router-dom";
import arrow from "../images/Arrow.svg";

export const ResetPassword = () => {
  const [password, setPassword] = useState();
  return (
    <DIV>
      <div className="forgotPage">
        <div className="manakinLogo">
          <img src={image} alt="" />
          <h1>MANAKIN</h1>
        </div>

        <div className="resetForm">
          <h2>Reset Password</h2>

          <form>
            <TextField
              variant="standard"
              label="Enter New Password"
              type="password"
              required
              className="userPassword"
              InputLabelProps={{
                style: { fontSize: "16px" },
              }}
              InputProps={{
                style: { paddingTop: "10px", fontSize: "20px" },
              }}
              style={{ marginBottom: "30px", width: "100%" }}
            />
            <TextField
              variant="standard"
              label="Confirm Password"
              type="password"
              required
              className="userPassword"
              InputLabelProps={{
                style: { fontSize: "16px" },
              }}
              InputProps={{
                style: { paddingTop: "10px", fontSize: "20px" },
              }}
              style={{ marginBottom: "30px", width: "100%" }}
            />

            <button type="submit">Confirm</button>
          </form>
          <Link to={"/forgotpassword"}>
            <p>
              <img src={arrow} />
              Go Back
            </p>
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

  .resetForm {
    width: 45%;
    margin: auto;
    padding: 50px;
  }

  .resetForm h2 {
    color: #383838;
    text-align: center;
    /* font-family: Roboto; */
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 25%;
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

  .userPassword .MuiInputLabel-asterisk {
    color: red;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
  }

  p img {
    margin-right: 10px;
  }

  a {
    color: #383838;
    /* font-family: Roboto; */
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }

  button {
    display: block;
    margin: auto;
    width: 340px;
    height: 50px;
    border-radius: 29.5px;
    background: #072f78;
    color: #fff;
    /* font-family: Roboto; */
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.075px;
  }

  /* Media Queries for Mobile */
  @media (max-width: 450px) {
    .resetForm {
      width: 95%;
      margin: auto;
      padding: 0;
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
      margin-bottom: 10%;
    }

    form {
      width: 100%;
      padding: 10px;
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
      margin-bottom: 5%;
    }
  }

  /* Media Queries for Tablet */
  @media (min-width: 450px) and (max-width: 1024px) {
    .resetForm {
      width: 80%;
      margin: auto;
      padding: 10px;
      margin-top: 5%;
    }

    .resetForm h2 {
      margin-bottom: 15%;
    }

    button {
      height: 50px;
      display: block;
      margin: auto;
      width: 80%;
      font-size: 20px;
      background-color: #081a51;
      color: white;
      border-radius: 25px;
      cursor: pointer;
      border: none;
      margin-top: 5%;
      margin-bottom: 5%;
    }
  }

  /* Media Queries for Laptop and Desktop */
  @media (min-width: 1025px) {
  }
`;
