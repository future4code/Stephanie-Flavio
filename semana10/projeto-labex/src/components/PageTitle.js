import React from 'react'
import { Typography } from '@material-ui/core'

export const PageTitle = (props) => {
    return(
        <Typography
            variant="h1" 
            align={'center'}
            gutterBottom>
                {props.title}
        </Typography>
    )
}