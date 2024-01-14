import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import DoctorProfileSideBar from '../../../Components/DoctorProfile/DoctorProfileSideBar'

const page = () => {
  return (
    <>
    <Grid container spacing={0} direction="row">
        <Grid xs={false} sm={3}>
            <DoctorProfileSideBar />
        </Grid>
        <Grid sm={9}></Grid>
    </Grid>
    </>
  )
}

export default page
