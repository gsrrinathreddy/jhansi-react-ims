import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function IMSChip(props) {
    let label =props.label
    let color=props.color
  return (
    <Stack spacing={1} alignItems="center">
    <Stack direction="row" spacing={1}>
      <Chip label={label} color={color} />
    </Stack>
  </Stack>
  );
}