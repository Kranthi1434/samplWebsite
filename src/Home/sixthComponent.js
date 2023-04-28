import { Box, List, ListItem, ListItemText,Grid, Divider, Typography, IconButton } from '@mui/material';
import React from 'react';
import logo from '../assets/images/CompanyLogo.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SportsBasketballRoundedIcon from '@mui/icons-material/SportsBasketballRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const firstColumn = [
                    'About',
                    'IBVE Ranking',
                    'IBVE Review', 
                    'IBVE Faculty',
                    'Careers at IBVE',
                    'Contact us',
                    ];
const secondColumn = [
                    'MBA in Finance Management',
                    'MBA IT ( Information Technology)',
                    'MBA HR Management', 
                    'MBA Operations Management',
                    'MBA Internatioial Business',
                    'MBA Business Analytics',
                    ];
const thirdColumn = [
                    'MBA Entrepreneurship',
                    'MBA Health Care And Hospital Management',
                    ' MBA Sales And Marketing Management', 
                    'MBA Operations Management',
                    'MBA In Analytics Management',
                    ];
const fourthColumn = [
                     'Contact Us',
                     'IBVE Alumni',
                     'Recommend a Friend',
                     ]                       


const SixthComponent = () => {
  return (
    <React.Fragment>
        <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={3}>
                <Box sx={{
                            margin:{
                            xs:'100px 0px 0px 20px',
                            sm:'250px 0px 0px 60px',
                            md:'60px 0px 20px 60px',
                            lg:'60px 0px 20px 60px',
                        }}}>
                    <List>
                        <ListItem>
                            <ListItemText secondary='ABOUT IBVE'/>
                        </ListItem>
                        {
                            firstColumn.map((value,index)=>(
                                <ListItem>
                                <ListItemText primary={value} key={index}/>
                            </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={3}>
                <Box  sx={{ 
                            margin:{
                            xs:'100px 0px 0px 20px',
                            sm:'250px 0px 0px 0px',
                            md:'60px 0px 20px 60px',
                            lg:'60px 0px 20px 60px',
                }}}>
                    <List>
                        <ListItem>
                            <ListItemText secondary='Popular Programs'/>
                        </ListItem>
                        {
                            secondColumn.map((value,index)=>(
                                <ListItem>
                                <ListItemText primary={value} key={index}/>
                            </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={3}>
                <Box  sx={{
                            margin:{
                            xs:'0px 0px 0px 20px',
                            sm:'20px 0px 0px 60px',
                            md:'60px 0px 20px 60px',
                            lg:'60px 0px 20px 60px',
                        }}}>
                    <List>
                        <ListItem>
                                <ListItemText secondary='Popular Programs'/>
                        </ListItem>
                        {
                            thirdColumn.map((value,index)=>(
                                <ListItem>
                                <ListItemText primary={value} key={index}/>
                            </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={3}>
                <Box  sx={{
                            margin:{
                            xs:'0px 0px 0px 20px',
                            sm:'20px 0px 0px 0px',
                            md:'60px 0px 20px 60px',
                            lg:'60px 0px 20px 60px',
                        }}}>
                    <List>
                        <ListItem>
                                <ListItemText secondary='Connect with Us'/>
                        </ListItem>
                        {
                            fourthColumn.map((value,index)=>(
                                <ListItem>
                                <ListItemText primary={value} key={index}/>
                            </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Grid>
        </Grid>
        <Divider variant='middle'/>
        <Box sx={{margin:{
                  xs:'20px 0px 10px 20px',
                  sm:'30px 0px 30px 40px',
                  md:'30px 0px 30px 40px',
                  lg:'30px 0px 20px 60px'
        }}}>
        <Grid container>
            <Grid item xs={3} sm={3} md={3} lg={4}>
                    <img src={logo} alt='logo image'/>
            </Grid >
            <Grid item xs={4} sm={5} md={5} lg={4}>
                <Typography sx={{color:'#9e9e9e'}}>
                    2022 IBVE. All rights reserved.
                </Typography> 
            </Grid>
            <Grid item xs={5} sm={4} lg={4}>
                <IconButton><TwitterIcon/></IconButton>
                <IconButton><LinkedInIcon/></IconButton>
                <IconButton><FacebookRoundedIcon/></IconButton>
                <IconButton><WhatsAppIcon/></IconButton>
                <IconButton><SportsBasketballRoundedIcon/></IconButton> 
            </Grid>
        </Grid>
        </Box>
    </React.Fragment>
  )
}

export default SixthComponent;


