import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from 'react-router-dom'
import React from "react";

export function CardsTrip () {
    return (
        <div>            
        <List component='nav' aria-label="secondary mailbox folders">
            <Link to={'/admin/trips/create'}>
                <ListItem button>
                    <ListItemText primary="Viagem para Marte" />
                </ListItem>
            </Link>

            <Link to={'/admin/trips/create'}>
                <ListItem button>
                    <ListItemText primary="Viagem para Lua" />
                </ListItem>
            </Link>
        </List>
     
        </div>
    )
}