import { toHaveDescription } from '@testing-library/jest-dom/matchers';
import React, { Component } from 'react'

export default class NewsItem extends Component {
  constructor() {
    super();
  }
  render() {
    //  let {title,description,imgUrl,newsUrl} = this.props;
    return (
      <div className="card" style={{ margin: "20px 0px" }}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        }
        }>

          <span className="badge rounded-pill bg-danger"> {this.props.author} </span>
        </div>
        <img src={this.props.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body" style={{ margin: "50px" }}>
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <p className="card-text"><small className="text-muted">By {this.props.author ? this.props.author : "Anonymous"} on {new Date(this.props.date).toGMTString()}</small></p>
          <a href={this.props.newsUrl} className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}
