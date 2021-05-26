const Sayhi = () => {
    return (
    <div className="container-fluid">
        <div className="spacerL"></div>
        <div className="row" style={{justifyContent: 'center',}}>
            <div className="row  mx-4 bound" style={{width:'100%'}}>

                {/* Title Col */}
                <div className="col-md nopad" style={{marginBottom:'12px'}}>
                    <h1>Say Hello!</h1>
                </div>

                {/* Content Col */}
                <div className="col-md nopad">
                <p>
                    You can reach me through my <a href="https://www.linkedin.com/in/johnson-su/" className="link" target="_blank"><span>LinkedIn
                    </span></a> or send me an <a href="mailto: johnsonn.su@mail.utoronto.ca" className="link"><span>email</span></a>.
                    Whether you want to do a Hackathon with me or get to know
                    me better I’d be happy to talk with you!
                </p>
                </div>

            </div>
            <div style={{height:'32px',width:'100%'}}></div>
        </div>
        <div className="spacerL"></div>
    </div>
    )
}

export default Sayhi
