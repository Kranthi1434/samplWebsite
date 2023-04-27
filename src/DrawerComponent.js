import { Drawer, ListItemButton, ListItemIcon, ListItemText,List, IconButton,Button,Tab } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
const navbarItems = ['Home','Programs','Admission','Placements','About us','Contact us']

const DrawerComponent = () => {
    const [open,setOpen] = useState(false);
  return (
    <React.Fragment>
        <Drawer open={open} onClose={(e)=>setOpen(false)}>
            <List sx={{color:'#581B25'}}>
                {
                    navbarItems.map((link,index)=>
                <ListItemButton key={index} >
                    <ListItemIcon >
                        <ListItemText >{link}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                    )
                } 
            </List>
            <Tab label={<SearchIcon/>}/>
            <Button
                variant='contained' 
                sx={{backgroundColor:'#581B25'}}
                >Apply Now
            </Button>
        </Drawer>
        <IconButton onClick={()=>setOpen(!open)} sx={{marginLeft:'auto'}}>
            <MenuIcon/>
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComponent