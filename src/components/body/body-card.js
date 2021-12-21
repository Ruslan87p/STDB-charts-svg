import { Chart } from "../chart/chart"


export const BodyCard = ({planet}) => {
    return(
        <>
            {
                planet.population !== "unknown" ? 
                <Chart
                    width="90%"
                    height="400"
                    fill="#C43333"
                    population={planet.population}
                    title="Population">
                </Chart> 
                : 
                <span>
                    <h3> - No population</h3>
                </span>
            }
        </>           
    )
}