import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from "react-hook-form"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "dayjs/locale/lt"
import DoctorStepOneResolver from '../../../resolver/doctorProfilerResolvers/stepOneResolver';
import { yupResolver } from "@hookform/resolvers/yup"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import StepOneDoctorAction from '../../../serveractions/DoctorProfilerAction/StepOneDoctorAction';


const StepOne = ({ ActiveStep, setActiveStep }) => {


    const {
        register,
        handleSubmit,
        control,

        formState: { errors },
    } = useForm({ resolver: yupResolver(DoctorStepOneResolver) })

    const incrementStep = (values) => {
        // const dateString = dayjs(values.DateOfBirth).format('YYYY-MM-DD');
        StepOneDoctorAction(values)
        // setActiveStep((step) => step + 1)
    }

    return (
        <>
            <Box component="form" sx={{ marginBottom: "10px" }} noValidate onSubmit={handleSubmit(incrementStep)}>
                <Typography marginTop={3} marginBottom={2} variant='h6'>Details</Typography>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={6}>
                        <TextField
                            size='small'
                            required
                            fullWidth
                            label="Vardas"
                            {...register("Name")}
                            autoComplete="Name"
                            error={Boolean(errors.Name)} helperText={errors.Name?.message}
                        />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField
                            size='small'
                            required
                            fullWidth
                            label="Pavarde"
                            {...register("LastName")}
                            autoComplete="Last Name"
                            error={Boolean(errors.LastName)} helperText={errors.LastName?.message}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            size='small'
                            required
                            fullWidth
                            label="Telefono Numberis"
                            {...register("PhoneNumber")}
                            autoComplete="Phone Number"
                            error={Boolean(errors.PhoneNumber)} helperText={errors.PhoneNumber?.message}
                        />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField
                            size='small'
                            required
                            fullWidth
                            label="Licenzijos Numeris"
                            {...register("LicenseNumber")}
                            autoComplete="License Number"
                            error={Boolean(errors.LicenseNumber)} helperText={errors.LicenseNumber?.message}
                        />
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Controller
                            control={control}
                            name='Nationality'
                            required
                            defaultValue="Lietuvis"
                            render={({ field: { onChange, onBlur, value } }) => (
                                <>
                                    <FormControl sx={{ width: "100%" }} size='small'>
                                        <InputLabel id="demo-select-small-label">Pilietyvė</InputLabel>
                                        <Select
                                            size='small'
                                            labelId="demo-select-small-label"
                                            value={value}
                                            onBlur={onBlur}
                                            label="Pilietyvė"
                                            onChange={onChange}
                                        >
                                            
                                            <MenuItem value="Lietuvis">Lietuvis</MenuItem>
                                            <MenuItem value="Rusas">Rusas</MenuItem>
                                            <MenuItem value="Ukrainietis">Ukrainietis</MenuItem>
                                            <MenuItem value="Kita">Kita</MenuItem>

                                        </Select>
                                    </FormControl>
                                </>
                            )}
                        />
                    </Grid>

                    <Grid xs={12}>
                        <Controller
                            control={control}
                            name='DateOfBirth'
                            required
                            render={({ field: { onChange, onBlur } }) => (
                                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='lt' >
                                    <DatePicker label="Gimimo Data" onChange={onChange}
                                        onBlur={onBlur} sx={{ width: "100%" }} disableFuture required
                                    />
                                </LocalizationProvider>

                            )}
                            error={Boolean(errors.DateOfBirth)} helperText={errors.DateOfBirth?.message}
                        />

                    </Grid>
                    <Grid xs={12}>


                        <Controller
                            control={control}
                            name='Gender'
                            required
                            render={({ field: { onChange, onBlur} }) => (
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Lytis</FormLabel>
                                    <RadioGroup
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        row
                                    >
                                        <FormControlLabel value="Vyras" control={<Radio />} label="Vyras" />
                                        <FormControlLabel value="Moteris" control={<Radio />} label="Moteris" />
                                        <FormControlLabel value="Kita" control={<Radio />} label="Kita" />
                                    </RadioGroup>
                                    <FormHelperText error variant='filled'>{errors.Gender?.message}</FormHelperText>
                                </FormControl>
                                

                            )}
                        />



                    </Grid>
                    <Grid xs={12}>
                        <Button type='submit' variant='contained' fullWidth>Next</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default StepOne
