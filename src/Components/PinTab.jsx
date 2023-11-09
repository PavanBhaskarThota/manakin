import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import image from "../images/manakin_logo_white.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const PinTab = () => {
  const [timer, setTimer] = useState(30);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let countdown;
    if (isRunning) {
      countdown = setInterval(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          clearInterval(countdown);
          setIsRunning(false);
        }
      }, 1000);
    } else {
      clearInterval(countdown);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [timer, isRunning]);

  const startTimer = () => {
    setTimer(30);
    setIsRunning(true);
  };
  return (
    <DIV>
      <div className="manakinLogo">
        <img src={image} alt="" />
        <h1>MANAKIN</h1>
      </div>

      <div className="verifyPin">
        <h1>Verify Account</h1>
        <p>Enter the 6 - digit code sent to your email</p>

        <HStack margin="auto">
          <PinInput type="alphanumeric" placeholder="" autoFocus={true}>
            <PinInputField
              border="2px solid"
              borderRadius="none"
              width="82.237px"
              height="109.18px"
              fontSize="30px"
            />
            <PinInputField
              border="2px solid"
              borderRadius="none"
              width="82.237px"
              height="109.18px"
              fontSize="30px"
            />
            <PinInputField
              border="2px solid"
              borderRadius="none"
              width="82.237px"
              height="109.18px"
              fontSize="30px"
            />
            <h2>-</h2>

            <PinInputField
              border="2px solid"
              borderRadius="none"
              width="82.237px"
              height="109.18px"
              fontSize="30px"
            />
            <PinInputField
              border="2px solid"
              borderRadius="none"
              width="82.237px"
              height="109.18px"
              fontSize="30px"
            />
            <PinInputField
              border="2px solid"
              borderRadius="none"
              width="82.237px"
              height="109.18px"
              fontSize="30px"
            />
          </PinInput>
        </HStack>
        <p>
          <button
            style={{ color: timer != 0 ?"black":"#3686F0", opacity:0.8}}
            disabled={timer != 0 ? true : false}
            onClick={startTimer}
          >
            Click here
          </button>{" "}
          if you didn't receive code in{" "}
          <span style={{ color: "#3686F0" }}>{timer}</span> seconds
        </p>
        <Link to={`/sidemenu`}>
          <button type="submit" className="confirmPin">
            Confirm
          </button>
        </Link>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  .manakinLogo {
    width: 15%;
    display: flex;
    align-items: center;
  }

  .manakinLogo img {
    width: 70%;
  }

  .manakinLogo h1 {
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

  .chakra-stack {
    margin: auto;
    justify-content: space-around;
  }

  .verifyPin {
    width: 40%;
    margin: auto;
  }

  .verifyPin h1 {
    /* width: 240px; */
    height: 44.092px;
    color: #383838;
    text-align: center;
    /* font-family: Roboto; */
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 20%;
  }

  .verifyPin p {
    margin-bottom: 7%;
    margin-top: 7%;
    color: #383838;
    /* font-family: Roboto; */
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .verifyPin h2 {
    color: #000;
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .confirmPin {
    color: #fff;
    /* font-family: Roboto; */
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.075px;
    border-radius: 25px;
    cursor: pointer;
    border: none;
    border-radius: 29.5px;
    background: #072f78;
    width: 205.086px;
    height: 52.491px;
  }

  /* Media Queries for Mobile */
  @media (max-width: 450px) {
    .verifyPin {
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

    .verifyPin p {
      margin-bottom: 7%;
      margin-top: 7%;
      color: #383838;
      /* font-family: Roboto; */
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    .confirmPin {
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
    .verifyPin {
      width: 80%;
      margin: auto;
      padding: 10px;
      margin-top: 5%;
    }

    .verifyPin h2 {
      margin-bottom: 15%;
    }

    .confirmPin {
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

  /* Media Queries for Laptop and Desktop */
  @media (min-width: 1025px) {
  }
`;
