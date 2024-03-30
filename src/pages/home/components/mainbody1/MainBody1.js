import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    "container": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0px",
        margin: "10vh 0"
    },
}))

const MainBody1 = () => {
    const classes = useStyles();
    return (
        <div className={classes["container"]}>
            <Typography variant='h1'>Your Teaching Partner</Typography>
            <Stack direction={"row"} alignItems={"center"} gap={3}>
                <img src="https://www.toddleapp.com/wp-content/uploads/2023/07/Group-14325.webp" alt='icon' width={"120px"} style={{ marginTop: "24px" }} />
                <Typography variant='h2'>now with AI</Typography>
                <img src='https://www.toddleapp.com/wp-content/uploads/2023/07/Group-14326.webp' alt='img' width={"150px"} />
            </Stack>
            <Stack gap={1} alignItems={"center"}>
                <Typography>At Toddle, we are revolutionising the way teachers work. With Toddle AI,</Typography>
                <Typography>we are taking a giant leap forward in our commitment to provide all teachers with</Typography>
                <Typography>the tools they need to deliver progressive, future-ready education.</Typography>
            </Stack>
            <Stack direction={"row"} gap={5} mt={4}>
                <Button variant='contained' sx={{ padding: "14px 16px", borderRadius: "8px" }}>Learn more about Toddle AI</Button>
                <Button variant='contained' sx={{ padding: "14px 16px", background: "#000", borderRadius: "8px" }}>Book a free Demo</Button>
            </Stack>
        </div>
    )
}

export default MainBody1