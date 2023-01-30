import {useDispatch,useSelector} from 'react-redux';
import { ordered, restocked } from '../chocolateSlice';
import { Button, Grid } from '@mui/material';
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import IMSCard from '../../../components/IMSCard';
import { Box } from '@mui/system';
import cadburysilkchocolate from '../../../assets/cadburysilk.jpg';
import choclairschocolate from '../../../assets/choclairs.jpg';
import dairymilkchocolate from '../../../assets/dairymilk.jpeg';
import ferrerorocherchocolates from '../../../assets/ferrerorocher.jpg';
import fusechocolate from '../../../assets/fuse.jpg';
import kitkatchocolate from '../../../assets/kitkat.jpg';
import marschocolate from '../../../assets/mars.jpg';
import oreosilkchocolates from '../../../assets/oreosilk.jpg';
import snickerschocolate from '../../../assets/snickers.jpg';
import tobleronechocolate from '../../../assets/Toblerone.jpg';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export default function ChocolateView() {
    const dispatch = useDispatch();
    const chocolatesList =[
      {
        title:'Cadbury Silk Chocolates' ,
        photo:cadburysilkchocolate,
        actualprice:200,
        offerprice:149,
        sellingStatus:'Best Seller'
      },
      {
        title:'Choclairs Chocolates',
        photo:choclairschocolate,
        actualprice:20,
        offerprice:15,
        sellingStatus:'Best Seller'
      },
      {
        title:'Dairy Milk Chocolates',
        photo:dairymilkchocolate,
        actualprice:100,
        offerprice:89,
        sellingStatus:'Premium'
      },
      {
        title:'Ferrerorocher Chocolates',
        photo:ferrerorocherchocolates,
        actualprice:299,
        offerprice:159,
        sellingStatus:'Premium'
      },
      {
        title:'Fuse Chocolates',
        photo:fusechocolate,
        actualprice:30,
        offerprice:25,
        sellingStatus:'Best Seller'
      },
      {
        title:'Kitkat Chocolates',
        photo:kitkatchocolate,
        actualprice:200,
        offerprice:197,
        sellingStatus:'Best Seller'
      },
      {
        title:'Mars Chocolates',
        photo:marschocolate,
        actualprice:150,
        offerprice:139,
        sellingStatus:'Best Seller'
      },
      {
        title:'Oreo Silk Chocolates',
        photo:oreosilkchocolates,
        actualprice:180,
        offerprice:166,
        sellingStatus:'Premiem'
      },
      
      {
        title:'Snickers Chocolates',
        photo:snickerschocolate,
        actualprice:60,
        offerprice:49,
        sellingStatus:'Premium'
       },
       {
        title:'Toblerone Chocolates',
        photo:tobleronechocolate,
        actualprice:25,
        offerprice:19,
        sellingStatus:'Best Seller'
       },
      ]
    
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        dispatch(ordered(1))
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
   let ordername="chocolates"
    
    return(
        <>
            <Box sx={{margin:'25px'}}>
            <Grid container spacing={{xs:2 , md:3}} columns={{ xs: 4, sm: 8, md: 12 }} 
                style={{backgroundColor:'silver'}}>
          {
              chocolatesList.map(item=>{
                return(
                  <Grid item display='flex' justifyContent='center' 
                  xs={4}>
                  <IMSCard title={item.title}
                           photo={item.photo}
                           ordername={ordername}
                           offerprice={item.offerprice}
                           actualprice={item.actualprice}
                           sellingStatus={item.sellingStatus}>
                  </IMSCard>
                  </Grid>
                )
              })
          }
          </Grid> 
          </Box>
            {/*<Button variant="contained" onClick={handleClick}>
               Order Chocolates
           </Button>
           <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
           <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Successfully add to cart!
            </Alert>
           </Snackbar>
           
           <Button variant='contained'
                onClick={()=>{
                    dispatch(restocked(10))
                    
                }}>
                Restock Chocolates
              </Button>*/}
            <br/>
            <br/>
        </>  
    )
}