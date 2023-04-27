import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const HeaderThree = () => {
  return (
    <React.Fragment>
        <AppBar
            sx={{position:'relative',
            marginTop:'-4px',
            height:'50px',
            backgroundColor:'#F2F4F7'}}>
            <Toolbar>
                <HomeOutlinedIcon color='action' sx={{marginLeft:'100px'}}/>
                <KeyboardArrowRightOutlinedIcon color='action'/>
                <Typography sx={{backgroundColor:'#FFD8DE',color:'#667085',marginLeft:'10px'}}>
                    Admission
                </Typography>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default HeaderThree;