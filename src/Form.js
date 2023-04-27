import { Category, Description } from '@mui/icons-material'
import { TextField,Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { json } from 'react-router-dom';

const Form = () => {
  // const [data,setData] = useState(
  //   {
  //     title:'',
  //     price:'',
  //     category:'',
  //     description:'',
  //   }
  // );
  // const {title,price,category,description} = data;
 
  // const changeHandler = (e) =>{
  //   setData({...data,[e.target.name]:[e.target.value]})
  // }
  const [tiltle, settiltle] = useState('');
  const [price, setprice] = useState('');
  const [category, setcategory] = useState('');
  const [description, setdescription] = useState('')
  const submitDetails = (e) =>{
    console.log(tiltle,price,category,description);
 let payload ={
"title":tiltle,
"price":price,
"category":category,
"description":description
  }
  fetch('https://fakestoreapi.com/products',{
    method:"POST",
    body:payload
  }).then(res=>res.json()).then(json=>console.log(json))
  settiltle('')
  }
  return (
    <React.Fragment>
        <Box component='form' sx={{margin:'auto',width:'400px',marginTop:'100px'}}>
           <Typography 
                variant='h4' 
                sx={{margin:'auto',
                marginBottom:'30px',
                backgroundColor:'pink',
                color:'gray'}} >Enter the product details
            </Typography>
            <TextField 
                variant='outlined'
                color="secondary"  
                fullWidth
                label='Title'  
                margin="dense"
                value={tiltle}
                name='title'
                onChange={(e)=>settiltle(e.target.value)}
               />
                  <TextField 
                variant='outlined'
                color="secondary"  
                fullWidth
                label='Price'  
                margin="dense"
                value={price}
                name='price'
                onChange={(e)=>setprice(e.target.value)}
               />
                  <TextField 
                variant='outlined'
                color="secondary"  
                fullWidth
                label='Category'  
                margin="dense"
                value={category}
                name='category'
                onChange={(e)=>setcategory(e.target.value)}
               />
                  <TextField 
                variant='outlined'
                color="secondary"  
                fullWidth
                label='Description'  
                margin="dense"
                value={description}
                name='description'
                onChange={(e)=>setdescription(e.target.value)}
               />
            <Button 
                variant='contained' 
                onClick = {submitDetails}
                sx={{marginLeft:'150px',
                marginTop:'15px'}}>Submit
            </Button>
        </Box>
    </React.Fragment>
  )
}

export default Form;

// {
//     title= 'test product',
//     price= 13.5,
//     description= 'lorem ipsum set',
//     image= 'https://i.pravatar.cc',
//     category= 'electronic'
// }
        {/* <TextField variant='outlined'  color="secondary"  fullWidth label='title'  margin="dense"/>
        <TextField variant='outlined'  color="secondary"  fullWidth label='price' margin="dense"/>
        <TextField variant='outlined'  color="secondary"  fullWidth label='description' margin="dense"/>
        <TextField variant='outlined'  color="secondary"  fullWidth label='category' margin="dense"/> */}
