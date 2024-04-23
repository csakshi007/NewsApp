import React from "react";

const Newsitem =(props)=> {


    let {title, description, imageurl, newsUrl,author,date,source} = props;
    // const date1= new Date(date)
    return (
      <div className="container my-3"> 
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
        <span className="badge rounded-pill bg-danger" style={{zIndex: '1', left:'90%'
      }}>{source}</span>
      </div>
          <img src={!imageurl?"https://www.hindustantimes.com/ht-img/img/2024/03/11/1600x900/Lucknow_airport__1710152843567_1710152847856.JPG":imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">by {!author? 'unknown': author} on {new Date(date).toISOString}</p>
            
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}

export default Newsitem;