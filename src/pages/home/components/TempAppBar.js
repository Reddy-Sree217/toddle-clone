import { Stack, Typography } from "@mui/material";
import React from "react"
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
  "container": {
    background: "#5050C5",
    color: "#fff",
    padding: "16px",
    alignItems: "center",
  },
  "text-button": {
    cursor: "pointer",
    textDecoration: "underline",
  },
  "cross-button": {
    cursor: "pointer",
  }
}))

const TempAppBar = () => {

  const classes = useStyles();

  return (
    <Stack className={classes["container"]} direction={"row"}>
      <Stack direction={"row"} gap={1} width={"99%"} justifyContent={"center"}>
        <Typography fontSize={"14px"}>Join experts like Teacher Tom and Anne van Dam at the largest gathering of early years educators!</Typography>
        <Typography fontSize={"14px"} className={classes["text-button"]}>Register for the Play Summit.</Typography>
      </Stack>
      <Typography fontSize={"20px"} className={classes["cross-button"]}>x</Typography>
    </Stack>
  )
}

export default TempAppBar;