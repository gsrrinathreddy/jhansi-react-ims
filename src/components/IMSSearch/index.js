import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function IMSSearch() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Gifts}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  );
}

const Gifts = [
  { label: "cakes" },
  { label: "icecreams" },
  { label: "gifts" },
  { label: "plants" },
  { label: "chocolates" },
  { label: "flowers" },
];
