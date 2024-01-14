"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Link from "next/link"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import LogInResolverSchema from '../resolver/UserLogInResolver';
import LogInAction from '../serveractions/LogInAction';
import getCookie from '../Components/GetCookie';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';


const pb = new PocketBase('http://127.0.0.1:8090');



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

// TODO remove, this demo shouldn't need to reset the theme.


export default function SignInSide() {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(LogInResolverSchema) })
    const router = useRouter()
    const Submit = async (values) => {
        await LogInAction(values)
        
        try {
            const trying = getCookie('pb_auth')
            const decode = JSON.parse(trying)
            pb.authStore.save(decode.token, decode.model)
            if(await pb.authStore.model.VartotojoTipas === "Doctor" && await pb.authStore.model.FirstLogin === false){
                router.push("/user/doctor/profiler")
                const record = await pb.collection('User').update(decode.model.id, {FirstLogin: true});
                console.log(record)
            }
        }
        catch {
            return 
        }
    }
    return (
        <>
          
            <Grid container component="main" sx={{ height: 'calc(100vh - 64px)' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit(Submit)} sx={{ mt: 1 }}>
                            <TextField

                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                autoComplete="email"
                                {...register("email")}
                                autoFocus
                                error={Boolean(errors.email)} helperText={errors.email?.message}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                {...register("password")}
                                autoComplete="current-password"
                                error={Boolean(errors.password)} helperText={errors.password?.message}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" className='link_undone'>
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/registration/register_transition" className='link_undone'>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}