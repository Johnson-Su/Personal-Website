import { Link } from 'react-router-dom';

const Largecard = (props) => {
    //pill generation
    var toolArray = props.tools.split(',');
    var languageArray = props.languages.split(',');
    var tools = [];
    var languages = [];
    for (var i=0; i<toolArray.length; i++){
        if (i===0){
            tools.push(<div className="first secondaryPill" >{toolArray[i]}</div>);
        } else if (i===toolArray.length){
            tools.push(<div className="secondaryPill">{toolArray[i]}</div>);
        } else {
            tools.push(<div className="last secondaryPill">{toolArray[i]}</div>);
        }
    }
    for (var i=0; i<languageArray.length; i++){
        if (i===0){
            languages.push(<div className="first mainPill">{languageArray[i]}</div>);
        } else if (i===toolArray.length){
            languages.push(<div className="mainPill">{languageArray[i]}</div>);
        } else {
            languages.push(<div className="last mainPill">{languageArray[i]}</div>);
        }
    }

    var nospacetitle = props.title.replace(/\s/g, '');

    return (
    <>
    <Link className="aa" to={nospacetitle}>
        <div className="card bound nopad max531">
            <div className="card-body nopad hovercard">
                <div className="row">
                    <div className="col-md-8 align-self-center" style={{paddingLeft: '10%',paddingRight: '10%',}}>
                        <div style={{height:'42px',width:'100%'}}></div>
                        <p>
                            {props.status}
                            <div style={{height:'16px',width:'100%'}}></div>
                            <h1>{props.title}</h1>
                            <div style={{height:'8px',width:'100%'}}></div>
                            {props.description}
                        </p>
                        <div style={{height:'12px',width:'100%'}}></div>
                        {languages}
                        <div style={{height:'0px',width:'100%'}}></div>
                        {tools}
                        <div style={{height:'32px',width:'100%'}}></div>
                    </div>
                    <div className="col nopad align-self-center" style={{border:'1px solid white'}}>
                        <div className="max531">
                            <img src={require(`../../assets/ProjectAssets/${props.title}/${props.imageName}`)} className="img-fluid notmobile nopad" style={{borderRadius: '0px 12px 12px 0px'}}/>
                            <img src={require(`../../assets/ProjectAssets/${props.title}/${props.imageMobile}`)} className="img-fluid mobile nopad" style={{borderRadius: '0px 0px 12px 12px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="monly" style={{height:'28px',width:'100%'}}></div>
    </Link>
    </>
    )
}

export default Largecard
