import { Link } from "react-router-dom";

function Button () {
    return (
        <div className="btn">
            <Link to="foodDetails"><button className="explore">Explore your restaurant</button></Link>
        </div>
    )
}
export default Button;