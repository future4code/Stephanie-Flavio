import React from "react";
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export const CandidateItem = () => {
    return(
        <div>
            <ListItem>
                <ListItemText
                    primary="Candidato 1"
                />
                <ListItemSecondaryAction>
                    <IconButton>
                        <ThumbUpIcon />
                    </IconButton>
                    <IconButton>
                        <ThumbDownIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    )
}