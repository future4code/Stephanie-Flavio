import { Button } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router'
import { Header } from '../../components/Header/Header';
import { goToFeedPage } from '../../Routes/coordinator';

export function PostPage() {

  const history = useHistory()

  const goToPageFeed = () => {
    history.push('/feed')
  }

  return (
    <div>
      <Header goTo={() => goToFeedPage(history)} title={'Logout'}/>
      <div>
        Post
        <Button onClick={goToPageFeed}>Feed</Button>
      </div>
    </div>
  );
}