"use client"
import Link from 'next/link'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CardLink = ({link, icon, title}) => {
    return (
        <Link href={link} className='link_undone'>
            <Box sx={{
                width: "25rem", height: "7rem", border: "1px solid black", borderRadius: "8px", margin: "0.5rem",
                display: "flex", gap: "10px", flexDirection: "row", justifyContent: "center", alignItems: "center",
                cursor: "pointer",
                '&:hover': { background: "#f5f5f5" }
            }}>
                {icon}
                <Typography variant='h4'>{title}</Typography>
            </Box>
        </Link>
    )
}

export default CardLink
