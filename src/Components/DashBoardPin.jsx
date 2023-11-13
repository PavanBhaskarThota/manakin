import { HStack, Input, PinInput, PinInputField } from "@chakra-ui/react";

import styled from "styled-components";

export const DashBoardPin = () => {
  return (
    <DIV>
      <div className="verifyPin">
        <p>
          Enter the eight digit code provided on the bottom of the sensor.{" "}
          <span style={{ color: "red" }}>*</span>
        </p>

        <HStack justifyContent="space-around" width="50%" height='50px'>
          <PinInput type="alphanumeric" placeholder="" autoFocus={true}>
            <PinInputField
              border="2px solid"
              borderRadius="none"
              width="35px"
              height="45px"
              fontSize="30px"
            />
            <PinInputField
              border="2px solid"
              borderRadius="none"
              width="35px"
              height="45px"
              fontSize="30px"
            />
            <PinInputField
              border="2px solid"
              borderRadius="none"
              width="35px"
              height="45px"
              fontSize="30px"
            />
            <PinInputField
              border="2px solid"
              borderRadius="none"
              width="35px"
              height="45px"
              fontSize="30px"
            />
            <h2>-</h2>

            <PinInputField
              border="2px solid"
              borderRadius="none"
              width="35px"
              height="45px"
              fontSize="30px"
            />
            <PinInputField
              border="2px solid"
              borderRadius="none"
              width="35px"
              height="45px"
              fontSize="30px"
            />
            <PinInputField
              border="2px solid"
              borderRadius="none"
              width="35px"
              height="45px"
              fontSize="30px"
            />
            <PinInputField
              border="2px solid"
              borderRadius="none"
              width="35px"
              height="45px"
              fontSize="30px"
            />
          </PinInput>
        </HStack>

        <Input
          placeholder="Enter label for the device *"
          border="none"
          borderBottom="1px solid"
          padding="20px"
          paddingLeft="10px"
          width="40%"
          mt='7%'
        />
      </div>
    </DIV>
  );
};

const DIV = styled.div`

  .verifyPin {
    width: 100%;
    margin: 20px;
    margin-top: 50px;
  }

  .verifyPin p {
    color: #383838;
    font-size: 14px;
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

  /* Media Queries for Mobile */
  @media (max-width: 450px) {
    .verifyPin {
      width: 95%;
      margin: auto;
      padding: 0;
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
  }

  /* Media Queries for Laptop and Desktop */
  @media (min-width: 1025px) {
  }
`;
