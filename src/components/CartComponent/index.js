import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CartComponent(props) {
  let badgeContent = props.badgeContent;
  let CartIcon = props.CartIcon;
  return (
    <IconButton aria-label="cart" color="inherit">
      <StyledBadge badgeContent={badgeContent} color="primary">
        {CartIcon}
      </StyledBadge>
    </IconButton>
  );
}
