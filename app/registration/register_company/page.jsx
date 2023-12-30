"use client"
import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form"
import Grid from '@mui/material/Unstable_Grid2';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import CompanyRegistrationschema from '../../resolver/CompanyRegisterResolver';
import { yupResolver } from "@hookform/resolvers/yup"
import RegisterCompanyAction from '../../serveractions/RegisterCompanyAction';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import { useState } from 'react';

const RegisterCompany = () => {
    const [Loading, setLoading] = useState(false);
    const defaults = {
        VartotojoTipas: "Company",
        ImonėsPavadinimas: "",
        ImonėsKodas: "",
        KontaktinioAsmensVardas: "",
        KontaktinioAsmensPavarde: "",
        TelefonoNumberis: "",
        ElektroninisPastas: "",
        Slaptazodis: "",
        PatvirtintiSlaptazodi: "",
        AgreeOnTerms: false,
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(CompanyRegistrationschema), defaultValues: defaults })

    const Submit = async (values) => {
        setLoading(true)
        await RegisterCompanyAction(values)
        setLoading(false)
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", margin: "10px 0px" }}>
                <Typography variant="h4" color="initial"> Imones Registracija</Typography>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit(Submit)}>
                <Grid container spacing={2}>
                    <Grid sm={12} xs={12}>
                        <TextField fullWidth size='small' {...register("ImonėsPavadinimas")} label="Imonės Pavadinimas" variant="outlined" error={Boolean(errors.ImonėsPavadinimas)} helperText={errors.ImonėsPavadinimas?.message} />
                    </Grid>
                    <Grid sm={12} xs={12}>
                        <TextField fullWidth size='small' {...register("ImonėsKodas")} label="Imonės Kodas" variant="outlined" error={Boolean(errors.ImonėsKodas)} helperText={errors.ImonėsKodas?.message} />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField fullWidth size='small' {...register("KontaktinioAsmensVardas")} label="Kontaktinio Asmens Vardas" variant="outlined" autoComplete="given-name" error={Boolean(errors.KontaktinioAsmensVardas)} helperText={errors.KontaktinioAsmensVardas?.message} />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField fullWidth size='small' {...register("KontaktinioAsmensPavarde")} label="Kontaktinio Asmens Pavarde" variant="outlined" autoComplete="family-name" error={Boolean(errors.KontaktinioAsmensPavarde)} helperText={errors.KontaktinioAsmensPavarde?.message} />
                    </Grid>
                    <Grid sm={12} xs={12}>
                        <TextField fullWidth size='small' {...register("TelefonoNumberis")} label="Telefono Numberis" variant="outlined" error={Boolean(errors.TelefonoNumberis)} helperText={errors.TelefonoNumberis?.message} />
                    </Grid>
                    <Grid sm={12} xs={12}>
                        <TextField fullWidth size='small' {...register("ElektroninisPastas")} label="Elektroninis Pastas" variant="outlined" autoComplete="email" error={Boolean(errors.ElektroninisPastas)} helperText={errors.ElektroninisPastas?.message} />
                    </Grid>
                    <Grid sm={6} xs={12}>
                        <TextField fullWidth type='password' size='small' {...register("Slaptazodis")} label="Slaptazodis" variant="outlined" error={Boolean(errors.Slaptazodis)} helperText={errors.Slaptazodis?.message} />
                    </Grid>
                    <Grid sm={6} xs={12}>
                        <TextField fullWidth type='password' size='small' {...register("PatvirtintiSlaptazodi")} label="Patvirtinti Slaptazodi" variant="outlined" error={Boolean(errors.PatvirtintiSlaptazodi)} helperText={errors.PatvirtintiSlaptazodi?.message} />
                    </Grid>
                    <Grid sm={12} xs={12}>
                        <FormGroup >
                            <FormControlLabel control={<Checkbox   {...register("AgreeOnTerms") }/>}  label="I Agree On Terms And Conditions" />
                        </FormGroup>
                        
                        <FormHelperText sx={{color: "red"}}>{errors.AgreeOnTerms?.message}</FormHelperText>
                    </Grid>
                    <Grid sm={12} xs={12}>
                        <Button disabled={Loading} type='submit' fullWidth variant='contained'>Pateikti</Button>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    )
}

export default RegisterCompany
