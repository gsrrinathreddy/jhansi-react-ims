import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import IMSSearch from "../IMSSearch";
import CartComponent from "../CartComponent";
import { useSelector } from "react-redux";
import CartPage from "../../pages/CartPage";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { color } from "@mui/system";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function IMSNavbar(props) {
  let noOfCakes = useSelector((state) => state.cake.noOfOrdered);
  let noOfChocolates = useSelector((state) => state.chocolates.noOfOrdered);
  let noOfIcecreams = useSelector((state) => state.icecream.noOfOrdered);
  let noOfFlowers = useSelector((state) => state.flowers.noOfOrdered);
  let noOfGifts = useSelector((state) => state.gifts.noOfOrdered);
  let sum =
    noOfCakes + noOfChocolates + noOfFlowers + noOfGifts + noOfIcecreams;
  const pages = props.pages;
  const settings = props.settings;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: "none",
      textTransform: "none",
      my: 2,
      fontSize: isActive ? "18px" : "16px",
      display: "block",
      color: isActive ? "pink" : "white",
      fontWeight: isActive ? "bold" : "normal",
      marginRight: "10px",
      marginLeft: "10px",
    };
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        style={{
          backgroundImage: "linear-gradient(to right, indigo,orange )",
        }}
      >
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BAKERY
          </Typography>
          <Box sx={{ backgroundColor: "none" }}>
            <IMSSearch></IMSSearch>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link to={page} style={{ textDecoration: "none" }}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              BAKERY
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                to={page}
                style={navLinkStyles}
                onClick={handleCloseNavMenu}
              >
                {/* <Button }
                  key={page}
                 
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}

                </Button> */}
                {page}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ marginRight: "2px" }} color="black">
            <Link to="CartPage">
              <IconButton aria-label="cart" color="black">
                <CartComponent
                  badgeContent={sum}
                  CartIcon={<AddShoppingCartIcon />}
                />
              </IconButton>
            </Link>
          </Box>
          <Link to="CartPage/Delivery">
            <IconButton>
              <Tooltip title="delivery">
                <Avatar src="https://icon-library.com/images/icon-delivery/icon-delivery-16.jpg" />
              </Tooltip>
            </IconButton>
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Jhansi"
                  src="https://static.thenounproject.com/png/207093-200.png"
                />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link to={setting}>
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box>
            <Button
              color="inherit"
              variant="text"
              onClick={() => navigate("Login")}
            >
              LogIn
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default IMSNavbar;
