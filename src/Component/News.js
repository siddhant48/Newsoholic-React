import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import { toHaveStyle } from '@testing-library/jest-dom/matchers';

export default class News extends Component {
    totalResults = 20;
    constructor(props) {
        super(props);
        this.state = {
            article: [],
            page: 1,
            loading: false
        }
        document.title = `${this.capitalize(this.props.category)} - Newsoholic`;
    }

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async updateData() {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}&category=${this.props.category}`;
        let data = await fetch(url);
        let jsonData = await data.json();
        this.setState({
            article: jsonData.articles,
            loading: false
        });
    }

    async componentDidMount() {
        // this.setState({ loading: true })
        // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=1&category=${this.props.category}`;
        // let data = await fetch(url);
        // let jsonData = await data.json();
        // this.totalResults = jsonData.totalResults;
        // this.setState({
        //     article: jsonData.articles,
        //     page: 1,
        //     loading: false
        // });
        //this.setState({page: 1});
        this.setState({page: 1}, () => {
            this.updateData();
        });
    }

    previousPage = async () => {

        // this.setState({ loading: true })
        // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page - 1}&category=${this.props.category}`;
        // let data = await fetch(url);
        // let jsonData = await data.json();
        // this.setState({
        //     article: jsonData.articles,
        //     page: this.state.page - 1,
        //     loading: false
        // });
        this.setState({page: this.state.page - 1}, () => {
            this.updateData();
        });
    }

    nextPage = async () => {
        // this.setState({ loading: true })
        // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}&category=${this.props.category}`;
        // let data = await fetch(url);
        // let jsonData = await data.json();
        // this.setState({
        //     article: jsonData.articles,
        //     page: this.state.page + 1,
        //     loading: false
        // });
        this.setState({page: this.state.page + 1}, () => {
            this.updateData();
        });
        // this.updateData();
        // console.log("End next"+this.state.page);

    }


    render() {
        return (
            <div className={"container my-3"}>
                <h1 className='text-center' style={{ margin: "25px 0px 40px 0px" }}>Newsoholic - Top {this.capitalize(this.props.category)} Headlines</h1>
                {this.state.loading && <Loader />}
                <div className="container text-center">
                    <div className="row">
                        {!this.state.loading && this.state.article.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                                    imgUrl={element.urlToImage ? element.urlToImage : "https://cdn.pixabay.com/photo/2014/08/07/21/13/newspaper-412811_640.jpg"} newsUrl={element.url}
                                    author={element.author} date={element.publishedAt}/>
                            </div>

                        })

                        }
                    </div>
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-secondary" onClick={this.previousPage}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page * 20 > this.totalResults} className="btn btn-secondary" onClick={this.nextPage}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
