const DoubleImages= (props) => {
    var imageArray = props.images;
    var images = [];
    for(var i=0;i<imageArray.length;i++){
        var caption = props.captions[i];
        if (i%0 === 0){
            images.push(
                <div className="col-md nopad right">
                    <img src={"assets/ProjectAssets/"+imageArray[i]} className="img-fluid nopad" style={{borderRadius: '12px'}}/>
                    <div style={{height:'12px',width:'100%'}}></div>
                    <p>{caption}</p>
                    <div style={{height:'48px',width:'100%'}}></div>
                </div>)
        } else{
            images.push(
                <div className="col-md nopad left">
                    <img src={"assets/ProjectAssets/"+imageArray[i]} className="img-fluid nopad" style={{borderRadius: '12px'}}/>
                    <div style={{height:'12px',width:'100%'}}></div>
                    <p>{caption}</p>
                    <div style={{height:'32px',width:'100%'}}></div>
                </div>)
        }
    }

    return (
    <>
    <div className="row mx-4">
        <div className="row bound mx-auto">
            <h2>{props.title}</h2>
            <div style={{height:'24px',width:'100%'}}></div>
            <div className="row">
                {images}
            </div>
        </div>
    </div>
    </>
    )
}

export default DoubleImages
