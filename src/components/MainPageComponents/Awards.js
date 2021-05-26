const Awards = (props) => {
    //Award generation
    var yearArray = props.awards.split('|');
    var col2 = [];

    function awardSplitter(awardArray){
        var col = [];
        for (var i=0; i<awardArray.length; i++){
            var pointsArray = awardArray[i].split('-');
            col.push(<div style={{height:'2px',width:'100%'}}></div>);
            col.push(<p><b style={{color:'black'}}>{pointsArray[0]}</b></p>);
            col.push(<div style={{height:'0px',width:'100%'}}></div>);
            for (var j=1; j<pointsArray.length; j++){
                col.push(<p>• {pointsArray[j]} </p>);
                col.push(<div style={{height:'0px',width:'100%'}}></div>);
            }
            if(i!=awardArray.length-1){
                col.push(<div className="mnone" style={{height:'0px',width:'100%',border:'1px solid #DCDCDC',borderRadius:'2px'}}></div>);
            }
            col.push(<div style={{height:'10px',width:'100%'}}></div>);
        }
        return col;
    }

    function yearSplitter(yearArray,a){
        var col1 = [];
        col1.push(<div className="col-md nopad" style={{marginBottom:'12px'}}>
            <h1>{yearArray[a]}</h1>
            <div className="monly" style={{height:'4px',width:'100%'}}></div>
            <div className="monly" style={{height:'0px',width:'100%',border:'1px solid #651FFF',borderRadius:'2px'}}></div>
            <div className="monly" style={{height:'8px',width:'100%'}}></div>
        </div>)
        var awardArray=yearArray[a+1].split(",");
        var splitterResult=awardSplitter(awardArray);
        col1.push(<div className="col-md nopad" >{splitterResult}</div>)
        return col1;
    }

    for (var a=0; a<yearArray.length; a=a+2){
        var result=yearSplitter(yearArray,a);
        col2.push(<div className="row mx-4 bound" style={{width:'100%',marginBottom:'48px'}}>{result}</div>);
    }

    return ( 
    <div className="row bound">{col2}</div>
    )
}

export default Awards