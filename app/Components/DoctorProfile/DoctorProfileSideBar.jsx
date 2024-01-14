import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';

const DoctorProfileSideBar = () => {
    return (
        <>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label='main side-bar'>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Account Details" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <SchoolIcon />
                            </ListItemIcon>
                            <ListItemText primary="Education" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <WorkHistoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Experiance" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <LanguageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Languages" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
        </>
    )
}

export default DoctorProfileSideBar
