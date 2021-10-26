import React from 'react'
import { useHistory } from 'react-router'

export function PostPage() {

  const history = useHistory()

  const goToPageLogin = () => {
    history.push('/login')
  }

  const goToPageFeed = () => {
    history.push('/feed')
  }

  return (
    <div>
      Post
      <button onClick={goToPageLogin}>Logout</button>
      <button onClick={goToPageFeed}>Feed</button>
    </div>
  );
}