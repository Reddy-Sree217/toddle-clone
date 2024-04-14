import React from 'react'
import { Stack, Typography } from "@mui/material"

const IMG_URL = "https://www.toddleapp.com/wp-content/uploads/2023/07/Toddle-stats-3.webp";

const ToddleNumbers = () => {
  return (
    <Stack alignItems="center" m="40px 0">
      <Stack width="1000px">
        <Stack alignItems="center">
          <Typography fontSize="32px" fontWeight="600">Toddle by the numbers</Typography>
        </Stack>
        <Stack mt="40px">
          <img src={IMG_URL} alt='img' />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ToddleNumbers;