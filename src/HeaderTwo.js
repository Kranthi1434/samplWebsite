import { AppBar, Box, Button, Grid, Tab, Tabs, Toolbar,Container, useMediaQuery,useTheme, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from './assets/images/CompanyLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import DrawerComponent from './DrawerComponent';
import banner from  './assets/images/Banners.png'

const navbarItems = ['Home','Programs','Admission','Placements','About us','Contact us'];

const HeaderTwo = () => {
    const [value,setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <React.Fragment>
        <AppBar 
            sx={{position:'relative',backgroundColor:'white'}}
            xl={12} sm={12} md={12} lg={12}>
            <Toolbar>
                {
                    isMatch ?(
                        <>
                        <Box sx={{marginLeft:'50px'}}>
                        <img src={logo} alt='companyLogo'/>
                        </Box>
                        <DrawerComponent />
                        </>
                    ):(
                    <Tabs 
                        sx={{marginLeft:'auto',marginRight:'50px'}}
                        value={value}
                        onChange={(e,value)=>setValue(value)} 
                        indicatorColor='secondary'>
                        {navbarItems.map((item,index)=>(
                        <Tab 
                        label={item} 
                        sx={{fontSize:'14px'}}
                        href='/home' 
                        key={index}/>
                        ))
                        }
                        <Tab label={<SearchIcon/>}/>
                        <Button
                        variant='contained'
                        href='/form' 
                        sx={{backgroundColor:'#581B25'}}
                        >Apply Now
                        </Button>
                    </Tabs> )}
            </Toolbar>
        </AppBar>
        <Box  style={{
                    backgroundImage:`url(${banner})`,
                    height:'200px',
                    }}>
           <Typography 
              variant='h4'
              sx={{color:'white',
              marginLeft:'130px',
              position:'relative',
              top:'80px'}}>
              Graduate Studies Admission
           </Typography>
        </Box>
    </React.Fragment>
  )
}

export default HeaderTwo

{/* <Box sx={{marginLeft:'50px'}}>
<img src={logo} alt='companyLogo'/>
</Box> */}