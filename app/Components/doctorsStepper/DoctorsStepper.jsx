"use client"
import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import StepOne from './doctorSteperComponents/StepOne';
import StepTwo from './doctorSteperComponents/StepTwo';

const StepLabels = [
    { label: "Details" },
    { label: "Education" },
    { label: "Experiance" },
]

const DoctorsStepper = () => {
    const [ActiveStep, setActiveStep] = useState(0);

    const incrementStep = () => {
        if (ActiveStep < StepLabels.length) {
            setActiveStep((currentStep) => currentStep + 1)
        }
    }
    const decrementStep = () => {
        if (ActiveStep > 0) {
            setActiveStep((currentStep) => currentStep - 1)
        }
    }
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "auto", marginTop:"2rem"}}>
                <Box >
                    <Stepper activeStep={ActiveStep}>
                        {StepLabels.map((item, index) => {
                            return (
                                <Step key={index}>
                                    <StepLabel>{item.label}</StepLabel>
                                </Step>
                            )
                        })}
                    </Stepper>

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "25rem" }}>
                        {ActiveStep === 0 && <StepOne ActiveStep={ActiveStep} setActiveStep={setActiveStep} />}
                        {ActiveStep === 1 && <StepTwo ActiveStep={ActiveStep} setActiveStep={setActiveStep} />}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DoctorsStepper
