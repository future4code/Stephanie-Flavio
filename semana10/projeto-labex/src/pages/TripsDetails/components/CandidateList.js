import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { List } from "@material-ui/core";
import { CandidateItem } from "./CandidateItem";

export const CandidateList = () => {
    return(
        <div>
            <Card>
                <CardContent>
                    <Typography color="text.secondary" variant={'h5'} gutterBottom>
                        Candidados
                    </Typography>
                    <List>
                        <CandidateItem/>
                        <CandidateItem/>
                        <CandidateItem/>
                        <CandidateItem/>
                        <CandidateItem/>
                    </List>
                </CardContent>
            </Card>
        </div>
    )
}