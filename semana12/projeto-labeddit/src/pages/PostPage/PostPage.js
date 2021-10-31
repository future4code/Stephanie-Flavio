import { Button } from '@mui/material';
import React from 'react'
import { useHistory, useParams } from 'react-router'
import { Header } from '../../components/Header/Header';
import { BASE_URL } from '../../constants/url';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useRequestData } from '../../hooks/useRequestData';
import { goToFeedPage } from '../../Routes/coordinator';

export function PostPage() {
  useProtectedPage()

  const params = useParams()
  console.log(params)

  const post = useRequestData({}, `${BASE_URL}`)

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