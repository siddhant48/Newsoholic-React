import React, { Component } from 'react'

export default function NewsItem(props) {
  return (
    <div className="my-3">
    <div className="card">
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: '0'
      }
      }>

        <span className="badge rounded-pill bg-danger"> {props.author} </span>
      </div>
      <img src={props.imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text"><small className="text-muted">By {props.author ? props.author : "Anonymous"} on {new Date(props.date).toGMTString()}</small></p>
        <a rel="noreferrer" href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
    </div>
  )

}
