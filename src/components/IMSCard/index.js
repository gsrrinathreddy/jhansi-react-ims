import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blueGrey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CartComponent from '../CartComponent';
import {  Chip, Stack, TextField } from '@mui/material';
import CakeView from '../../features/cake/cakeView';
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Box from '@mui/material/Box';
import IMSChip from '../IMSChip';
import { ordered as cakeorder } from '../../features/cake/cakeSlice';
import { ordered  as icecreamorder } from '../../features/icecream/icecreamSlice';
import { ordered as giftsorder } from '../../features/gifts/GiftSlice';
import { ordered as chocolatesorder } from '../../features/chocolates/chocolateSlice';
import { ordered as flowersorder } from '../../features/flowers/flowerSlice';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function IMSCard(props) {
  let title = props.title
  let photo = props.photo
  let ordername=props.ordername
  let offerprice = props.offerprice
  let actualprice = props.actualprice 
  let sellingStatus = props.sellingStatus
  let color = "warning";
  let rating = props.rating
  let discount=actualprice-offerprice;
  let discountedPercentage=Math.floor((discount/actualprice)*100);
  let dpoff=discountedPercentage+"% off ";
  const [expanded, setExpanded] = React.useState(false);
  let [qty,setQty]=useState(1);
  let dispatch=useDispatch()
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });
  let params = {
    title:title,
     actualprice:actualprice,
     offerprice:offerprice,
     qty:parseInt(qty)
    }

  return (
    <Card sx={{ maxWidth: 360 , marginLeft :'20px', bgcolor:'beige', marginRight:'20px',marginTop:'40px' }}>
      <CardHeader 
           title={title}
           />
         <CardMedia >
          <Box sx={{ position: "relative" }}>
            <CardMedia sx={{ height: "200px" }}
               component="img" image={photo}/>
            <Box sx={{position: "absolute",alignItems:'flex-end', color: "white",top: 10,left: "83%", 
                 transform: "translateX(-51%)",}}>
               <Stack spacing={2} >
                  <Chip label={sellingStatus}
                    color='success' />
                
                </Stack>
              </Box> 
              </Box>
              
              </CardMedia>
         <CardContent> 
              
             <Typography variant='h4'>
                 ₹{offerprice}
              </Typography> 
              <Typography  style={{textDecorationLine:'line-through'}}>
                    ₹{actualprice}
              </Typography>
                  <Chip label={dpoff}
                      color='primary' />  
              <br></br>
          
              <TextField label="qty" variant="filled"
                   color="success"  
                   defaultValue={0} onChange={(e)=>setQty(e.currentTarget.value)} />
              
              <IconButton aria-label="cart " sx={{color:'black'}} onClick={()=>{ 
               if(ordername=="cake"){ 
               dispatch(cakeorder(params))
              }
                else if (ordername=="icecream") {
                dispatch(icecreamorder(params))
              }
               else if(ordername=="chocolates"){
               dispatch(chocolatesorder(params))
              }
                else if (ordername=="flowers"){
                dispatch(flowersorder(params))
              }
                else if (ordername=="gifts"){
                dispatch(giftsorder(params))
              } 
            }}> 
            
             Add</IconButton>
             <CartComponent></CartComponent>      
                     
             <Rating name="half-rating" defaultValue={0} precision={0.5} />
             <IMSChip label={rating} color={color}/>
      </CardContent>         
     </Card>
  );
  
}