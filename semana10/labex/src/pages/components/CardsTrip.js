import React from "react";
import { useHistory } from "react-router";

export function CardsTrip () {

    const history = useHistory()

    const goToTripsDetailsPage = () => {
        history.push("/details")
    }

    return (
        <div>
            Cards Trip
            <button onClick={goToTripsDetailsPage}>Ver Detalhes</button>
        </div>
    )
}