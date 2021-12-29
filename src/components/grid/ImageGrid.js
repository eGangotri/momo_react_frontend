import React from "react";

const ImageGrid = (props)=>{
    const respMap = props.data.map((x)=>{
        return (
        <div className="img-wrap" key={x._id}>
        <img src={x.urlsascsv.split(",")[0]}></img>
        </div>)
        
      })
    return (
        <div className="img-grid">
          {respMap}
        </div>
    )
}

export default ImageGrid