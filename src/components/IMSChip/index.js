import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function IMSChip(props) {
  let label = props.label;
  let color = props.color;
  let FavoriteIcon = props.FavoriteIcon;
  return (
    <Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={1}>
        <Chip label={label} color={color} FavoriteIcon={FavoriteIcon} />
      </Stack>
    </Stack>
  );
}
