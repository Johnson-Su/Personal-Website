const MultipleImages= (props) => {
    var imageArray = props.images;
    var images = [];
    for(var i=0;i<imageArray.length;i++){
        var caption = props.captions[i];
        images.push(<img src={require(`../../assets/ProjectAssets/${imageArray[i]}`)} className="img-fluid nopad" style={{borderRadius: '12px'}}/>);
        if(i!=0 || i!=imageArray.length){
            images.push(<div style={{height:'12px',width:'100%'}}></div>);
        }
        if(props.captions != []){
            images.push(caption);
        }
        if(i!=0 || i!=imageArray.length){
            images.push(<div style={{height:'48px',width:'100%'}}></div>);
        }
    }
    return (
    <>
    <div className="row mx-4">
        <div className="row bound mx-auto">
            <h2>{props.title}</h2>
            <div style={{height:'24px',width:'100%'}}></div>
            {images}
        </div>
    </div>
    </>
    )
}

export default MultipleImages
