import React from "react";
import './ImageGrid.css';

const ImageGrid = (props)=>{
    const respMap = props.data.map((x)=>{
        return (
        <div style={{'display':'block'}}>
          <div>{x.scraped_site.substring(0, 20) + "..."}</div>
            <div>{x._type === "I"? "Image": "Video" }</div>
          <div className="img-wrap" key={x._id}>
            {x._type === "I" ? <img src={x.url}></img>: 
            
            <video controls>
              <source src={x.url} type="video/mp4"/>
              Your browser does not support HTML video.
            </video>
            }
            
          </div>
         </div>
        )
        
      })
    return (
        <div className="img-grid">
          {respMap}
        </div>
    )
}

export default ImageGrid