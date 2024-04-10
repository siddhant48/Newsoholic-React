import NewsItem from './NewsItem'
import Loader from './Loader'
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from 'react'

export default function News(props) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `${capitalizeFirstLetter(props.category)} - Newsoholic`;


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateData = async () => {
        setLoading(true);
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}&category=${props.category}`;
        let data = await fetch(url);
        props.setProgress(30);
        let jsonData = await data.json();
        props.setProgress(70);
        setArticles(jsonData.articles);
        setLoading(false);
        setTotalResults(jsonData.totalResults);
        props.setProgress(100);
    }

    // const componentDidMount =  async ()=> {
    //     this.setState({page: 1}, () => {
    //         this.updateData();
    //     });

    // }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - Newsoholic`;
        updateData();
    }, [])

    const previousPage = async () => {
        setPage(page - 1);
        updateData();
    }

    const nextPage = async () => {
        setPage(page + 1);
        updateData();
    }

    const fetchMoreData = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page+1}&category=${props.category}`;
        setPage(page + 1);
        let data = await fetch(url);
        props.setProgress(30);
        let jsonData = await data.json();
        props.setProgress(70);
        setArticles(articles.concat(jsonData.articles));
        setTotalResults(jsonData.totalResults);
        props.setProgress(100);
    }

    return (
        <div className={"container my-3"}>
            <h1 className='text-center' style={{ margin: "90px 0px 15px 0px" }}>Newsoholic - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Loader />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Loader />}
            >
                <div className="container text-center">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                                    imgUrl={element.urlToImage ? element.urlToImage : "https://cdn.pixabay.com/photo/2014/08/07/21/13/newspaper-412811_640.jpg"} newsUrl={element.url}
                                    author={element.author} date={element.publishedAt} />
                            </div>

                        })

                        }
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between my-3">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-secondary" onClick={this.previousPage}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page * 20 > this.totalResults} className="btn btn-secondary" onClick={this.nextPage}>Next &rarr;</button>
                </div> */}
        </div>
    )

}
