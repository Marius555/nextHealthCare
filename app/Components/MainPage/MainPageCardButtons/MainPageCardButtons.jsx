"use client"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Box from "@mui/material/Box"
import Checkbox from '@mui/material/Checkbox';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Favorite from '@mui/icons-material/Favorite';
import Typography from "@mui/material/Typography"

const MainPageCardButtons = () => {
    const FavoriteHandler = async () => {
        console.log("love it")
    }
    const commendHandler = async () => {
        console.log("love it")
    }
    const dislikeeHandler = async () => {
        console.log("love it")
    }

    return (
        <Box component="div" sx={{display: "flex", flexDirection: "row", alignItems: "center", flexGrow: "5px", width: "100%", gap: "10px"}}>
            <Box>
                <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<Favorite />} />
                <Typography variant='button' color="rgba(0, 0, 0, 0.6)" fontWeight="700">0</Typography>
            </Box>
            <Box>
                <Checkbox icon={<ThumbDownOffAltIcon />} checkedIcon={<ThumbDownAltIcon />} />
                <Typography variant='button' color="rgba(0, 0, 0, 0.6)" fontWeight="700">0</Typography>
            </Box>
            <Box>
                <Checkbox icon={<ChatBubbleOutlineIcon />} checkedIcon={<ChatBubbleIcon />} />
                <Typography variant='button' color="rgba(0, 0, 0, 0.6)" fontWeight="700">0</Typography>
            </Box>

        </Box>
    )
}

export default MainPageCardButtons
