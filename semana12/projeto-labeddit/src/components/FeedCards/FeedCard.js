import { Avatar, Button, CardHeader, IconButton, Typography } from '@mui/material';
import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CommentIcon from '@mui/icons-material/Comment';
import { PostCardAction, PostCardContainer, PostCardContent } from './FeedCardStyled';

export const FeedCard = (props) => {

  const handleUpVote = () => {
    props.handleVotePost(props.id, 1)
  }

  const handleDownVote = () => {
    props.handleVotePost(props.id, -1)
  }


  return (
    <div>
      <PostCardContainer>
        <CardHeader
          avatar={
            <Avatar>
              R
            </Avatar>
          }
          title={props.title}
          subheader={props.username}
        />
        <PostCardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.text}
          </Typography>
        </PostCardContent>
        <PostCardAction disableSpacing>
          <div>
            <IconButton onClick={handleUpVote}>
              <ArrowUpwardIcon color={props.userVoteDirection === 1 ? "primary" : "disabled"} />
            </IconButton>
            <IconButton onClick={handleDownVote}>
              <ArrowDownwardIcon color={props.userVoteDirection === -1 ? "secondary" : "disabled"}/>
            </IconButton>
          
            <span>{props.votesCount}</span>
          </div>
          {!props.hideComment && (
          <Button
            variant="contained"
            onClick={() => props.goToDetails(props.post)}
            startIcon={<CommentIcon />
            }
          >
            Comentar
          </Button>)}
        </PostCardAction>
      </PostCardContainer>
    </div>

  );
}
