import { CloseIcon } from "@chakra-ui/icons";
import { Box, IconButton, Modal } from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";

export const ModelPop = () => {
  const [open, setOpen] = useState(false);

  const handleTrigger = () => {
    setOpen(!open);
  };

  return (
    <DIV>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleTrigger();
        }}
      >
        <button type="submit" className="confirmButton">
          Confirm
        </button>
      </form>

      {/* model */}

      <Modal
        isOpen={open}
        onClose={handleTrigger}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop={true}
        centerContent={true}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ml: "40%",
          border: '2px solid red' // This is the border style you provided
        }}
      >
        <Box
          sx={{
            borderRadius: "17px",
            border: "1px solid #979797",
            background: "#FFF",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            width: "550px",
            height: "347px",
            position: "relative",
            padding: "10px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Center vertically
            alignItems: "center", // Center horizontally
          }}
        >
          <h1 className="popup">
            Congratulations you have successfully added your device
          </h1>
          <IconButton
            aria-label="close"
            size="small"
            sx={{
              position: "absolute",
              right: "8px",
              top: "8px",
            }}
            onClick={handleTrigger}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Modal>
    </DIV>
  );
};

const DIV = styled.div`
  width: 100%;
  margin: auto;

  .confirmButton {
    display: block;
    margin-left: auto;
    margin-top: 30%;
    margin-bottom: 5%;
    margin-right: 5%;
    width: 173px;
    height: 45px;
    border-radius: 29.5px;
    background: #072f78;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.075px;
    border: none;
  }

  .popup {
    color: #383838;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
    color: red;
  }

  .css-se73pl{
    margin-left: 50%;
  }
`;
