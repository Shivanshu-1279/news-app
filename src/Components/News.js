import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from './Spinner'

export class News extends Component {

  static defaultProps={
        country:"in",
        pageSize:8,
        category: 'general',
  }
  static propTypes={
 country: PropTypes.string,
 pageSize:PropTypes.number,
 category: PropTypes.string,
  }

  constructor() {
    // Object is passed below, then only constructor will work.
    super();
    console.log("This is constructor from NewsItems");
    //"state" Object is created again
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  // API FETCH
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8adac170d874fd296098e16fed2f214&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }

  // Move Back
  moveToBack = async () => {
    console.log("BACK");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8adac170d874fd296098e16fed2f214&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
     this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    });
  };

  // Move Next
  moveToNext = async () => {
    console.log("NEXT");
    // Math ceil will give the round off or integer value of the next bigger number
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    } 
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8adac170d874fd296098e16fed2f214&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData.articles);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-4">
          {" "}
          <strong>Our NewsApp-Top headlines</strong>{" "}
         {this.state.loading &&<Spinner/>}
        </h1>
        <div className="row">
          {/* When we use higher order arrays maping, we generally use key to differentiate all the elements AND 
    The slice() method returns selected elements in an array, as a new array.*/}
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4 my-2" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 50) : ""}
                  description={
                    element.description ? element.description.slice(0, 190) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsURL={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.moveToBack}
          >
            &larr; Back
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.moveToNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;