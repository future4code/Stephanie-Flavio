import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './HeaderStyle';
import { goToLoginPage } from '../../Routes/coordinator';
import { useHistory } from 'react-router';

export function Header(props) {
  const history = useHistory()

  return (
      <AppBar position="static">
        <StyledToolbar>            
          <Button 
            onClick={props.goTo}
            color="inherit">
              LabEddit
            </Button>
          <Button 
            onClick={() => goToLoginPage(history)}
            color="inherit">
              {props.title}
            </Button>
        </StyledToolbar>
      </AppBar>
  );
}