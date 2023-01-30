import { useDispatch, useSelecter } from "react-redux";
import { ordered  as orderice, restock } from "../icecreamSlice";
import { Button } from "@mui/material";
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {Grid} from '@mui/material';
import brownie from '../../../assest-ice/brownie.jpg';
import chocobar from '../../../assest-ice/almond.jpg';
import chocolate from '../../../assest-ice/chocolate.jpg';
import choco from '../../../assest-ice/choco.jpg';
import cone from '../../../assest-ice/cone.jpg';
import nuts from '../../../assest-ice/nuts.jpg';
import grape from '../../../assest-ice/grape.jpg';
import mango from '../../../assest-ice/mango.jpg';
import nabati from '../../../assest-ice/nabati.jpg';
import vennila from '../../../assest-ice/vennila.jpg';
import { Box } from "@mui/system";
import IMSCard from "../../../components/IMSCard";
import { useState } from "react";


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export default function IcecreamView() {
    const dispatch = useDispatch();
 
    const icecreamList =[
      {
        title:'Brownie Icecream' ,
        photo:brownie,
        actualprice:90,
        offerprice:87,
        sellingStatus:'Best Seller'
      },
      {
        title:'Chocobar Icecream',
        photo:chocobar,
        actualprice:70,
        offerprice:60,
        sellingStatus:'Premium'
      },
      {
        title:'Chocolate Icecream',
        photo:chocolate,
        actualprice:50,
        offerprice:47,
        sellingStatus:'Premium'
      },
      {
        title:'Choco Icecream',
        photo:choco,
        actualprice:60,
        offerprice:58,
        sellingStatus:'Premium'
      },
      {
        title:'Cone Icecream',
        photo:cone,
        actualprice:70,
        offerprice:65,
        sellingStatus:'Best Seller'
      },
      {
        title:'Nuts Icecream',
        photo:nuts,
        actualprice:80,
        offerprice:78,
        sellingStatus:'Best Seller'
      },
      {
        title:'Grape Icecream',
        photo:grape,
        actualprice:50,
        offerprice:46,
        sellingStatus:'Premium'
      },
      {
        title:'Mango Icecream',
        photo:mango,
        actualprice:40,
        offerprice:35,
        sellingStatus:'Best Seller'
       },
      {
        title:'Nabati Icecream',
        photo:nabati,
        actualprice:35,
        offerprice:32,
        sellingStatus:'Premium'
      },
      {
        title:'Vennila Icecream',
        photo:vennila,
        actualprice:60,
        offerprice:53,
        sellingStatus:'Best Seller'
      },
     
    ]
    const [open, setOpen] = React.useState(false);

    const handleClick = () => { 
        dispatch(orderice(1))
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    let ordername="icecream"

    return(
        <>
         
      
          <Box sx={{margin:'25px'}}>
          <Grid container spacing={{xs:2 , md:3}} columns={{ xs: 4, sm: 8, md: 12 }} 
                  style={{backgroundColor:'silver'}}>
             
            {
              icecreamList.map(item=>{
                return(
                  <Grid item display='flex' justifyContent='center' 
                  xs={4}>
                  <IMSCard title={item.title}
                           photo={item.photo}
                           ordername={ordername}
                           actualprice={item.actualprice}
                           offerprice={item.offerprice}
                           sellingStatus={item.sellingStatus}>
                  </IMSCard>
                  </Grid>
                )
              })
             }
             </Grid>
             </Box>
          
          
          {/*<Button variant="contained" onClick={handleClick}>
               Order IceCream
           </Button>
           <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
           <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Successfully add to cart!
            </Alert>
           </Snackbar>
            
            <Button variant="contained"
                 onClick={()=>{
                    dispatch(restock(10))
                 }}>
                   Restock IceCream
                </Button>*/}
            <br/>

        </>
    )
}