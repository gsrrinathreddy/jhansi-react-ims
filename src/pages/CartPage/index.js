import { useSelector } from "react-redux";
import { Typography,Grid,Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
export default function CartPage() {
    const cartList = useSelector((state)=>state.cart.cartList);
    console.log(cartList)
    const navigate = useNavigate();
    return(
        <> 
          <Box>
            Order Details:
            <Grid container>
                <Grid md={2}>
                <Typography variant="h6" sx={{fontWeight:'bold'}}>name
                </Typography>
                {cartList.map((item)=>{
                 return(
               <Typography>{item.title}
               </Typography>
               )
        })
    } 
    </Grid>
                <Grid md={2}>
                    <Typography variant="h6" sx={{fontWeight:'bold'}}>
                        Qty
                    </Typography>
                    {
                      cartList.map((item)=>{
                        return(
                             <Typography>
                                 {item.qty}
                            </Typography>
                            )
        })}
        </Grid>
        <Grid md={2}>
             <Typography variant="h6" sx={{fontWeight:'bold'}}>
                ActualPrice
                </Typography>
                { cartList.map((item)=>{
                 return(
                     <Typography>
                           {item.actualPrice}
                       </Typography> 
                       )
                        })
                        } 
                   </Grid>
                      </Grid>
          </Box>
          
        </>
    )
}
