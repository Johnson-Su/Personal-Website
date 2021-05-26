const Overview= (props) => {
    
    var linkArray = props.links;
    var links = [];

    for (var i=0; i<linkArray.length; i++){
        var linkParts = linkArray[i].split('|');
        if( i===0 ){
            links.push(<a href={linkParts[1]} className="link otherlink" target="_blank" style={{marginRight:'8px'}}>{linkParts[0]}</a>);
        } else if ( i === linkArray.length-2 ){
            links.push(<a href={linkParts[1]} className="link otherlink" target="_blank" style={{marginRight:'8px',marginLeft:'8px'}}>{linkParts[0]}</a>);
        } else {
            links.push(<a href={linkParts[1]} className="link otherlink" target="_blank" style={{marginLeft:'8px'}}>{linkParts[0]}</a>);
        }
    }
    
    if (linkArray.copyright != ""){
        links.push(<p style={{opacity: '0.5',paddingTop:'20px'}}>{props.copyright}</p>);
    }

    var nospacetitle = props.title.replace(/\s/g, '');

    return (
    <>
    <div className="row mx-4">
    <div className="row bound row-eq-height greybackground mx-auto">

            <div className="col-md nopad my-auto mx-4">
                <div style={{padding:'10%'}}>
                    <p>// {props.status}</p>
                    <div style={{height:'0px',width:'100%'}}></div>
                    <h1>{props.title}</h1>
                    <div style={{height:'4px',width:'100%'}}></div>
                    <p>{props.desc}</p>
                    <div style={{height:'0px',width:'100%'}}></div>
                    <p>{props.solution}</p>
                    <div style={{height:'0px',width:'100%'}}></div>
                    {links}
                </div>
            </div>

            <div className="col-md nopad d-flex flex-wrap align-items-center" style={props.style}>
                <img src={require(`../../assets/ProjectAssets/${nospacetitle}/${props.image}`)} className="img-fluid nopad" style={{borderRadius: '12px'}}/>
            </div>
    </div>
    </div>
    </>
    )
}

export default Overview
