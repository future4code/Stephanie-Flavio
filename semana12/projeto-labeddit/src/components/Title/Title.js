import React from 'react'
import { Typography } from '@mui/material'

export const Title = (props) => {
    return (
        <div>
            <Typography 
              variant='h1'
              align={'center'}
              gutterBottom>
                {props.title}
            </Typography>
        </div>
    )
}