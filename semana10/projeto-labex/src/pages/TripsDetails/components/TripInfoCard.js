import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TripInfoItem } from "./TripInfoItem";


export const TripInfo = () => {
    return(
        <div>
            <Card>
                <CardContent>
                    <Typography color="text.secondary" variant={'h5'} gutterBottom>
                        Informações
                    </Typography>
                    <TripInfoItem infoName={'Nome'} info={'Viagem para Lua'}/> 
                    <TripInfoItem infoName={'Descrição'} info={'Ver o Planeta azul em outro ângulo'}/> 
                    <TripInfoItem infoName={'Planeta'} info={'Satélite da Terra'}/> 
                    <TripInfoItem infoName={'Duração em dias'} info={'86'}/> 
                    <TripInfoItem infoName={'Data'} info={'03/10/2023'}/> 
                </CardContent>
            </Card>
        </div>
    )
}