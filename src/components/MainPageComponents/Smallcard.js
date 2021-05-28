import { Link } from 'react-router-dom';

const Smallcard = (props) => {
    //pill generation
    var toolArray = props.tools.split(',');
    var languageArray = props.languages.split(',');
    var tools = [];
    var languages = [];
    for (var i=0; i<toolArray.length; i++){
        if (i===0){
            tools.push(<div className="first secondaryPillsm" >{toolArray[i]}</div>);
        } else if (i===toolArray.length){
            tools.push(<div className="secondaryPillsm">{toolArray[i]}</div>);
        } else {
            tools.push(<div className="last secondaryPillsm">{toolArray[i]}</div>);
        }
    }
    for (var i=0; i<languageArray.length; i++){
        if (i===0){
            languages.push(<div className="first mainPillsm">{languageArray[i]}</div>);
        } else if (i===toolArray.length){
            languages.push(<div className="mainPillsm">{languageArray[i]}</div>);
        } else {
            languages.push(<div className="last mainPillsm">{languageArray[i]}</div>);
        }
    }

    var nospacetitle = props.title.replace(/\s/g, '');

    return (
    <div className="col-sm-6 nopad " style={{paddingRight:'26px',paddingLeft:'26px'}}>
        <Link className='aa' to={nospacetitle}>
        <div className="card nopad hovercard">
            <div className="card-body smallBound nopad ">
                <div className="row align-items-start h384" style={{paddingRight:'10%',paddingLeft:'10%'}}>
                        <div style={{height:'42px',width:'100%'}}></div>
                        <p>
                            {props.status}
                            <div style={{height:'12px',width:'100%'}}></div>
                            <h2>{props.title}</h2>
                            <div style={{height:'12px',width:'100%'}}></div>
                            <p>{props.description}</p>
                            <div style={{height:'12px',width:'100%'}}></div>
                            {languages}
                            <div style={{height:'0px',width:'100%'}}></div>
                            {tools}
                        </p>
                        <div style={{height:'32px',width:'100%'}}></div>
                </div>
                <div className="row">
                    <img src={"/assets/ProjectAssets/"+nospacetitle+"/"+props.imageName} className="img-fluid nopad" style={{borderRadius: '0px 0px 12px 12px', height:'auto'}}/>
                </div>
            </div>
        </div>
        </Link>
        <div style={{height:'48px',width:'100%'}}></div>
    </div>
    )
}

export default Smallcard
