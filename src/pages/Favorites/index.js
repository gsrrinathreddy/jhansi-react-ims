import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Favorites() {
  const favList = useSelector((state) => state.Favorites.favList);
  console.log(favList);

  return (
    <>
      <Grid container>
        <Grid md={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Title
          </Typography>

          {favList.map((item) => {
            return <Typography>{item.title}</Typography>;
          })}
        </Grid>
      </Grid>
    </>
  );
}
