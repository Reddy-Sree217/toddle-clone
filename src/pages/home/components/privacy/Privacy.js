import { Stack, Typography } from '@mui/material';
import React from 'react'
import EastIcon from '@mui/icons-material/East';


const CARD_IMAGE_URLS = {
    'coppa': 'https://www.toddleapp.com/wp-content/uploads/2022/05/Group-4236.webp',
    'spl': 'https://www.toddleapp.com/wp-content/uploads/2022/05/Group-4235.webp',
    'iso': 'https://www.toddleapp.com/wp-content/uploads/2022/05/Group-4234.webp',
    'ferpa': 'https://www.toddleapp.com/wp-content/uploads/2022/05/Group-4233.webp',
    'stfs': 'https://www.toddleapp.com/wp-content/uploads/2023/09/safer-schools.webp'
}

const LOCK_DEC_URL = "https://www.toddleapp.com/wp-content/uploads/2022/05/Group-2031.webp"

const Privacy = () => {

    return (
        <div style={{ background: "#f5f5fe", minHeight: "440px", paddingTop: "60px" }}>
            <Stack direction="row">
                <Stack width="100%" alignItems="center" justifyContent="center" ml="18%">
                    <Typography fontSize="40px" fontWeight="700">We value and protect your privacy</Typography>
                    <Stack direction="row" mt="28px">
                        {Object.keys(CARD_IMAGE_URLS).map((key) => {
                            return (
                                <Stack key={key} maxWidth="160px" m="0 10px">
                                    <img src={CARD_IMAGE_URLS[key]} alt='img'></img>
                                </Stack>
                            )
                        })}
                    </Stack>
                </Stack>
                <Stack width="220px" mt="-20px">
                    <img src={LOCK_DEC_URL} alt='lock_dec_img'></img>
                </Stack>
            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="center" gap={1.5} mt="40px">
                <Typography fontSize="16px">Visit Privacy Center</Typography>
                <EastIcon />
            </Stack>
        </div>
    )
}
export default Privacy;