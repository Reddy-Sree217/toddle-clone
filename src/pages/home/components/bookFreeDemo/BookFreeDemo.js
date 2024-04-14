import React from 'react'

import { Button, Stack, Typography } from '@mui/material';

const DEC_URL = "https://www.toddleapp.com/wp-content/uploads/2021/08/Group-4275.png";

const BookFreeDemo = () => {
    return (
        <div>
            <Stack alignItems="center" mt="-10vh">
                <Stack sx={{ background: "#4D37C3" }} borderRadius="24px" color="#fff" direction="row" alignItems="center" p="4.5% 4%" justifyContent="space-between" maxWidth="68%">
                    <Stack maxWidth="50%" gap="2.5vh">
                        <Typography fontSize="24px" fontWeight="600">Interested to know more?</Typography>
                        <Typography fontSize="17px">Book time with us. We would love to learn more about your school’s needs and discuss how best we can partner with you.</Typography>
                    </Stack>
                    <Button variant='contained' sx={{ maxWidth: "fit-content", padding: "18px 28px", background: "#fff", color: "#000", borderRadius: "8px", textTransform:'none' }}>Book a Free Demo</Button>
                </Stack>
            </Stack>
            <img src={DEC_URL} alt='dec-url' width="60px" style={{ margin: "-1.6vh 0 3vh 8.5%", marginLeft: "8.5%", marginTop: "-1.6vh" }} />
        </div>
    )
}

export default BookFreeDemo;