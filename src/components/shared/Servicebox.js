

function Servicebox(props) {
    return (

        <div className="Servicebox-main services-sec-inner">
            <div className="Servicebox-icon position-relative">
                <img src={props.Serviceboxicon} className="img-fluid" alt={props.Serviceboxheading} />
            </div>
            <div className="Servicebox-dsc">
                <h3>{props.Serviceboxheading}</h3>
                <p>{props.Serviceboxdsc}</p>
            </div>
        </div>

    );
}
export default Servicebox;

