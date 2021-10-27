import React from 'react'
import { useHistory } from 'react-router'
import { Header } from '../../components/Header/Header';

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
      <Header title={'Logout'}/>
      <div>
        Post
        <button onClick={goToPageLogin}>Logout</button>
        <button onClick={goToPageFeed}>Feed</button>
      </div>
    </div>
  );
}