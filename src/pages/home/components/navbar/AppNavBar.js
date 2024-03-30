import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

const AppNavBar = () => {
    return (
        <div style={{borderBottom:"1px solid #f2f2f2"}}>
            <Stack direction={"row"} alignItems={"center"} ml={"20px"}>
                <img src='https://www.toddleapp.com/wp-content/uploads/2023/09/toddle-logo.png' alt='logo' height={"40px"} width={"auto"} />
                <Stack direction={"row"} width={"66%"} justifyContent={"center"} ml={"30px"}>
                    <Typography p={"30px 0"} m={"0 28px"} color={"#000"} fontWeight={"600"}>Products</Typography>
                    <Typography p={"30px 0"} m={"0 28px"} color={"#000"} fontWeight={"600"}>Why Toddle</Typography>
                    <Typography p={"30px 0"} m={"0 28px"} color={"#000"} fontWeight={"600"}>Learn</Typography>
                    <Typography p={"30px 0"} m={"0 28px"} color={"#000"} fontWeight={"600"}>Toddle AI</Typography>
                    <Typography p={"30px 0"} m={"0 28px"} color={"#000"} fontWeight={"600"}>Play Summit 2024</Typography>
                </Stack>
                <Stack direction={"row"} gap={6}>
                    <Button variant='text' sx={{ "color": '#000' }}>Sign In</Button>
                    <Button variant='contained' sx={{ "padding": "15.5px 17px", background: "#f75961", borderRadius: "8px" }}>Book a free Demo</Button>
                </Stack>
            </Stack>
        </div>
    )
}

export default AppNavBar