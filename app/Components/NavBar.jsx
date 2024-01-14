"use server"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import "../mycss.css"
import PocketBase from 'pocketbase'
import NavigationChip from './navbar/NavigationChip';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { cookies } from 'next/headers';
import NavBarOnScroll from './navbar/NavBarOnScroll';
import NavBarDrawer from './navbar/NavBarDrawer';
import MenuIcon from '@mui/icons-material/Menu';

const pb = new PocketBase('http://127.0.0.1:8090');

export default async function NavBar() {
    
    let isTrue = null
    try {
        const pb_cookie = cookies().get("pb_auth")
        pb.authStore.loadFromCookie(`${pb_cookie.name}=${pb_cookie.value}`)
        isTrue = pb.authStore.isValid
  
    } catch (error) {
        isTrue = pb.authStore.isValid
    }



    return (
        <Box sx={{ flexGrow: 1 }} >
            {/* <NavBarOnScroll /> */}
            <AppBar position="static">
                <Toolbar>
                    <NavBarDrawer />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    {isTrue === true ?
                        (
                            <Stack direction="row" spacing={1}>
                                <NavigationChip title="Profile" iconType="profile" redirectTo="#" 
                                iconAvatar={<AccountBoxIcon color='inherit' fontSize='small'/>}/>
                                <NavigationChip title="logout" iconType="logout" redirectTo="/" 
                                iconAvatar={<LogoutIcon color='inherit' fontSize='small'/>}/>
                            </Stack>
                        ) :
                        (
                            <Stack direction="row" spacing={1}>
                                <NavigationChip title="Register" iconType="register" redirectTo="/registration/register_transition"
                                 iconAvatar={<HowToRegIcon color='inherit' fontSize='small'/>}/>
                                <NavigationChip title="Login" iconType="login" redirectTo="/login_user"
                                 iconAvatar={<LoginIcon color='inherit' fontSize='small'/>}/>
                            </Stack>
                        )
                    }
                </Toolbar>
            </AppBar>
        </Box >
    );
}