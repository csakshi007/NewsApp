import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import propTypes from 'prop-types'

const News=(props)=> {

const [articles, setArticles]=useState([])
const [loading, setLoading]=useState(true)
const [page, setPage]=useState(1)
const [totalResults, setTotalResults]=useState(0)

const capitalizeFirstLetter=(string)=>{
return string.charAt(0).toUpperCase()+string.slice(1);
}

const updateNews =async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
}

useEffect(()=>{
  updateNews()
}, [])


  const handlePrevClick = async () => {
    setPage(page-1)
    updateNews()
  };


  const handleNextClick = async () => {
setPage(page+1)
updateNews()
  };

  
    return (
      <div className="container my-3">
        <h2 style={{margin: '80px 20px 20px 0' }} className="text-center">NewsMonkey - Top {capitalizeFirstLetter(props.category)} headlines</h2>
    { loading && <Spinner/>}
        <div className="container row">
          {!loading && articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
          disabled= {page+1> Math.ceil(totalResults/props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
}


News.defaultProps={
  country:'in',
  pageSize:5,
  category:'general'
}

News.propTypes={
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string
}

  export default News;
