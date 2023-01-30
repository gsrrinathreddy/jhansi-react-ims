import {useDispatch,useSelector} from 'react-redux';
import { ordered, restocked } from '../GiftSlice';
import { Button } from '@mui/material';
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import IMSCard from '../../../components/IMSCard';
import {Grid} from '@mui/material';
import { Box } from '@mui/system';

import bullockcartgift from '../../../assets/bullockcart.jpg';
import cashewcombogift from '../../../assets/cashewcombo.jpg';
import ceramicmuggift from '../../../assets/ceramicmug.jpg';
import couplelampgift from '../../../assets/couplelamp.jpg';
import crystaltreegift from '../../../assets/crystaltree.jpg';
import glassgift from '../../../assets/glassgift.jpg';
import lampgift from '../../../assets/lamp.jpg';
import leatherbaggift from '../../../assets/leatherbag.jpg';
import lordkrishnagift from '../../../assets/lordkrishna.jpg';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
export default function GiftView() {
    const dispatch = useDispatch();
    const giftList =[
    
      {
        title:'Bullockcart Gift',
        photo:bullockcartgift,
        actualprice:300,
        offerprice:293,
        sellingStatus:'Best Seller'
      },
      {
        title:'Cashew Combo Gift',
        photo:cashewcombogift,
        actualprice:500,
        offerprice:497,
        sellingStatus:'Best Seller'
      },
      {
        title:'Ceramic Mug Gift',
        photo:ceramicmuggift,
        actualprice:300,
        offerprice:297,
        sellingStatus:'Premium'
      },
      {
        title:'Couple Lamp Gift',
        photo:couplelampgift,
        actualprice:500,
        offerprice:498,
        sellingStatus:'Best Seller'
      },
      {
        title:'Crystal Tree Gift',
        photo:crystaltreegift,
        actualprice:200,
        offerprice:199,
        sellingStatus:'Best Seller'
      },
      {
        title:'Glass Gift ',
        photo:glassgift,
        actualprice:150,
        offerprice:148,
        sellingStatus:'Premium'
      },
      {
        title:'Light Lamp Gift',
        photo:lampgift,
        actualprice:100,
        offerprice:98,
        sellingStatus:'Premium'
      },
      
      {
        title:'Leather Bag Gift',
        photo:leatherbaggift,
        actualprice:350,
        offerprice:348,
        sellingStatus:'Premium'
       },
      {
        title:'Lord Krishna Gift',
        photo:lordkrishnagift,
        actualprice:400,
        offerprice:396,
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
    let ordername='gifts'

    
    return(
        <>

            <Box sx={{margin:'25px'}}>
              <Grid container spacing={{xs:2 , md:3}} columns={{ xs: 4, sm: 8, md: 12 }} 
                  style={{backgroundColor:'silver'}}>
              {
                   giftList.map(item=>{
                    return(
                       <Grid item display='flex' justifyContent='center' 
                             xs={4}>
                       <IMSCard 
                            title={item.title}
                            photo={item.photo}
                            ordername={ordername}
                            offerprice={item.offerprice}
                            actualprice={item.actualprice}
                            sellingStatus={item.sellingStatus}
                            >
                       </IMSCard>
                       </Grid>
                      )
                   })
              }
                </Grid> 
                </Box>
           {/*<Button variant="contained" onClick={handleClick}>
               Order Gifts
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
                Restock Gifts
              </Button>*/}
            <br/>
            <br/>
        </>  
    )
}