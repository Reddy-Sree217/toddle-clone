import { Typography, Stack } from '@mui/material'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';

const STUFF = {
    "candice": {
        "name": "Candice Combrinck",
        "location": "Dubai International Academy, UAE",
        "img": "https://www.toddleapp.com/wp-content/uploads/2022/05/candice.webp",
        "msg": "The Toddle Team has continuously surprised us with how well they understand teacher needs!",
        "bg_color": "#fc6",
    },
    "anne": {
        "name": "Anne- Marie Evans",
        "location": " International Education Consultant",
        "img": "https://www.toddleapp.com/wp-content/uploads/2023/07/Anne-Marie-Evans.webp",
        "msg": "In my 40+ years of teaching, I haven’t come across a better platform for curriculum design and mapping. ",
        "bg_color": "#a3a3f5",
    },
    "katie": {
        "name": "Katie Stone",
        "location": "Bandung Independent School",
        "img": "https://www.toddleapp.com/wp-content/uploads/2022/05/katie.webp",
        "msg": "Toddle is a game-changer! The platform intuitively reflects IB learning and teaching, and the customer service and support are instantaneous. So thankful to be a Toddle school!",
        "bg_color": "#ff8da6",
    },
    "nadia": {
        "name": "Nadia Al-Hindi",
        "location": "PYP Coordinator, Canadian International School",
        "img": "https://www.toddleapp.com/wp-content/uploads/2023/12/Nadia-Al-Hindi.webp",
        "msg": "We love how Toddle’s evaluation dashboard automatically lists all standards and practices in one place. It has made the documentation process a lot clearer for our teachers. We’re looking forward to showcasing Toddle during our IB evaluation! ",
        "bg_color": "#fc6",
    },
    "jay": {
        "name": "Dr. Jay McTighe ",
        "location": " Co-creator of the UbD®  framework",
        "img": "https://www.toddleapp.com/wp-content/uploads/2023/07/jay.webp",
        "msg": "I have worked closely with the team at Toddle over the last 6 months to develop this platform. It is really gratifying to see the principles of Understanding by Design® translated with such fidelity into this platform.",
        "bg_color": "#ff8da6",
    }
}

const EDUCATORS_LIST = ["jay", "nadia", "candice", "anne", "katie"];

const LEFT_ARROW = "https://www.toddleapp.com/wp-content/uploads/2022/07/SyhikGY0t.webp";
const RIGHT_ARROW = "https://www.toddleapp.com/wp-content/uploads/2022/07/Sk09kMtRY.webp"

const Educators = () => {

    const [activeEducatorIndex, setActiveEducatorIndex] = useState(0);

    const handleLeftClick = () => {
        if (activeEducatorIndex === 0) {
            setActiveEducatorIndex(EDUCATORS_LIST.length - 1);
        }
        else
            setActiveEducatorIndex(prev => prev - 1);
    }

    const handleRightClick = () => {
        if (activeEducatorIndex === (EDUCATORS_LIST.length - 1)) {
            setActiveEducatorIndex(0);
        }
        else
            setActiveEducatorIndex(prev => prev + 1);
    }
    return (
        <Stack sx={{ background: "#FFF9EB" }} p="35px 32px 85px" alignItems="center">
            <Stack direction="row" alignItems="center" gap={0.8}>
                <Typography fontSize="32px" fontWeight="600">Educators</Typography>
                <FavoriteIcon sx={{ color: "red" }} />
                <Typography fontSize="32px" fontWeight="600">Toddle</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" width="75%" sx={{ background: "#fff" }} borderRadius="20px">
                <div onClick={handleLeftClick} style={{cursor:"pointer"}}>
                    <img src={LEFT_ARROW} alt='left_arrow' width="100px" style={{ marginLeft: "-50px" }} />
                </div>
                <Stack gap={7} width="50%" p="50px">
                    <Typography fontSize="20px" fontWeight="500" lineHeight="34px">{STUFF[EDUCATORS_LIST[activeEducatorIndex]]?.msg}</Typography>
                    <Stack>
                        <Typography fontSize="20px" color="#222" fontWeight="600">{STUFF[EDUCATORS_LIST[activeEducatorIndex]]?.name}</Typography>
                        <Typography color="#717171">{STUFF[EDUCATORS_LIST[activeEducatorIndex]]?.location}</Typography>
                    </Stack>
                </Stack>
                <Stack width="480px" borderRadius="20px">
                    <img src={STUFF[EDUCATORS_LIST[activeEducatorIndex]]?.img} alt='educator_img' style={{ background: STUFF[EDUCATORS_LIST[activeEducatorIndex]]?.bg_color, borderRadius: "0 20px 20px 0" }} />
                </Stack>
                <div onClick={handleRightClick} style={{cursor:"pointer"}}>
                    <img src={RIGHT_ARROW} alt='left_arrow' width="100px" style={{ marginRight: "-50px" }} />
                </div>
            </Stack>
        </Stack>
    )
}

export default Educators