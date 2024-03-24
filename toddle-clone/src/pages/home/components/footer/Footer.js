import React from "react";
import { Divider, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import WellfoundIcon from "../../../../data/img/wellfound-icon";

const useStyles = makeStyles(() => ({
  "font-styles": {
    color: "#686868",
    fontSize: "16px",
  },
  heading: {
    fontWeight: "700 !important",
    color: "#000",
  },
  logo: {
    width: "158px",
    marginTop: "-22px",
  },
  options: {
    cursor: "pointer",
    width: "fit-content",
    "&:hover": {
      color: "#e56466",
    },
  },
}));

const convertIntoValueTypeString = (label) => {
  let value = label.toLowerCase().replace(/\s/g, "_");
  return value;
};

const connectingWithUs = [
  {
    label: "Facebook",
    value: "facebook",
    Icon: <FacebookIcon />,
  },
  {
    label: "Twitter",
    value: "twitter",
    Icon: <XIcon />,
  },
  {
    label: "Linkedin",
    value: "linkedin",
    Icon: <LinkedInIcon />,
  },
  {
    label: "YouTube",
    value: "youtube",
    Icon: <YouTubeIcon />,
  },
  {
    label: "Instagram",
    value: "instagram",
    Icon: <InstagramIcon />,
  },
  {
    label: "Wellfound",
    value: "weelfound",
    Icon: <WellfoundIcon />,
  },
];

const toddlePlatformOptions = [
  "IB PYP",
  "IB MYP",
  "IB DP",
  "IB CP",
  "Australian schools",
  "Cambridge curriculum",
  "British curriculum",
  "Independent schools",
  "Other curriculum frameworks",
];

const toodleEventOptions = [
  "Toddle TIES 2023",
  "Play Summit",
  "Leaders Bootcamp",
  "Toddle TIES 2022",
  "IB DP Thinkathon",
  "Toddle TIES 2021",
  "MYP Planning Symposium",
  "PYPx Pop-Up",
  "Toddle Learning Jam",
  "Toddle TIES 2020",
];

const toddleLearnOptions = ["PYP", "MYP", "DP", "UbD®", "Events"];

const toddleMoreOptions = [
  "Careers",
  "Pricing",
  "Toddle Referral Program",
  "Contact Us",
  "FAQ",
  "Privacy Center",
  "Cookie Policy",
  "Privacy Policy",
  "Terms of Service",
  "Terms of Use",
];

export const Footer = () => {
  const classes = useStyles();
  return (
    <Stack margin="0 10%">
      <Divider color="#DBDBDB"/>
      <Stack
        padding={"5% 2%"}
        direction={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        className={classes["font-styles"]}
      >
        <Stack height={"auto"} justifyContent={"space-between"}>
          <img
            className={classes["logo"]}
            src="https://www.toddleapp.com/wp-content/uploads/2021/03/Screenshot-2021-01-12-at-11.06.42-AM-1.png"
            alt="logo"
          />
          <Typography fontSize={"12px"}>© Teacher Tools Pvt. Ltd.</Typography>
        </Stack>
        <Stack gap="4em">
          <Stack gap="1.5em">
            <Typography className={classes["heading"]}>
              Toddle Platform
            </Typography>
            {(toddlePlatformOptions || []).map((label) => {
              return (
                <Typography
                  className={classes["options"]}
                  key={convertIntoValueTypeString(label)}
                >
                  {label}
                </Typography>
              );
            })}
          </Stack>
          <Stack gap="1.5em">
            <Typography className={classes.heading}>Toddle Events</Typography>
            {(toodleEventOptions || []).map((label) => {
              return (
                <Typography
                  className={classes["options"]}
                  key={convertIntoValueTypeString(label)}
                >
                  {label}
                </Typography>
              );
            })}
          </Stack>
        </Stack>
        <Stack gap="1.5em">
          <Typography className={classes.heading}>Learn</Typography>
          {(toddleLearnOptions || []).map((label) => {
            return (
              <Typography
                className={classes["options"]}
                key={convertIntoValueTypeString(label)}
              >
                {label}
              </Typography>
            );
          })}
        </Stack>
        <Stack gap="1.5em">
          <Typography className={classes.heading}>Connect with us</Typography>
          {(connectingWithUs || []).map(({ label, value, Icon }) => {
            return (
              <Stack direction="row" alignItems="center" gap={1.5} key={value}>
                {Icon}
                <Typography className={classes["options"]}>{label}</Typography>
              </Stack>
            );
          })}
        </Stack>
        <Stack gap="1.5em">
          <Typography className={classes.heading}>More</Typography>
          {(toddleMoreOptions || []).map((label) => {
            return (
              <Typography
                className={classes["options"]}
                key={convertIntoValueTypeString(label)}
              >
                {label}
              </Typography>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};
