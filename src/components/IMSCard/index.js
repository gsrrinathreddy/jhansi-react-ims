import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { grey, pink, red, teal } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CartComponent from "../CartComponent";
import { Chip, Stack, TextField } from "@mui/material";
import CakeView from "../../features/cake/cakeView";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Box from "@mui/material/Box";
import IMSChip from "../IMSChip";
import { ordered as cakeorder } from "../../features/cake/cakeSlice";
import { ordered as icecreamorder } from "../../features/icecream/icecreamSlice";
import { ordered as giftsorder } from "../../features/gifts/GiftSlice";
import { ordered as chocolatesorder } from "../../features/chocolates/chocolateSlice";
import { ordered as flowersorder } from "../../features/flowers/flowerSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Button from "@mui/material/Button";
import { width } from "@mui/system";
import CakeIcon from "@mui/icons-material/Cake";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function IMSCard(props) {
  let title = props.title;
  let photo = props.photo;
  let ordername = props.ordername;
  let offerprice = props.offerprice;
  let actualprice = props.actualprice;
  let sellingStatus = props.sellingStatus;
  let color = "warning";
  let rating = props.rating;
  let discount = actualprice - offerprice;
  let discountedPercentage = Math.floor((discount / actualprice) * 100);
  let dpoff = discountedPercentage + "% off ";
  let orderPlaced = props.order;
  let delivery = props.delivery;
  let titleIcon = props.titleIcon;
  let addFav = props.addFav;
  const [expanded, setExpanded] = React.useState(false);
  let [qty, setQty] = useState(0);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(2);
  const [active, setActive] = React.useState();
  const handleClick1 = () => {
    setActive(!active);
  };
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  let params = {
    photo: photo,
    title: title,
    actualprice: actualprice,
    offerprice: offerprice,
    qty: parseInt(qty),
  };
  let param = {
    title: title,
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        marginLeft: "20px",
        bgcolor: "beige",
        marginRight: "20px",
        marginTop: "40px",
        cursor: "pointer",
      }}
    >
      <CardMedia sx={{ height: 300 }}>
        <CardHeader
          title={<h2>{title}</h2>}
          avatar={
            <Avatar sx={{ color: "black" }} aria-label="recipe">
              {titleIcon}
            </Avatar>
          }
        ></CardHeader>

        <Card
          sx={{
            width: "300px",
            marginLeft: "20px",
            marginRight: "40px",
            height: "200px",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <CardMedia component="img" height="200" image={photo} />
            <Box
              sx={{
                position: "absolute",
                alignItems: "flex-end",
                color: "white",
                top: 10,
                left: "85%",
                transform: "translateX(-51%)",
              }}
            >
              <Stack spacing={2}>
                <Chip label={sellingStatus} color="success" />
              </Stack>
            </Box>
          </Box>
        </Card>
      </CardMedia>

      <CardContent disableSpacing>
        <Stack direction="row" spacing={1}>
          <Typography variant="h4">???{offerprice}</Typography>
          <Typography
            variant="h6"
            style={{ textDecorationLine: "line-through" }}
          >
            ???{actualprice}
          </Typography>
          <Chip label={dpoff} color="primary">
            <LocalOfferIcon />
          </Chip>
        </Stack>
        <Typography variant="body3" color="black" fontStyle="oblique">
          <LocalShippingIcon /> Earliest Delivery : {delivery}
          <br></br>
        </Typography>
        <br></br>
        <TextField
          type="number"
          InputProps={{
            inputProps: { min: 0 },
          }}
          label="qty"
          sx={{
            width: "70px",
            height: "20px",
            size: "small",
            id: "outlined-basic",
          }}
          variant="outlined"
          defaultValue={1}
          value={qty}
          onChange={(e) => setQty(e.currentTarget.value)}
        >
          <br></br>
        </TextField>
        <Button
          variant="contained"
          color="secondary"
          sx={{ color: "black", width: "90px" }}
          onClick={() => {
            handleClick();
            if (qty > 0) dispatch(orderPlaced(params));
          }}
        >
          Add
          <CartComponent badgeContent={qty} CartIcon={<LocalMallIcon />} />
          <br></br>
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() => navigate("/CartPage/Delivery")}
        >
          BUY Now
        </Button>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            {
              dispatch(addFav(param));
            }
          }}
        >
          <FavoriteIcon
            onClick={handleClick1}
            style={{ color: active ? "red" : "GrayText" }}
          />
        </IconButton>
        <br></br>

        <IMSChip label={value} color={color} />

        <Typography component="legend"></Typography>
        <Rating
          name="simple-controlled"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {qty} {title}'s added in your cart!!
          </Alert>
        </Snackbar>
      </CardContent>
    </Card>
  );
}
