import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';

const NavigationList = [
    {name:"Profile", icon:<AccountBoxOutlinedIcon />},
    {name: "Dashboard", icon: <DashboardIcon />}
]


const View = () => {
    return (
        <>
            <Grid container  sx={{ height: "100vh", width: "100vw"}}>
                <Grid lg={2} xl={2} md={2} sm={2} sx={{border: "1px solid black"}}>
                    <Box sx={{width: "100%", display: "flex", flexDirection: "column"}}>
                        <Typography variant='h4' sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>Navigration</Typography>
                        {NavigationList.map((item, index) => {
                                return(<Box key={index} sx={{display: 'flex', flexDirection: "row", justifyContent: "space-between",width: "100%",
                                padding: "10px 35px", ":hover": {backgroundColor: "blue"}
                                }}>
                                    <Typography variant='h6'>{item.name}</Typography>
                                    {item.icon}
                                    </Box>)
                            })}
                    </Box>
                </Grid>
                <Grid lg={8} xl={8} md={8} sm={8} sx={{border: "1px solid black"}}></Grid>
                <Grid lg={2} xl={2} md={2} sm={2} sx={{border: "1px solid black"}}></Grid>
            </Grid>
        </>
    )
}

export default View
