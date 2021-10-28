import { Button } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router';
import { Header } from '../../components/Header/Header';
import { goToFeedPage } from '../../Routes/coordinator';

export function FeedPage() {

  const history = useHistory()

  const goToPagePost = () => {
    history.push('/post/:id')
  }

  return (
    <div>
      <Header goTo={() => goToFeedPage(history)} title={'Logout'}/>
        Feed
      <Button onClick={goToPagePost}>Post</Button>
    </div>
  );
}