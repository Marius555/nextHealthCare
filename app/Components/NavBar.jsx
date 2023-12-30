"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
import "../mycss.css"
import PocketBase from 'pocketbase'
import { useState, useEffect} from 'react';
import DeleteCookieAction from '../serveractions/DeleteCookieAction';

export default function NavBar() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const [IsLogin, setIsLogin] = useState(false);
    
    useEffect(()=>{
        if(pb.authStore.isValid){
            setIsLogin(true)
        }
        else{
            setIsLogin(false)
        }
    })

    const Logout = async() =>{
        pb.authStore.clear()
        DeleteCookieAction()

    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {IsLogin === true ?
                        (
                        <Box sx = {{ display: "flex", gap: "10px" }}>
                            <Link className='nav_link' href="#">Profile</Link>
                            <Link onClick={Logout} className='nav_link' href="/">Logout</Link>
                        </Box>
                        ):
                        (
                        <Box sx = {{ display: "flex", gap: "10px" }}>
                            <Link className='nav_link' href="/registration/register_transition">Register</Link>
                            <Link className='nav_link' href="/login_user">Login</Link>
                        </Box>
                        )
                    
                    }

            </Toolbar>
        </AppBar>
        </Box >
    );
}