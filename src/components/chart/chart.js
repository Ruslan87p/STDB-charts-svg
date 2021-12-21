import "./chart.css";

export const Chart = ({population, width, height, fill}) => {

        const setHeight = () => {
            let height = null;
            if (population >= 200000 && population <= 5999999 ) {
                height = "15%"
            } else if (population >= 6000000 && population <= 29999999 ) {
                height = "30%"
            } else if (population >= 30000000 && population <= 1999999999  ) {
                height = "50%"
            } else if (population >= 2000000000 && population <= 2499999999  ) {
                height = "70%"
            } else if (population >= 2500000000  && population <= 4500000000 ) {
                height = "98%"
            }
            return height;
        } 

        return(
            <svg className="chart" width={width} height={height}>
                <rect
                    rx="7"
                    ry="7"
                    fill={fill}
                    width="100%"
                    height={setHeight()}
                />
            </svg>
        )

}