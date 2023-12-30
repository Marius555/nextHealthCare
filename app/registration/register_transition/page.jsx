import React from 'react'
import Box from '@mui/material/Box';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BusinessIcon from '@mui/icons-material/Business';
import Card from '../../Components/register_transition_card/RegisterTansitionCard';


const RegisterTransition = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Card link="/registration/register_patient" icon={<LocalHospitalIcon sx={{ height: "40px", width: "40px" }} />} title="Register Patient" />
            <Card link="/registration/register_company" icon={<BusinessIcon sx={{ height: "40px", width: "40px" }} />} title="Register Company" />
            <Card link="/registration/register_doctor" icon={<LocalHospitalIcon sx={{ height: "40px", width: "40px" }} />} title="Register Doctor" />
        </Box>
    )
}

export default RegisterTransition
