import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
// import PropTypes from 'prop-types';


export class News extends Component {
  
  // static defaultProps = {
  //   country : 'in',
  //   pageSize: 8,
  //   category : 'general'
  // }

  // static propTypes = {
  //   country : PropTypes.string,
  //   pageSize : PropTypes.number,
  //   category : PropTypes.string
  // }
   

  // articles =[


  //       {
  //         "source": {
  //           "id": "bbc-sport",
  //           "name": "BBC Sport"
  //         },
  //         "author": null,
  //         "title": "History of cricket in the USA: The sport's significant roots across the pond",
  //         "description": "Exploring cricket's roots in the United States, and why the future could be bright for the sport heading into the men's Tthis.props.pageSize World Cup.",
  //         "url": "http://www.bbc.co.uk/sport/cricket/articles/cekkjxlvpp8o",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/fc2c/live/16499070-192c-11ef-80aa-699d54c46324.jpg",
  //         "publishedAt": "this.props.pageSize24-05-29T06:52:15.091003Z",
  //         "content": "These matches and the men that played in them, now misty with time, suggest a kind of sliding doors moment, a chance for the sport of cricket to lay its roots down in the USA just as modernity was ta… [+1347 chars]"
  //       },
  //       {
  //         "source": {
  //           "id": "espn-cric-info",
  //           "name": "ESPN Cric Info"
  //         },
  //         "author": null,
  //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //         "publishedAt": "this.props.pageSizethis.props.pageSize-04-27T11:41:47Z",
  //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //       },
  //       {
  //         "source": {
  //           "id": "espn-cric-info",
  //           "name": "ESPN Cric Info"
  //         },
  //         "author": null,
  //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //         "publishedAt": "this.props.pageSizethis.props.pageSize-03-30T15:26:05Z",
  //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //       }
  //     ]

  constructor() {
    super();
    console.log("hello, I am a constructor");
    this.state = {
      // articles: this.articles,
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-05-03&sortBy=publishedAt&apiKey=322d9e42cd2b406092e5cab4daef7487&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles ,
       totalResults : parsedData.totalResults ,
       loading:false })
  }

                          
                ndlePrevClick =async() => {
    console.log("Previous");

    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-05-03&sortBy=publishedAt&apiKey=322d9e42cd2b406092e5cab4daef7487&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
     articles: parsedData.articles ,
     loading:false
    })
  };

  handleNextClick =async() => {
    console.log("Next");

    if(!(this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-05-03&sortBy=publishedAt&apiKey=322d9e42cd2b406092e5cab4daef7487&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page + 1,
     articles: parsedData.articles ,
     loading:false})}
  };

  render() {
    return (
      <>
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && < Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles? (this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            )
          })):<h1>Loading</h1>
        }
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr;Previous
          </button>
          <button disabled={this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
      </>
    );
  }
}

export default News;
