import React from 'react'

import { Stack, Typography } from "@mui/material"


const ScrollAdvImageLinks = [
    'https://www.toddleapp.com/wp-content/uploads/2022/05/16.webp',
    'https://www.toddleapp.com/wp-content/uploads/2024/01/cis-2.webp',
    'https://www.toddleapp.com/wp-content/uploads/2023/07/dhirubhai-ambani.webp',
    'https://www.toddleapp.com/wp-content/uploads/2023/07/nist.webp',
    'https://www.toddleapp.com/wp-content/uploads/2022/05/3.webp',
    'https://www.toddleapp.com/wp-content/uploads/2022/05/4.webp',
    'https://www.toddleapp.com/wp-content/uploads/2023/12/logo.webp',
    'https://www.toddleapp.com/wp-content/uploads/2023/12/CIS-New-Logo-1.webp',
    'https://www.toddleapp.com/wp-content/uploads/2022/05/13.webp',
    'https://www.toddleapp.com/wp-content/uploads/2022/05/14.webp',
    'https://www.toddleapp.com/wp-content/uploads/2023/07/Mount-Vernon.webp'
]


const ScrollAdv = () => {
    return (
        <div style={{ background: "#EBFCFF", padding: "8vh 0 10vh 0", marginTop:"135px" }}>
            <Stack justifyContent="center" alignItems="center" gap={6}>
                <Typography fontSize="32px" fontWeight="600">1,500+ leading schools around the world use Toddle</Typography>
                <Stack direction="row">
                    {ScrollAdvImageLinks.map((link) => {
                        return (
                            <Stack key={link} direction="row" sx={{ background: "#fff" }} p="16px" m="0 20px" alignItems="center" borderRadius="8px">
                                <img src={link} alt='img' height="110px" />
                            </Stack>
                        )
                    })}
                </Stack>
            </Stack>
        </div>
    )
}

export default ScrollAdv