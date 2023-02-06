import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function NotFound() {
  return (
    <>
      <h1>404 Error</h1>
      <h3> Oops...Page Not Found!</h3>
      <Box
        sx={{ backgroundColor: "inherit" }}
        justifyContent="space-between"
        pt={40}
      >
        <h1>Contact with Us :</h1>
        <InstagramIcon></InstagramIcon>
        <FacebookIcon></FacebookIcon>
        <LinkedInIcon></LinkedInIcon>
      </Box>
    </>
  );
}
