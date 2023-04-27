import React from 'react'
import librarryImage from '../assets/images/old-university-library-faculty-geography-history 1.png'
import { Box, Grid, Typography } from '@mui/material'
import imageTwo from '../assets/images/Frame 340.png'


const ThirdComponent = () => {
  return (
    <React.Fragment>
        <Grid>
            <Grid item sx={{
                margin:{
                    xs:'30px',
                    sm:'30px',
                    md:'60px',
                    lg:'120px',
                    xl:'120px',
                }
                }}>
                 <img src={librarryImage} width='100%'/>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
                <Box sx={{
                      marginLeft:{
                        xs:'10px',
                        sm:'20px',
                        md:'20px',
                        lg:'120px',
                      },
                      marginRight:{
                        xs:'10px',
                        sm:'10px',
                        md:'10px',
                        lg:'0px',
                      }
                      }}>
                   <img src={imageTwo} width='100%'/>
                </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
               <Box sx={{
                margin:{
                    xs:'10px',
                    sm:'10px',
                    md:'10px',
                    lg:'25px 120px 0px 50px',
                }
                }}>
               <Typography variant='h6'>
                   Entry Requirement
                </Typography><br/>
                <Typography 
                 sx={{
                    fontSize:'16px',
                    lineHeight:'20px',
                    fontWeight:300,
                    fontFamily:'Metropolis',
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    diam cursus nulla habitasse nisl interdum consectetur 
                    Erat adipiscing tristique arcu etiam ornare dignissim 
                    ac ultricies velit ultrices. Adipiscing tristique mauris  
                    ipsum amet. Consectetur cursus aenean lobortis 
                    aliquam a. Praesent netus ultrices risus faucibus iaculis 
                    molestie. Quis gravida urna in maecenas posuere viverra.
                    mi ullamcorper odio viverra. Sem bibendum massa aenean 
                    tincidunt non ac. Eget amet, donec tincidunt in neque.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    diam cursus nulla habitasse nisl interdum consectetur 
                    Erat adipiscing tristique arcu etiam ornare dignissim 
                    ac ultricies velit ultrices. Adipiscing tristique mauris  .
                </Typography>
               </Box>
            </Grid>
        </Grid>
    </React.Fragment>
  )
}

export default ThirdComponent