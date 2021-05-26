const ImageWCaption= (props) => {
    return (
    <>
    <div className="row mx-4">
        <div className="row bound mx-auto">
            <h2>{props.title}</h2>
            <div style={{height:'24px',width:'100%'}}></div>
            <img src={"assets/ProjectAssets/"+props.image} className="img-fluid nopad" style={{borderRadius: '12px'}}/>
            <p>{props.caption}</p>
        </div>
    </div>
    </>
    )
}

export default ImageWCaption
