import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { FeedCard } from '../../components/FeedCards/FeedCard';
import { Header } from '../../components/Header/Header';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { useRequestData } from '../../hooks/useRequestData';
import { goToFeedPage, goToPostPage} from '../../Routes/coordinator';
import {BASE_URL} from '../../constants/url'
import { AddPostButton, FeedPageContainer } from './FeedPageStyle';
import { Add } from '@mui/icons-material';
import axios from 'axios';
import { Button, TextField } from '@mui/material';

const axiosConfig = {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}

export function FeedPage() {
  useProtectedPage()
  const posts = useRequestData([],`${BASE_URL}/posts`)
  const [post, setPost] = useState(null)
  const [newComment, setNewComment] = useState('')
  const [comments, setComments] = useState([])


  const history = useHistory()

  const handleUpdateComment = (e) => {
    setNewComment(e.target.value)
  }

  useEffect(() => {
    console.log(post)
    if (post && post.id){
      getComments(post.id)
    }
  }, [post])

  const createComment = (id) => {

    const body = {
      body: newComment
    }

    axios.post(`${BASE_URL}/posts/${id}/comments`, body, axiosConfig)
      .then((res) => {
        setNewComment('')
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.data)
      })
  }

  const getComments = (id) => {

    axios.get(`${BASE_URL}/posts/${id}/comments`, axiosConfig)
      .then((res) => {
        setComments(res.data)
      })
      .catch((err) => {
        console.log(err.response)
      })

  }

  const renderDetails = () => {
    return (
      <div>
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
      <div>
      <TextField
        placeholder={'escreva seu comentário'}
        value={newComment}
        onChange={handleUpdateComment}
      />
      <Button onClick={createComment}>Enviar</Button>
      </div>
     {comments && (
       comments.map((comment) => {
        console.log(comment)
        return(<p>{comment.body}</p>)
       }
     ))}
    </div>
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