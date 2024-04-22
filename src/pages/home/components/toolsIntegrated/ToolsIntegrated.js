import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const ICONS_LIST = {
  google: "https://www.toddleapp.com/wp-content/uploads/2021/08/Group-4418.png",
  microsoft:
    "https://www.toddleapp.com/wp-content/uploads/2021/08/Group-4420.png",
  clever: "https://www.toddleapp.com/wp-content/uploads/2021/08/Group-4419.png",
  azure: "https://www.toddleapp.com/wp-content/uploads/2021/08/Group-4421.png",
  classlink:
    "https://www.toddleapp.com/wp-content/uploads/2021/08/Group-4422.png",
  wonde: "https://www.toddleapp.com/wp-content/uploads/2021/08/Group-4423.png",
  veracross:
    "https://www.toddleapp.com/wp-content/uploads/2023/08/veracross.png",
  lex: "https://www.toddleapp.com/wp-content/uploads/2023/08/Lex.png",
};

const ToolsIntegrated = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.toddleapp.com/wp-content/uploads/2021/08/Background-6.png")`,
        padding: "6vh 0 0 0",
      }}
    >
      <Stack alignItems="center">
        <Typography fontSize="42px" fontWeight="800">
          Your favourite tools integrated in one place
        </Typography>
        <Stack direction="row" gap={4} m="4.5vh 0">
          <Button
            variant="contained"
            size="large"
            sx={{
              background: "#000",
              width: "275px",
              borderRadius: "8px",
              p: "12px 0",
              textTransform: "none",
              fontSize: "16px",
            }}
          >
            Single Sign on
          </Button>

          {["Video Meetings", "Rostering", "Content"].map((item) => {
            return (
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#000",
                  borderColor: "#000",
                  width: "250px",
                  borderRadius: "8px",
                  p: "12px 0",
                  textTransform: "none",
                  fontSize: "16px",
                }}
              >
                {item}
              </Button>
            );
          })}
        </Stack>
        <Stack direction="row" gap={5} mt="52px" mb="72px">
          {Object.keys(ICONS_LIST).map((item) => {
            return (
              <div key={item}>
                <img src={ICONS_LIST[item]} alt={item} height="100px" />
              </div>
            );
          })}
        </Stack>
        <Typography fontSize="16px" mb="10vh">
          No more remembering passwords! Login to your Toddle accounts securely
          with a single click using the most popular Single sign on options.
        </Typography>
      </Stack>
    </div>
  );
};

export default ToolsIntegrated;
