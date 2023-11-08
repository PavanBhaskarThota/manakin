import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";
import image from "../images/manakin_logo_white.png";
import { Link } from "react-router-dom";
import arrow from "../images/Arrow.svg";
import email from "../images/Email logo.svg";

export const ForgotPassword = () => {
  return (
    <DIV>
      <div className="forgotPage">
        <div className="manakinLogo">
          <img src={image} alt="" />
          <h1>MANAKIN</h1>
        </div>

        <div className="forgotForm">
          <h2>Forgot Password</h2>

          <form>
            <TextField
              variant="standard"
              type="email"
              placeholder="Enter your email"
              InputLabelProps={{ style: { marginLeft: "10px" } }}
              InputProps={{
                style: {
                  color: "#383838",
                  fontSamily: "Roboto",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineWeight: "normal",
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={email} alt="" />
                  </InputAdornment>
                ),
              }}
              style={{ marginBottom: "30px", width: "100%" }}
            />
            <Link to={"/resetpassword"}>
              <button>Reset Password</button>
            </Link>
          </form>

          <Link to={"/"}>
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

  .forgotForm {
    width: 45%;
    margin: auto;
    padding: 50px;
  }

  h2 {
    color: #383838;
    text-align: center;
    /* font-family: Roboto; */
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 20%;
  }

  form {
    width: 80%;
    margin: auto;
    padding: 20px;
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
    display: block;
    margin: auto;
    margin-top: 7%;
    margin-bottom: 5%;
  }

  /* Media Queries for Mobile */
  @media (max-width: 450px) {
    .forgotForm {
      width: 100%;
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
    .forgotForm {
      width: 70%;
      margin: auto;
      padding: 50px;
    }
  }

  /* Media Queries for Laptop and Desktop */
  @media (min-width: 1025px) {
  }
`;
