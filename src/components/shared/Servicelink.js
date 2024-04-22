
import { Link } from "react-router-dom";

function Servicelink(props) {
    return (

        <div className="Servicebox-main services-sec-inner">
            <div className="Servicebox-icon position-relative">
                <img src={props.Serviceboxicon} className="img-fluid" alt={props.Serviceboxheading} />
            </div>
            <div className="Servicebox-dsc">
                <h3>{props.Serviceboxheading}</h3>
                <p>{props.Serviceboxdsc}</p>
                <Link to={props.servicedsclink} title="Read More">Read More</Link>
            </div>
        </div>
    );
}
export default Servicelink;

