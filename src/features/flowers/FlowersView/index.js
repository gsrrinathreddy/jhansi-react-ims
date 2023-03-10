import { useDispatch, useSelecter } from "react-redux";
import { ordered, restock } from "../flowerSlice";
import { Button } from "@mui/material";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import IMSCard from "../../../components/IMSCard";
import combo from "../../../assets/combo.jpg";
import gerberas from "../../../assets/gerberas.jpg";
import lightrose from "../../../assets/lightrose.jpg";
import mixed from "../../../assets/mixed.jpg";
import mixrose from "../../../assets/mixrose.jpg";
import pinkrose from "../../../assets/pinkrose.jpg";
import pinkvilla from "../../../assets/Pinkvilla.jpg";
import redblossom from "../../../assets/redblossom.jpg";
import rose from "../../../assets/rose.jpg";
import roses from "../../../assets/roses.jpg";
import whiteroses from "../../../assets/whiteroses.jpg";
import yellow from "../../../assets/yellow.jpg";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function FlowersView() {
  const dispatch = useDispatch();
  const flowersList = [
    {
      title: "Combo Flowers",
      photo: combo,
      actualprice: 300,
      offerprice: 279,
      sellingStatus: "Best Seller",

      delivery: "1hr",
    },
    {
      title: "Gerberas Flowers",
      photo: gerberas,
      actualprice: 350,
      offerprice: 293,
      sellingStatus: "Best Seller",

      delivery: "30min",
    },
    {
      title: "Light Rose Flowers",
      photo: lightrose,
      actualprice: 400,
      offerprice: 395,
      sellingStatus: "Premium",

      delivery: "1hr",
    },
    {
      title: "Mixed Flowers",
      photo: mixed,
      actualprice: 350,
      offerprice: 347,
      sellingStatus: "Best Seller",

      delivery: "1hr",
    },
    {
      title: "MixRoses Flowers",
      photo: mixrose,
      actualprice: 450,
      offerprice: 448,
      sellingStatus: "Premium",

      delivery: "1hr 30min",
    },
    {
      title: "Pink Roses Flowers",
      photo: pinkrose,
      actualprice: 250,
      offerprice: 237,
      sellingStatus: "Best Seller",

      delivery: "1hr 20 min",
    },
    {
      title: "Pink Villa Flowers",
      photo: pinkvilla,
      actualprice: 150,
      offerprice: 147,
      sellingStatus: "Best Seller",

      delivery: "30min",
    },
    {
      title: "Red Blossom Flowers",
      photo: redblossom,
      actualprice: 180,
      offerprice: 169,
      sellingStatus: "Premium",

      delivery: "2hr",
    },
    {
      title: "Rose Flowers",
      photo: rose,
      actualprice: 100,
      offerprice: 96,
      sellingStatus: "Premium",

      delivery: "30min",
    },
    {
      title: "Roses Flowers",
      photo: roses,
      actualprice: 99,
      offerprice: 93,
      sellingStatus: "Best Seller",

      delivery: "40min",
    },
    {
      title: "White Roses Flowers",
      photo: whiteroses,
      actualprice: 199,
      offerprice: 193,
      sellingStatus: "Best Seller",

      delivery: "1hr",
    },
    {
      title: "Yellow Flowers",
      photo: yellow,
      actualprice: 150,
      offerprice: 147,
      sellingStatus: "Best Seller",

      delivery: "20min",
    },
  ];

  let ordername = "flowers";

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ backgroundColor: "lightgrey" }}
      >
        {flowersList.map((item) => {
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
                titleIcon={<LocalFloristIcon />}
              ></IMSCard>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
