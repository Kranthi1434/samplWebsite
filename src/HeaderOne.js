import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const HeaderOne = () => {
  return (
    <React.Fragment>
        <AppBar sx={{backgroundColor:'#581B25',position:'static'}}xl={12} sm={12} md={12} lg={12}>
            <Toolbar>
                <ErrorOutlineIcon sx={{marginLeft:'auto'}}/>
                <Typography variant='body2' sx={{marginRight:'auto',marginLeft:'8px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Id viverra sit feugiat purus sagittis faucibus sed. 
                        Tincidunt quam turpis dictum vitae. 
                </Typography>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default HeaderOne