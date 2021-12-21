import { Planets } from './../components/view/planets/planets';
import {Loader} from "./../components/loader/loade";
import {TableVehicles} from "./../components/view/vehicles/vehicles";
import React from "react";

export const HomePage = ({vehicles, people, planets, error, loading}) => {
    return(
        <div className="app">
            { vehicles && people ? <TableVehicles 
            getVehicles={vehicles}
            error={error}
            loading={loading}></TableVehicles> : <Loader></Loader>}

            { planets ? <Planets
            getPlanets={planets}
            ></Planets> : <Loader></Loader>}
        </div>
    )
}