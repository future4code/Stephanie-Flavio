import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { CardActions } from '@mui/material'

export const PostCardContainer = styled(Card)`
    width: 55vw;
    margin: 15px;
`

export const PostCardContent = styled(CardContent)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
`

export const PostCardAction = styled(CardActions)`
    display: flex;
    justify-content: space-between;
`
