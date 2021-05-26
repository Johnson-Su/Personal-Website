//this intro doesnt really need to be changed

const Aboutme = (props) => {
    return (
        <div className="container-fluid">
            <div className="row" style={{justifyContent: 'center',}}>
                <div className="row mx-3 bound" style={{width:'100%'}}>

                    {/* Title Col */}
                    <div className="col-md">
                        <h1 className="titlewidth" style={{paddingBottom:'12px', width:''}}>{props.title}</h1>
                    </div>

                    {/* Content Col */}
                    <div className="col-md">
                        {props.content1}
                        <div style={{height:'24px',width:'100%'}}></div>
                        <img src='/assets/thatme.png' style={{width:'80%'}}/>
                        <div style={{height:'42px',width:'100%'}}></div>
                        {props.content2}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Aboutme 
