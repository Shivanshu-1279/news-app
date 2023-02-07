import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {

  render() {
    let {title, description,imageUrl,newsURL} = this.props
    return (
        <div>
<div className="card" >
  <img src={!imageUrl?"https://media.cnn.com/api/v1/images/stellar/prod/230127200533-01-nichols-video-screengrab.jpg?c=16x9&q=w_800,c_fill" :imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}....</h5>
    <p className="card-text">{description}....</p>
    <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-outline-primary">Read More..</a>
  </div>
</div>
</div>
    )
  }
}

export default NewsItem