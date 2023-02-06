import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "../cakeSlice";
import { Box, Button } from "@mui/material";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import flowercake from "../../../assets/cake24.jpg";
import creamcake from "../../../assets/cake25.jpg";
import IMSCard from "../../../components/IMSCard";
import weddingcake from "../../../assets/cake21.jpg";
import designercake from "../../../assets/cake22.jpg";
import chocovaneelacake from "../../../assets/cake23.jpg";
import pineapplecake from "../../../assets/cake6.jpg";
import cherrycake from "../../../assets/cake7.jpg";
import pandacake from "../../../assets/cake11.jpg";
import chocoslicecake from "../../../assets/cake12.jpg";
import anniversarycake from "../../../assets/cake13.jpg";
import oreocake from "../../../assets/cake14.jpg";
import kittycake from "../../../assets/cake15.jpg";
import cindrellacake from "../../../assets/cake16.jpg";
import gemscake from "../../../assets/cake17.jpg";
import darkforestcake from "../../../assets/cake18.jpg";
import sprinklescake from "../../../assets/cake19.jpg";
import redvilvetcake from "../../../assets/cake20.jpg";
import pinkcreamcake from "../../../assets/cake10.jpg";
import orangecake from "../../../assets/cake9.jpg";
import { Grid } from "@mui/material";
import qty from "../../../components/IMSCard";
import CakeIcon from "@mui/icons-material/Cake";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function CakeView() {
  const dispatch = useDispatch();

  const cakeList = [
    {
      title: "Flower Cake",
      photo: flowercake,
      offerprice: 150,
      actualprice: 200,
      sellingStatus: "Best Seller",

      delivery: "today",
    },
    {
      title: "Cream Cake",
      photo: creamcake,
      offerprice: 200,
      actualprice: 250,
      sellingStatus: "Best Seller",

      delivery: "Today",
    },
    {
      title: "Wedding Cake",
      photo: weddingcake,
      offerprice: 500,
      actualprice: 600,
      sellingStatus: "Premium",

      delivery: "Today",
    },
    {
      title: "Designer Cake",
      photo: designercake,
      offerprice: 300,
      actualprice: 400,
      sellingStatus: "Best Seller",

      delivery: "Today",
    },
    {
      title: "Cup Cake",
      photo: chocovaneelacake,
      offerprice: 350,
      actualprice: 400,
      sellingStatus: "Best Seller",

      delivery: "Today",
    },
    {
      title: "Pineapple Cake",
      photo: pineapplecake,
      offerprice: 250,
      actualprice: 300,
      sellingStatus: "Premium",

      delivery: "Today",
    },
    {
      title: "Cherry Cake",
      photo: cherrycake,
      offerprice: 200,
      actualprice: 250,
      sellingStatus: "Best Seller",

      delivery: "Today",
    },

    {
      title: "Pink Cream Cake",
      photo: pinkcreamcake,
      offerprice: 250,
      actualprice: 260,
      sellingStatus: "Best Seller",

      delivery: "Today",
    },
    {
      title: "Panda Cake",
      photo: pandacake,
      offerprice: 450,
      actualprice: 490,
      sellingStatus: "Premium",

      delivery: "Today",
    },
    {
      title: "Chocoslice Cake",
      photo: chocoslicecake,
      offerprice: 502,
      actualprice: 610,
      sellingStatus: "Best Seller",

      delivery: "Today",
    },
    {
      title: "Anniversary Cake",
      photo: anniversarycake,
      offerprice: 550,
      actualprice: 600,
      sellingStatus: "Premium",

      delivery: "Today",
    },
    {
      title: "Oreo Cake",
      photo: oreocake,
      offerprice: 300,
      actualprice: 300,
      sellingStatus: "Best Seller",

      delivery: "Today",
    },
    {
      title: "Kitty Cake",
      photo: kittycake,
      offerprice: 180,
      actualprice: 300,
      sellingStatus: "Best Seller",

      delivery: "Today",
    },
    {
      title: "Cindrella Cake",
      photo: cindrellacake,
      offerprice: 150,
      actualprice: 220,
      sellingStatus: "Best Seller",

      delivery: "Today",
    },
    {
      title: "Gems Cake",
      photo: gemscake,
      offerprice: 340,
      actualprice: 420,
      sellingStatus: "Premium",

      delivery: "Today",
    },
    {
      title: "Sprinkles Cake",
      photo: sprinklescake,
      offerprice: 360,
      actualprice: 400,
      sellingStatus: "Premium",

      delivery: "Today",
    },
    {
      title: "Redvilvet Cake",
      photo: redvilvetcake,
      offerprice: 500,
      actualprice: 700,
      sellingStatus: "Best Seller",

      delivery: "Today",
    },
    {
      title: "Dark Forest Cake",
      photo: darkforestcake,
      offerprice: 180,
      actualprice: 230,
      sellingStatus: "Premium",

      delivery: "Today",
    },
    {
      title: "Orange Cake",
      photo: orangecake,
      offerprice: 150,
      actualprice: 300,
      sellingStatus: "Best Seller",

      delivery: "Today",
    },
  ];

  let ordername = "cake";

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ backgroundColor: "lightgrey" }}
      >
        {cakeList.map((item) => {
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
                order={ordered}
                delivery={item.delivery}
                titleIcon={<CakeIcon />}
              ></IMSCard>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
