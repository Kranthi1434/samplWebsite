import { Category } from '@mui/icons-material';
import { AppBar, Tab, Tabs, Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const navLinks = [{nav:'Home',
                   path:'/home'},
                   {nav:'About',
                   path:'/about'},
                   {nav:'Dashboard',
                   path:'/dashboard'},
                   {nav:'Categories',
                   path:'/categories'},]

const Sample = () => {
    const [value,setValue]=useState(0); 
    const [timer,setTimer] = useState(0);
    setInterval(()=>{
      setTimer(timer+1);
    },300000
    )
    useEffect(()=>{
      console.log('first effect');
    })
   
  return (
    <React.Fragment>
        <AppBar sx={{position:'relative',backgroundColor:'grey'}}>
            <Toolbar>
                <Tabs
                 value={value} 
                 indicatorColor='secondary'
                 onChange={(e,value)=>{setValue(value);console.log(value)} }>
              
                        <Tab
                         sx={{color:'white'}}
                         label='Home'
                         to='/home'
                        />k
                        <Tab
                         sx={{color:'white'}}
                         label='About' 
                         to='/about' 
                       />
                        <Tab
                         sx={{color:'white'}}  
                         label='Dashboard'
                         to='/dashboard'
                       />
                </Tabs>
            </Toolbar>
        </AppBar>
        <br/>
        <h3>Timer is:{timer}</h3>
     

    </React.Fragment>
  )
}
export default Sample;

