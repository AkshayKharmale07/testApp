
import { Link } from "react-router-dom";

function ServicesSection(props) {
    return (

        <>  
        <div className="services-panel-block services-sec-inner">
            <div className="services-panel-main mb-xl-0 mb-md-4">
                <div className="services-icon position-relative">
                    <Link to={props.servicedsclink} title="Read More">
                        <img src={props.serviceicon} className="img-fluid" alt={props.serviceheading} /><span>Read More</span>
                    </Link>
                </div>
                <div className="service-heading services-sec-inner-dsc"><h3>{props.serviceheading}</h3>
                    <p>{props.servicedsc}</p>
                </div>
            </div>
        </div>
        </>
    );
}
export default ServicesSection;

