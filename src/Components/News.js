import React, { useState , useEffect } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
              
 const News=(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(-1)
  const [totalResults, setTotalResults] = useState(0)
  
 const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
          
    // Title will change according to the category we are reading and a function is used which will make the first letter capital.
      document.title=`${capitalizeFirstLetter(props.category)} -NewsApp`;
  
                                                                                                
// we have created an updation function which can be used in previous and forward page 
const updation = async()=> {
  props.setProgress(30);
  setPage(2);
  let url =
    `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e8adac170d874fd296098e16fed2f214&page=${page}&pageSize=${props.pageSize}`;     
    
// let url = `https://gnews.io/api/v4/top-headlines?country=${props.country}&lang=en&topic=${props.category}&token=c59ec6468a508ce0f6e69e1efabcd08e&page=${page}&pagesize=${props.pagesize}`;
  
setLoading(true);
  let data = await fetch(url);
  // props.setProgress(30);
  // console.log(data);
  let parsedData = await data.json();
  props.setProgress(70);
  // console.log(parsedData);
  setArticles(parsedData.articles)
  setTotalResults(parsedData.totalResults)
  setLoading(false)
  props.setProgress(100);
};
                     

  useEffect(() => {
    updation(); 
}, [])
                                                      
const fetchMoreData = async () =>{
  setPage(page+1);
  let url =
   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=e8adac170d874fd296098e16fed2f214&page=${page}&pageSize=${props.pageSize}`;
   
  // let url = `https://gnews.io/api/v4/top-headlines?country=${props.country}&lang=en&topic=${props.category}&token=c59ec6468a508ce0f6e69e1efabcd08e&page=${page}&pagesize=${props.pagesize}`;
 
  let data = await fetch(url);
 let parsedData = await data.json();
   setArticles(articles.concat(parsedData.articles))
   setTotalResults(parsedData.totalResults)
   // setloading(false)
 };
                           
                                     
   return (
      <>
        <h1 className="text-center my-23" style={{marginTop:'96px'}}>
          {" "}
          <strong style={{fontStyle:'italic', fontSize:'41px'}} >Top Headlines on- {capitalizeFirstLetter(props.category)}</strong>{" "}
        </h1>
        {loading &&<Spinner/>}
        {/* {<Spinner/>} */}
        <InfiniteScroll
          dataLength={articles}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className="container"  style={{paddingTop:'24'}}>
        <div className="row" style={{paddingTop:'24'}}>
          {articles.map((element) => {
            return (
              <div className="col-md-4 my-2" key={element.url}>
                <NewsItem 
                  title={element.title ? element.title.slice(0, 50) : ""}
                  description={ element.description ? element.description.slice(0, 190) : ""}
                  imageUrl={element.urlToImage}
                  newsURL={element.url}
                  author={element.author}
                  date = {element.publishedAt}
                  name = {element.source.name}
                />
                  </div>
            );
          })}
              </div>
        </div>
        </InfiniteScroll>
        </>
    );
  
      
News.defaultProps={
  country:"in",
  pageSize:8,
  category: 'general',
}
                                            
News.propTypes={
country: PropTypes.string,
pageSize:PropTypes.number,
category: PropTypes.string,
}

}

export default News;