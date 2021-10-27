import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './HeaderStyle';

export function Header(props) {
  return (
      <AppBar position="static">
        <StyledToolbar>            
          <Button color="inherit">LabEddit</Button>
          <Button color="inherit">{props.title}</Button>
        </StyledToolbar>
      </AppBar>
  );
}