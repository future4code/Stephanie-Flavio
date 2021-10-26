import React from 'react'
import { useHistory } from 'react-router';

export function FeedPage() {

  const history = useHistory()

  const goToPageLogin = () => {
    history.push('/login')
  }

  const goToPagePost = () => {
    history.push('/post/:id')
  }

  return (
    <div>
      Feed
      <button onClick={goToPageLogin}>Logout</button>
      <button onClick={goToPagePost}>Post</button>
    </div>
  );
}