import { Fab } from '@mui/material'
import styled from 'styled-components'

export const FeedPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 30px;
    align-items: center;
`

export const AddPostButton = styled(Fab)`
    position: fixed !important;
    right: 20px;
    bottom: 20px;
    z-index: 3;
`

