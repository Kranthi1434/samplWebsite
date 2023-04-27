import React from 'react';
import { Grid, Typography,Box,Button } from '@mui/material';
import frame from '../assets/images/Frame.png'
import coverframe from '../assets/images/Rectangle.png'
import { StylingForHome } from './styleing ';


const FifthComponent = () => {
  return (
    <React.Fragment>
      
            <Box style={{
                        backgroundImage:`url(${frame})`,
                        height: '450px',
                        width:'100%',
                        backgroundSize: "100%",
                        backgroundRepeat:'no-repeat',
                        }}>
            <Box style={{
                        backgroundImage:`url(${coverframe})`,
                        height: '450px',
                        width:'100%',
                        backgroundSize: "100%",
                        backgroundRepeat:'no-repeat'
                         }}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                                <Typography 
                                    sx={{
                                        color:'white',
                                        position:'relative',
                                        top:{
                                            xs:'0px',
                                            sm:'70px',
                                            md:'0px',
                                            lg:'150px'
                                        },
                                        textAlign:'center',
                                        fontSize:{
                                            xs:'40px',
                                            sm:'40px',
                                            md:'40px',
                                            lg:'64px'
                                        },
                                        lineHeight:'64px',
                                        fontWeight:700,
                                    }}>
                                    Additional <br/> Information
                                </Typography>
                                <Typography  
                                    sx={{
                                        color:'white',
                                        position:'relative',
                                        top:{
                                            xs:'0px',
                                            sm:'70px',
                                            md:'0px',
                                            lg:'150px'
                                        },
                                        textAlign:'center',
                                        fontSize:'16px',
                                        lineHeight:'22.4px',
                                        fontWeight:400
                                    }}>
                                     Additional Information For Graduated Students
                                </Typography>   
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                               <Box sx={{
                                margin:{
                                    xs:'30px 0px 0px 10px',
                                    sm:'200px 0px 0px 190px',
                                    md:'70px 0px 0px 40px',
                                    lg:'70px 0px 0px 40px'
                                }}}>
                                <Typography sx={StylingForHome.reactangle}>
                                    Visiting
                                </Typography>
                                <Typography sx={StylingForHome.reactangle}>
                                    Campus Tour
                                </Typography>
                                <Typography sx={StylingForHome.reactangle}>
                                  Student Life
                                </Typography>
                                <Typography sx={StylingForHome.reactangle}>
                                    Scholarship
                                </Typography>
                                <Typography sx={StylingForHome.reactangle}>
                                    Clubs and Organisations
                                </Typography>
                               </Box>
                            </Grid>         
                        </Grid>
            </Box>
            </Box>
    </React.Fragment>
  )
}

export default FifthComponent;
{/* <Box  style={{
                    backgroundImage:`url(${banner})`,
                    height:'200px',
                    }}></Box> */}

                    // backgroundSize: "contain",
                    // backgroundRepeat:'no-repeat',