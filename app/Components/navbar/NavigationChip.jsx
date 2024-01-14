"use client"
import React from 'react'
import Chip from '@mui/material/Chip';
import { useRouter } from 'next/navigation';

import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090');
import DeleteCookieAction from '../../serveractions/DeleteCookieAction';

const NavigationChip = ({title, iconType, redirectTo, iconAvatar}) => {
    const router = useRouter()


    const handleClick = () =>{
        if(iconType === "logout"){
            pb.authStore.clear()
            DeleteCookieAction()
        }
        router.push(`${redirectTo}`)
    }
   
    return (
        <>
            <Chip 

            label={title} 
            variant="outlined" 
            color="default" clickable={true} 
            onClick={handleClick} 
            icon={iconAvatar} 
            size='medium'
            sx={{color: "white", padding: "5px"}}
            />
            
        </>
    )
}

export default NavigationChip
