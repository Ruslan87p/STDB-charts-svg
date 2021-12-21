import './vehicles.css'
import {useState} from "react";
import {Pilots} from "./../pilots/pilots";

export const TableVehicles = ({getVehicles, error, loading}) => {

    const [passengersArr, setPassengers] = useState([])

    return(
        getVehicles.results.map( (vehicle, index) => {
            // console.log(vehicle.pilits, "vehicle")
            return(
                <div className="vehicles" key={index}>
                    
                    <div className="vehicle">
                        <div>
                            <h5 className="vehicle-title">{vehicle.name}</h5>
                        </div>
                        <div>
                            <h3 className="vehicle-passengers">{vehicle.passengers}</h3>
                        </div>
                        <div>
                            <Pilots pilots={vehicle.pilots} error={error} loading={loading}></Pilots>
                        </div>
                    </div>
                </div>
            )
        })
    )
}