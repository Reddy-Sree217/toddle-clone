import { Stack, Typography } from "@mui/material";
import React from "react";

const EXP_IMAGE =
  "https://www.toddleapp.com/wp-content/uploads/2023/08/Screens-4.webp";

const ARROW_IMAGE =
  "https://www.toddleapp.com/wp-content/uploads/2021/03/RedPlane3D.png";

const SeamlessExperience = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.toddleapp.com/wp-content/uploads/2022/07/seamless-bg.webp")`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "22%",
        }}
      >
        <img
          src={ARROW_IMAGE}
          alt="arrow"
          width="90px"
          style={{ marginTop: "-50px" }}
        />
      </div>
      <Stack justifyContent="center" alignItems="center">
        <Typography fontSize="48px" fontWeight="800" mb="10px">
          Seamless Experience
        </Typography>
        <Typography fontSize="20px" mb="70px">
          Toddle works great on any computer or device and seamlessly integrates
          with your favourite tools
        </Typography>
        <img src={EXP_IMAGE} alt="exp_image" style={{ maxWidth: "1112px" }} />
      </Stack>
    </div>
  );
};

export default SeamlessExperience;
