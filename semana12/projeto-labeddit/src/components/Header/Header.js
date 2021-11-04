import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './HeaderStyle';
import { goToLoginPage } from '../../Routes/coordinator';
import { useHistory } from 'react-router';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function Header(props) {
  const history = useHistory()

  const token = localStorage.getItem('token')

  const [ rightButton, setRightButton] = useState(token ? 'Logout' : 'Login')

  const logout = () => {
    localStorage.removeItem('token')
  }

  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightButton('Login')
      goToLoginPage(history)
    } else {
      goToLoginPage(history)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
          <div>
            <IconButton onClick={() => history.goBack()}>
              <ArrowBackIosIcon color={'red'}/>
            </IconButton>           
            <Button 
              onClick={props.goTo}
              color="inherit">
                LabEddit
            </Button>
          </div>
          <Button 
            onClick={rightButtonAction}
            color="inherit">
              {rightButton}
          </Button>
        </StyledToolbar>
      </AppBar>
  );
}