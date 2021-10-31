import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { FeedCard } from '../../components/FeedCards/FeedCard';
import { Header } from '../../components/Header/Header';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useRequestData } from '../../hooks/useRequestData';
import { goToFeedPage, goToPostPage} from '../../Routes/coordinator';
import {BASE_URL} from '../../constants/url'
import { AddPostButton, FeedPageContainer } from './FeedPageStyle';
import { Add } from '@mui/icons-material';

export function FeedPage() {
  useProtectedPage()
  const posts = useRequestData([],`${BASE_URL}/posts`)
  const [post, setPost] = useState(null)


  const history = useHistory()

  const renderDetails = () => {
    return (
      <FeedCard
      key={post.id}
      id={post.id}
      username={post.username}
      title={post.title}
      text={post.body}
      votesCount={post.voteSum}
      post={post}
      goToDetails={(post) => {
      }}
    />
    )
  }

  return (
    <div>
      <Header goTo={() => goToFeedPage(history)} title={'Logout'}/>
      <div>
        <FeedPageContainer>
          { post === null ? (
            posts.map((post) => {
              return(
                <FeedCard
                  key={post.id}
                  id={post.id}
                  username={post.username}
                  title={post.title}
                  text={post.body}
                  votesCount={post.voteSum}
                  post={post}
                  goToDetails={(post) => {
                    setPost(post)
                  }}
                />
              )
            })
          ) : (renderDetails())}
        </FeedPageContainer>
        <AddPostButton 
          color={'primary'}
          onClick={() => goToPostPage(history)}>
            <Add/>
        </AddPostButton>
      </div>
    </div>
  );
}