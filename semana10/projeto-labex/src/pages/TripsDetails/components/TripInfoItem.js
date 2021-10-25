import { Typography } from "@material-ui/core";
import React from "react";

export const TripInfoItem = (props) => {
    return(
        <Typography variant={'body1'}>
            <strong>{props.infoName}</strong>: {props.info}
        </Typography>
    )
}