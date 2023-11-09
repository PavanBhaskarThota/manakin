import { Box, Button, Divider, IconButton, Modal, Stack } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

export const Sensors = () => {
  const [open, setOpen] = useState(false);
  const handleTrigger = () => {
    setOpen(!open);
  };
  return (
    <DIV>
      <Stack direction={"row"} sx={{ width: "100%" }} spacing={2}>
        <Box
          sx={{
            borderRadius: "8px",
            background: "#FFF",
            boxShadow: "0px 5px 10px 0px #F1F2FA",
            width: "499px",
          }}
        >
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <h1>My Sensors</h1>
            <Button
              sx={{
                backgroundColor: "#E0ECF2",
                marginRight: "10px",
                borderRadius: "20px",
              }}
            >
              Add+
            </Button>
          </Stack>

          <Divider sx={{ mb: 1 }} />
          <Box
            sx={{
              width: "95%",
              margin: "auto",
              borderRadius: "12px",
              border: "1px solid rgba(0, 0, 0, 0.03)",
              background: "#E3E5F3",
              height: "55px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "18px",
              justifyContent: "space-between",
            }}
          >
            Sensors
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "8px",
            background: "#FFF",
            boxShadow: "0px 5px 10px 0px #F1F2FA",
            flex: 1,
          }}
        >
          <Stack direction={"row"}>
            <h1>Add New Device - Table Top</h1>
          </Stack>
          <Divider sx={{ mb: 1 }} />
          <Box
            sx={{
              width: "95%",
              margin: "auto",
              borderRadius: "12px",
              border: "1px solid rgba(0, 0, 0, 0.03)",
              background: "#E3E5F3",
              height: "55px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "18px",
              justifyContent: "space-between",
            }}
          >
            Connect Device
          </Box>
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
        </Box>
      </Stack>
      <Modal
        open={open}
        onClose={handleTrigger}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ml: "35%",
        }}
        hideBackdrop={true}
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
    margin-top: 50%;
    margin-bottom: 5%;
    margin-right: 5%;
    width: 173px;
    height: 45px;
    border-radius: 29.5px;
    background: #072f78;
    color: #fff;
    /* font-family: Roboto; */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.075px;
    border: none;
  }

  .popup {
    color: #383838;
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: red;
  }
`;
