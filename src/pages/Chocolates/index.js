import { useSelector } from "react-redux";
import ChocolateView from "../../features/chocolates/ChocolateView/index";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IMSDialog from "../../components/IMSDialog";

export default function Chocolates() {
  return (
    <>
      <ChocolateView />
      <Box
        sx={{ backgroundColor: "lightgrey" }}
        justifyContent="space-between"
        pt={5}
      >
        <IMSDialog />
        <h1>Contact with Us :</h1>
        <InstagramIcon></InstagramIcon>
        <FacebookIcon></FacebookIcon>
        <LinkedInIcon></LinkedInIcon>
      </Box>
    </>
  );
}
