const GenericText= (props) => {
    return (
    <>
    <div className="row mx-4">
        <div className="row bound mx-auto">
            <h2>{props.title}</h2>
            <div style={{height:'24px',width:'100%'}}></div>
            {props.content}
        </div>
    </div>
    </>
    )
}

export default GenericText
