import {HeaderCard} from "./../../header/header-card"
import {BodyCard} from "./../../body/body-card"
import "./planets.css"

// add comma to number
const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// get count of population
const PopulationNumber = (population) => {
    return numberWithCommas(population)
}


export const Planets = ({getPlanets}) => {    
    return(
            <div className="planets">
            {   
                getPlanets.results.map( (planet, index) => { 
                    return(

                        planet.name === "Tatooine" | 
                        planet.name === "Alderaan" | 
                        planet.name === "Naboo" | 
                        planet.name === "Bespin" | 
                        planet.name === "Endor" ? 

                        <div className="planet" key={index}>
                            <HeaderCard planet={planet} populationNumber={PopulationNumber}></HeaderCard>
                            <div className="chart-column">
                                <BodyCard planet={planet}></BodyCard>
                            </div>
                        </div> 

                    : null
                    )
                })
            }
            </div>
    )
}