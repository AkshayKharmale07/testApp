import Helmet from "react-helmet";
function Meta(props) {

    return (
        <div className="metasec">
        <Helmet> 
            <title>{props.title}</title>
            <meta name="description" content="props.description" />
            <meta name="keyword" content="props.keyword" />
            <link rel="canonical" href="http://mysite.com/example" /> 
        </Helmet>
        </div>


    );
}

export default Meta;