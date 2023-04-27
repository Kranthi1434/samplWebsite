import { Typography,Grid,Box,Button } from '@mui/material';
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import marketlogo from '../assets/images/email-marketing 1.png'
import financeImage from '../assets/images/financial-management 1.png';

const FourthComponent = () => {
  return (
    <React.Fragment>
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
                <Box sx={{
                      padding:{
                        xs:'20px',
                        sm:'20px',
                        md:'60px',
                        lg:'120px',
                      }
                      }}>
                    <Typography  style={{fontSize:'18px',color:'#581B25',fontWeight:700}}>
                        Submit Your Transcripts
                    </Typography><br/>
                    <Typography sx={{fontSize:'14px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        diam cursus nulla habitasse nisl interdum consectetur Erat 
                        adipiscing tristique arcu etiam ornare dignissim ac ultricies
                        velit ultrices. <br/><br/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        diam cursus nulla habitasse nisl interdum consectetur Erat
                        adipiscing tristique arcu etiam ornare dignissim ac ultricies
                        velit ultrices. 
                    </Typography><br/>
                    <Button
                        variant="contained"
                        size='small' 
                        sx={{
                            backgroundColor:'#581B25'
                            }}>
                          View more
                        <ArrowRightAltIcon/>
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
                <Box sx={{
                        padding:{
                          xs:'20px',
                          sm:'40px',
                          md:'60px',
                          lg:'70px',
                        }
                       }}>
                    <img src={marketlogo} width='70%'/>
                </Box>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
                <Box sx={{
                    padding:{
                        xs:'20px',
                        sm:'20px',
                        md:'80px',
                        lg:'0px 20px 20px 80px',
                        }
                       }}>
                    <img src={financeImage} width='85%'/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Box  sx={{
                    padding:{
                        xs:'20px',
                        sm:'20px',
                        md:'80px',
                        lg:'60px 120px 20px 0px',
                       }
                      }}>
                        <Typography style={{fontSize:'18px',color:'#581B25',fontWeight:700}}>
                            Submit Your Transcripts
                        </Typography><br/>
                        <Typography sx={{fontSize:'14px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            diam cursus nulla habitasse nisl interdum consectetur Erat 
                            adipiscing tristique arcu etiam ornare dignissim ac ultricies 
                            velit ultrices.<br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            diam cursus nulla habitasse nisl interdum consectetur Erat 
                            adipiscing tristique arcu etiam ornare dignissim ac ultricies 
                            velit ultrices.<br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            diam cursus nulla habitasse nisl interdum consectetur Erat 
                            adipiscing tristique arcu etiam ornare dignissim ac ultricies 
                            velit ultrices.
                        </Typography><br/><br/>
                        <Button
                            variant="contained"
                            size='small' 
                            sx={{
                                backgroundColor:'#581B25'
                                }}>
                                View more
                        <ArrowRightAltIcon/>
                    </Button>
                    </Box>
                </Grid>
        </Grid>
    </React.Fragment>
  )
}

export default FourthComponent;