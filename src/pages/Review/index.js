import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const addresses = ["Madhapur", "Hyderabad", "Telangana", "520081", "India"];
const payments = [
  { name: "Card type", detail: "Debit" },
  { name: "Card holder", detail: "Mr.Jhansi" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2027" },
];

export default function Review() {
  const cartList = useSelector((state) => state.cart.cartList);
  console.log(cartList);
  let sum = 0;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
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
              OfferPrice
            </Typography>
            {cartList.map((item) => {
              return <Typography>{item.offerprice}</Typography>;
            })}
          </Grid>

          <Grid md={6}>
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
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>Jhansi</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
