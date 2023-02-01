import { useSelector } from "react-redux";
import { Typography, Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const cartList = useSelector((state) => state.cart.cartList);
  console.log(cartList);
  const navigate = useNavigate();
  let sum = 0;

  return (
    <>
      <Box>
        <h2> Order Details: </h2>
        <Grid container>
          <Grid md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Name
            </Typography>
            {cartList.map((item) => {
              return <Typography>{item.title}</Typography>;
            })}
          </Grid>
          <Grid md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Qty
            </Typography>
            {cartList.map((item) => {
              return <Typography>{item.qty}</Typography>;
            })}
          </Grid>
          <Grid md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              ActualPrice
            </Typography>
            {cartList.map((item) => {
              return <Typography>{item.actualprice}</Typography>;
            })}
          </Grid>
          <Grid md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              OfferPrice
            </Typography>
            {cartList.map((item) => {
              return <Typography>{item.offerprice}</Typography>;
            })}
          </Grid>
          <Grid md={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Total
            </Typography>
            {cartList.map((item) => {
              sum += item.offerprice * item.qty;
              return <Typography>{item.qty * item.offerprice}</Typography>;
            })}
            Total Amount : {sum}
          </Grid>
        </Grid>

        <Button onClick={() => navigate("order success")} variant="contained">
          Place Order
        </Button>
      </Box>
    </>
  );
}
