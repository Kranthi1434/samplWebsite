import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { json } from 'react-router-dom';

const FirstComponent = () => {

  return (
    <React.Fragment>
       <Box>
        <Grid container>
            <Grid item lg={6}  sm={12} md={12}>
              <Box sx={{
                    marginLeft:{
                      xs:'20px',
                      sm:'200px',
                      md:'200px',
                      lg:'220px',
                    }}}>
                <Typography 
                    sx={{
                    color:'#581B25',
                    marginTop:'80px',
                    fontSize:'20px',
                    fontStyle:'normal',
                    fontWeight:700,
                    lineHeight:'24px'}}>
                      WELCOME TO IBVE Business School
                  </Typography>
                  <Typography 
                    sx={{
                    marginTop:'20px',
                    fontFamily:'Metropolis',
                    fontSize:'28px',
                    fontStyle:'normal',
                    fontWeight:500,
                    lineHeight:'30px'}}>
                      We’re excited as you are.<br/>
                      IBVE prepares graduate<br/>
                      students for distinguished careers<br/>
                      in research and teaching.
                  </Typography>
              </Box>
            </Grid>
            <Grid item lg={6} sm={12} md={12}>
                <Box sx={{
                  margin:{
                    xs:'50px 20px 0px 20px',
                    sm:'30px 40px 0px 40px',
                    md:'30px 40px 0px 40px',
                    lg:'80px 80px 0px 80px',
                  },
                  fontSize:'16px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                    diam cursus nulla habitasse nisl interdum consectetur viverra . 
                    Erat adipiscing tristique arcu etiam ornare dignissim lorem 
                    ac ultricies velit ultrices. Adipiscing tristique mauris dictum 
                    ipsum amet. Consectetur cursus aenean lobortis cursus 
                    aliquam a. Praesent netus ultrices risus faucibus iaculis sit 
                    molestie. Quis gravida urna in maecenas posuere viverra. 
                    mi ullamcorper odio viverra. Sem bibendum massa aenean 
                    tincidunt non ac. Eget amet, donec tincidunt in neque.
                </Box>
            </Grid>
        </Grid>
       </Box>
    </React.Fragment>
  )
}

export default FirstComponent;