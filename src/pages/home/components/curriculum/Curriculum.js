import { Stack, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const DOTS_IMAGE =
  "https://www.toddleapp.com/wp-content/uploads/2022/03/Group-4456.png";
const SPIRAL_IMAGE =
  "https://www.toddleapp.com/wp-content/uploads/2022/03/Ellipses.png";

const CURRICULUM_FRAMEWORKS = {
  ib_pyp: {
    label: "IB PYP",
    color: "#FFAEC0",
    "border-color": "#FECFD8",
  },
  ib_myp: {
    label: "IB MYP",
    color: "#A3A3F5",
    "border-color": "#C5C5FC",
  },
  ib_dp: {
    label: "IB DP",
    color: "#FC6",
    "border-color": "#FC6",
  },
  australian_schools: {
    label: "Australian Schools",
    color: "#75DDC3",
    "border-color": "#A2ECDB",
  },
  cambridge_curriculum: {
    label: "Cambridge Curriculum",
    color: "#6BDEEE",
    "border-color": "#6BDEEE",
  },
  british_curriculum: {
    label: "British Curriculum",
    color: "#FC6",
    "border-color": "#FC6",
  },
};

const Curriculum = () => {
  return (
    <div style={{"padding":"10vh 0"}}>
      <Stack direction="row" justifyContent="space-between">
        <img
          width="200px"
          src={SPIRAL_IMAGE}
          alt="spiral_image"
          style={{ margin: "50px 0 0 -100px" }}
        />
        <Stack alignItems="center">
          <Typography fontSize="32px" fontWeight="800" m="0 0 20px 0">
            Custom solutions for different curriculum frameworks
          </Typography>
          <Typography fontSize="18px">
            Education is no place for a one-size-fits-all approach. We have thus
            built custom solutions
          </Typography>
          <Typography fontSize="18px">
            for different curriculum frameworks to make sure that Toddle truly
            works for you.
          </Typography>
        </Stack>
        <img height="100px" src={DOTS_IMAGE} alt="spiral_image" />
      </Stack>
      <Stack direction="row" p="0 18%" flexWrap="wrap" gap="5vh" mt="-10vh">
        {Object.keys(CURRICULUM_FRAMEWORKS).map((item) => {
          return (
            <Stack
              direction="row"
              width="220px"
              justifyContent="space-between"
              p="36px"
              border={`1px solid ${CURRICULUM_FRAMEWORKS[item]["border-color"]}`}
              borderLeft={`8px solid ${CURRICULUM_FRAMEWORKS[item]["color"]}`}
              borderRadius="8px"
              alignItems="center"
            >
              <Typography>{CURRICULUM_FRAMEWORKS[item]["label"]}</Typography>
              <KeyboardArrowRightIcon />
            </Stack>
          );
        })}
      </Stack>
    </div>
  );
};

export default Curriculum;
