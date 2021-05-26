const Probsol= (props) => {
    return (
    <>
    <div className="container-md nopad mx-auto">
        <div className="row">

            <div className="col-md nopad my-auto">
                <div className="mx-4">
                    <h4><b style={{color:'#212121'}}>Problem</b></h4>
                    <p>{props.problem}</p>
                    <div style={{height:'12px',width:'100%'}}></div>
                    <h4><b style={{color:'#212121'}}>Solution</b></h4>
                    <p>{props.solution}</p>
                </div>
            </div>

            <div className="col-md nopad my-auto mnone">
                <div className="mx-4">
                    <h4><b style={{color:'#212121'}}>{props.optionname}:</b></h4>
                    <p>{props.optioncontent}</p>
                    <h4><b style={{color:'#212121'}}>Tools used:</b></h4>
                    <p>{props.tools}</p>
                    <h4><b style={{color:'#212121'}}>Team:</b></h4>
                    <p>{props.team}</p>
                    <h4><b style={{color:'#212121'}}>Duration:</b></h4>
                    <p>{props.duration}</p>
                </div>
            </div>

            <div className="col-md nopad my-auto monlync">
                <div className="mx-4">
                    <div style={{height:'18px',width:'100%'}}></div>
                    <p><b style={{color:'#212121'}}>{props.optionname}: </b>{props.optioncontent}</p>
                    <p><b style={{color:'#212121'}}>Tools used: </b>{props.tools}</p>
                    <p><b style={{color:'#212121'}}>Team: </b>{props.team}</p>
                    <p><b style={{color:'#212121'}}>Duration: </b>{props.duration}</p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Probsol
