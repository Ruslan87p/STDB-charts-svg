import './header-card.css'

export const HeaderCard = ({planet, populationNumber}) => {
    return(
        <div className="planet-header">
        <span>
            Planet name: <h3 className="title">{planet.name}</h3>
        </span>
        <span>
            Planet population: <h3 className="population">{populationNumber(planet.population)}</h3>
        </span>
    </div>
    )
}