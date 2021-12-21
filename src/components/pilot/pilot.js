
import { useLocation, Link } from "react-router-dom";

export const Pilot = (props) => {
    const { state } = useLocation();

    console.log( state, "id")

    return(
        <div>
             <h1>Topics</h1>
        </div>
    )
}