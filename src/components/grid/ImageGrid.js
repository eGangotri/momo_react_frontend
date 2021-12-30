import React from "react";

const ImageGrid = (props)=>{
    const respMap = props.data.map((x)=>{
        return (
        <frag>
          <div className="img-wrap" key={x._id}>
            {x._type === "I" ? <img src={x.url}></img>: <video src={x.url}></video>}
            </div>
                <div>{x.scraped_site.substring(0, 20) + "..."}</div>
                <div>{x._type === "I"? "Image": "Video" }</div>
         </frag>
        )
        
      })
    return (
        <div className="img-grid">
          {respMap}
        </div>
    )
}

export default ImageGrid