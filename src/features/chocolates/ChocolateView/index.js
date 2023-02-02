import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "../chocolateSlice";
import { Button, Grid } from "@mui/material";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import IMSCard from "../../../components/IMSCard";
import { Box } from "@mui/system";
import cadburysilkchocolate from "../../../assets/cadburysilk.jpg";
import choclairschocolate from "../../../assets/choclairs.jpg";
import dairymilkchocolate from "../../../assets/dairymilk.jpeg";
import ferrerorocherchocolates from "../../../assets/ferrerorocher.jpg";
import fusechocolate from "../../../assets/fuse.jpg";
import kitkatchocolate from "../../../assets/kitkat.jpg";
import marschocolate from "../../../assets/mars.jpg";
import oreosilkchocolates from "../../../assets/oreosilk.jpg";
import snickerschocolate from "../../../assets/snickers.jpg";
import tobleronechocolate from "../../../assets/Toblerone.jpg";
import FastfoodIcon from "@mui/icons-material/Fastfood";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function ChocolateView() {
  const dispatch = useDispatch();
  const chocolatesList = [
    {
      title: "Cadbury Silk Chocolates",
      photo: cadburysilkchocolate,
      actualprice: 200,
      offerprice: 149,
      sellingStatus: "Best Seller",
      rating: 4.0,
      delivery: "40min",
    },
    {
      title: "Choclairs Chocolates",
      photo: choclairschocolate,
      actualprice: 20,
      offerprice: 15,
      sellingStatus: "Best Seller",
      rating: 3.5,
      delivery: "15min",
    },
    {
      title: "Dairy Milk Chocolates",
      photo: dairymilkchocolate,
      actualprice: 100,
      offerprice: 89,
      sellingStatus: "Premium",
      rating: 4.5,
      delivery: "20min",
    },
    {
      title: "Ferrerorocher Chocolates",
      photo: ferrerorocherchocolates,
      actualprice: 299,
      offerprice: 289,
      sellingStatus: "Premium",
      rating: 4.5,
      delivery: "40min",
    },
    {
      title: "Fuse Chocolates",
      photo: fusechocolate,
      actualprice: 30,
      offerprice: 25,
      sellingStatus: "Best Seller",
      rating: 4.0,
      delivery: "15min",
    },
    {
      title: "Kitkat Chocolates",
      photo: kitkatchocolate,
      actualprice: 200,
      offerprice: 197,
      sellingStatus: "Best Seller",
      rating: 4.0,
      delivery: "20min",
    },
    {
      title: "Mars Chocolates",
      photo: marschocolate,
      actualprice: 150,
      offerprice: 139,
      sellingStatus: "Best Seller",
      rating: 3.5,
      delivery: "30min",
    },
    {
      title: "Oreo Silk Chocolates",
      photo: oreosilkchocolates,
      actualprice: 180,
      offerprice: 166,
      sellingStatus: "Premiem",
      rating: 4.0,
      delivery: "20min",
    },

    {
      title: "Snickers Chocolates",
      photo: snickerschocolate,
      actualprice: 60,
      offerprice: 49,
      sellingStatus: "Premium",
      rating: 4.5,
      delivery: "20min",
    },
    {
      title: "Toblerone Chocolates",
      photo: tobleronechocolate,
      actualprice: 25,
      offerprice: 19,
      sellingStatus: "Best Seller",
      rating: 3.0,
      delivery: "40min",
    },
  ];

  const [open, setOpen] = React.useState(false);

  let ordername = "chocolates";

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ backgroundColor: "lightgrey" }}
      >
        {chocolatesList.map((item) => {
          return (
            <Grid
              item
              display="flex"
              justifyContent="center"
              xs={4}
              sm={4}
              md={4}
              pt={4}
            >
              <IMSCard
                title={item.title}
                photo={item.photo}
                ordername={ordername}
                offerprice={item.offerprice}
                actualprice={item.actualprice}
                sellingStatus={item.sellingStatus}
                rating={item.rating}
                delivery={item.delivery}
                titleIcon={<FastfoodIcon />}
              ></IMSCard>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
