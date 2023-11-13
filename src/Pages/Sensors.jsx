import { Box, Button, Divider, IconButton, Modal, Stack } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import pipe from "../images/Pipe.svg";
import next from "../images/Vector_next.svg";
import prev from "../images/Vector_back.svg";

const mysensors = [
  ["sensor 1", "Room 401"],
  ["sensor 2", "Room 402"],
  ["sensor 3", "Room 403"],
  ["sensor 4", "Room 405"],
  ["sensor 5", "Room 406"],
  ["sensor 6", "Room 407"],
  ["sensor 7", "Room 408"],
];

export const Sensors = () => {
  const [sensor, setSensor] = useState(null);

  const handleSensor = (index) => {
    setSensor(index === sensor ? null : index);
  };

  return (
    <DIV>
      <Stack direction={"row"} sx={{ width: "100%" }} spacing={2} rowGap={2}>
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
            sx={{ justifyContent: "space-between", alignItems: "center", paddingLeft:'10px'}}
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
              height: "65px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              paddingLeft: "18px",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            Sensors{" "}
            <p style={{ marginRight: "20px", fontSize: "20px" }}>lable</p>
          </Box>
          {mysensors.map((item, index) => (
            <Box
              onClick={() => handleSensor(index)}
              key={index}
              sx={{
                width: "95%",
                margin: "auto",
                borderRadius: "12px",
                border: "1px solid rgba(0, 0, 0, 0.03)",
                background: sensor === index ? "#072f78" : "#FAFAFA",
                height: "55px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                paddingLeft: "18px",
                justifyContent: "space-between",
                marginBottom: "10px",
                color: sensor === index ? "#FAFAFA" : "black",
              }}
            >
              {item[0]}
              <p style={{ marginRight: "20px", fontSize: "14px" }}>{item[1]}</p>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            borderRadius: "8px",
            background: "#FFF",
            boxShadow: "0px 5px 10px 0px #F1F2FA",
            flex: 1,
          }}
        >
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems="center"
            marginRight="10px"
          >
            <Box sx={{ display: "flex" }}>
              <Box
                sx={{
                  backgroundColor: "#51CBFF",
                  marginTop: "auto",
                  marginBottom: "auto",
                  display: "flex",
                  justifyContent: "center",
                  height: "34px",
                  width: "34px",
                  marginLeft: "10px",
                  marginRight: "10px",
                  borderRadius: "50%",
                }}
              >
                <img
                  src={pipe}
                  alt=""
                  style={{
                    display: "block",
                    margin: "auto",
                  }}
                />
              </Box>
              <h1>Sensor 4</h1>
            </Box>

            <p>Room 406</p>
          </Stack>
          <Divider sx={{ mb: 1 }} />

          <Box
            sx={{
              display: "flex",
              gap: "3%",
              width: "95%",
              margin: "auto",
              p: "20px",
            }}
          >
            <Box
              sx={{
                width: "95%",
                margin: "auto",
                borderRadius: "12px",
                border: "1px solid rgba(0, 0, 0, 0.03)",
                background: "#F4FCFF",

                padding: "3%",
              }}
            >
              Pathogen History
              <Box
                sx={{
                  width: "100%",
                  margin: "auto",
                  borderRadius: "12px",
                  border: "1px solid rgba(0, 0, 0, 0.03)",
                  background: "#E3E5F3",
                  height: "55px",
                  display: "flex",
                  paddingLeft: "18px",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <p>Timestamp</p>
                <p>Pathogen Results</p>
              </Box>
              {/* tables */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  margin: "auto",
                  padding: "20px",
                  // border: "1px solid",
                  marginTop: "20px",
                  background: "#FAFAFA",
                }}
              >
                <Box width="60%" textAlign="center">
                  <p>09/21/23 10:30 AM</p>
                </Box>

                <Box width="100%">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "100%",
                      height: "125px",
                      textAlign: "left",
                      letterSpacing: "2.52px",
                    }}
                  >
                    <tbody>
                      <tr style={{ border: "1px solid #000" }}>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Infuenza
                        </td>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Negative
                        </td>
                      </tr>
                      <tr style={{ border: "1px solid #000" }}>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Salmonella
                        </td>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Negative
                        </td>
                      </tr>
                      <tr
                        style={{ border: "1px solid #000", fontWeight: "bold" }}
                      >
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          E.Coil
                        </td>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Positive
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  margin: "auto",
                  padding: "20px",
                  // border: "1px solid",
                  marginTop: "20px",
                  background: "#FAFAFA",
                }}
              >
                <Box width="60%" textAlign="center">
                  <p>09/21/23 10:30 AM</p>
                </Box>

                <Box width="100%">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "100%",
                      height: "125px",
                      textAlign: "left",
                      letterSpacing: "2.52px",
                    }}
                  >
                    <tbody>
                      <tr style={{ border: "1px solid #000" }}>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Infuenza
                        </td>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Negative
                        </td>
                      </tr>
                      <tr
                        style={{ border: "1px solid #000", fontWeight: "bold" }}
                      >
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Salmonella
                        </td>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Negative
                        </td>
                      </tr>
                      <tr style={{ border: "1px solid #000" }}>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          E.Coil
                        </td>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Positive
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  margin: "auto",
                  padding: "20px",
                  // border: "1px solid",
                  marginTop: "20px",
                  background: "#FAFAFA",
                }}
              >
                <Box width="60%" textAlign="center">
                  <p>09/21/23 10:30 AM</p>
                </Box>

                <Box width="100%">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "100%",
                      height: "125px",
                      textAlign: "left",
                      letterSpacing: "2.52px",
                    }}
                  >
                    <tbody>
                      <tr
                        style={{ border: "1px solid #000", fontWeight: "bold" }}
                      >
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Infuenza
                        </td>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Negative
                        </td>
                      </tr>
                      <tr
                        style={{ border: "1px solid #000", fontWeight: "bold" }}
                      >
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Salmonella
                        </td>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Negative
                        </td>
                      </tr>
                      <tr style={{ border: "1px solid #000" }}>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          E.Coil
                        </td>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Positive
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  margin: "auto",
                  padding: "20px",
                  // border: "1px solid",
                  marginTop: "20px",
                  background: "#FAFAFA",
                }}
              >
                <Box width="60%" textAlign="center">
                  <p>09/21/23 10:30 AM</p>
                </Box>

                <Box width="100%">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      width: "100%",
                      height: "125px",
                      textAlign: "left",
                      letterSpacing: "2.52px",
                    }}
                  >
                    <tbody>
                      <tr style={{ border: "1px solid #000" }}>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Infuenza
                        </td>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Negative
                        </td>
                      </tr>
                      <tr
                        style={{ border: "1px solid #000", fontWeight: "bold" }}
                      >
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Salmonella
                        </td>
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          Negative
                        </td>
                      </tr>
                      <tr
                        style={{ border: "1px solid #000", fontWeight: "bold" }}
                      >
                        <td
                          style={{
                            borderRight: "1px solid #000",
                            padding: "8px",
                          }}
                        >
                          E.Coil
                        </td>
                        <td
                          style={{
                            borderRight: "1px solid #0b0505",
                            padding: "8px",
                          }}
                        >
                          Positive
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
              </Box>
              
            </Box>

            <Box
              sx={{
                width: "30%",
                borderRadius: "12px",
                border: "1px solid rgba(0, 0, 0, 0.03)",
                background: "#F4FCFF",
                height: "150px",
                justifyContent: "space-between",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <h2 style={{ fontSize: "16px", margin: "0" }}>
                Cartridge Lifecycle
              </h2>
              <h1 style={{ fontSize: "48px", margin: "0" }}>125</h1>
              <h5 style={{ fontSize: "14px", margin: "0" }}>tests left</h5>
            </Box>
          </Box>

          <Box display="flex" justifyContent="center" marginTop='2%' marginBottom='3%' gap={0.5} width="70%">
                <button style={{border:'none', background:'none'}}><img src={prev} alt="" /></button>
                <button style={{border:'none', background:'none'}}><img src={next} alt="" /></button>
              </Box>
        </Box>
      </Stack>
    </DIV>
  );
};

const DIV = styled.div`
  width: 100%;
  margin: auto;
`;
