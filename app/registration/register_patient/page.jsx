"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from "next/link"
import { useForm } from "react-hook-form"
import PatientRegisterSchema from '../../resolver/RegisterPatientResolver';
import { yupResolver } from '@hookform/resolvers/yup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import RegisterPatientAction from '../../serveractions/RegisterPatientAction';
import { useState } from 'react';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function RegisterPatient() {
    const [Loading, setLoading] = useState(false)

    const defaults = {
        VartotojoTipas: "Patient",
        email: "",
        password: "",
        ConfirmPassword: "",
        AgreeOnTerms: false,

    }

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: defaults, resolver: yupResolver(PatientRegisterSchema) })

    const Submit = async (values) => {
        setLoading(true)
        const registering = await RegisterPatientAction(values) 
        console.log(registering)
        setLoading(false)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit(Submit)} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>

                        <Grid  xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Email Address"
                                autoComplete="email"
                                {...register("email")}
                                error={Boolean(errors.email)} helperText={errors.email?.message}
                            />
                        </Grid>
                        <Grid  xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                {...register("password")}
                                autoComplete="new-password"
                                error={Boolean(errors.password)} helperText={errors.password?.message}
                            />
                        </Grid>
                        <Grid  xs={12}>
                            <TextField
                                required
                                fullWidth
                                label="Confirm Password"
                                type="password"
                                {...register("ConfirmPassword")}
                                autoComplete="new-password"
                                error={Boolean(errors.ConfirmPassword)} helperText={errors.ConfirmPassword?.message}
                            />
                        </Grid>
                        <Grid  sm={12} xs={12}>
                            <FormGroup >
                                <FormControlLabel control={<Checkbox {...register("AgreeOnTerms")} />} label="I Agree On Terms And Conditions" />
                            </FormGroup>

                            <FormHelperText sx={{ color: "red" }}>{errors.AgreeOnTerms?.message}</FormHelperText>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={Loading}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid >
                            <Link href="login_user" className='link_undone'>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    );
}