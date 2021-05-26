const Workcard = (props) => {
    //pill generation
    var toolArray = props.tools.split(',');
    var tools = [];
    for (var i=0; i<toolArray.length; i++){
        if (i===0){
            tools.push(<div className="first secondaryPillsm" >{toolArray[i]}</div>);
        } else if (i===toolArray.length){
            tools.push(<div className="secondaryPillsm">{toolArray[i]}</div>);
        } else {
            tools.push(<div className="last secondaryPillsm">{toolArray[i]}</div>);
        }
    }

    return (
    <>
    <div className="col-sm-6 nopad" style={{paddingLeft:'26px',paddingRight:'26px'}}>
        <a className="aa" href={props.linkPath} target="_blank">
        <div className="card nopad hovercard">
            <div className="card-body smallBound nopad ">
                <div className="row align-items-start h384" style={{paddingRight:'10%',paddingLeft:'10%'}}>
                        <div style={{height:'42px',width:'100%'}}></div>
                        <div className="row" style={{width:'100%',paddingBottom:"12px"}}>
                            <p className="nopad">{props.time}<br/><b style={{}}>{props.company}</b></p>
                        </div>
                        <h3 style={{paddingBottom:"8px"}}><b style={{color:'black'}}>{props.title}</b></h3>
                        <p style={{paddingBottom:"12px"}}>{props.description}</p>
                        {tools}
                        <div style={{height:'32px',width:'100%'}}></div>
                </div>
            </div>
        </div>
        </a>
        <div style={{height:'48px',width:'100%'}}></div>
    </div>
    </>
    )
}

export default Workcard
