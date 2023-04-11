// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
                                         
const NewsItem=(props)=>{
    
  let {title, description,imageUrl,newsURL, date,name} = props
    return (
        <div>
                                                                           
<div className="card" >
  <div style={{display: 'flex',
              position: 'absolute',
              justifyContent: 'flex-end',
              right: '0'}}>
                                                              
<span className="badge rounded-pill bg-danger">
    {name}
  </span>
    </div>
  <img src={!imageUrl?"https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png" :imageUrl} 
  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}....</h5>
    <p className="card-text">{description}....</p>
    <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-outline-primary">Read More..</a>
    <p className="card-text"><small className="text-muted"> Published on {new Date(date).toGMTString()} </small></p>
  </div>
</div>
</div>
    )
  }                                                   
                                                    
export default NewsItem