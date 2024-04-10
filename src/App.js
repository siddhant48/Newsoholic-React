import React, { Component } from 'react'
import Loader from './Component/Loader'
import Navbar from './Component/Navbar'
import News from './Component/News'
import NewsItem from './Component/NewsItem'
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     progress: 0
  //   };
  // }
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({
      progress: progress
    });
  }
  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  render() {
    return (
    <Router>
       <div>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
      <Routes>
        <Route  exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="all" category="all" pageSize="20" category="general"/>} />
        <Route  exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" category="business" pageSize="20"  />} />
        <Route  exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment"  category="entertainment" pageSize="20" />} />
        <Route  exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" category="general" pageSize="20" />} />
        <Route  exact path="/health" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="health" category="health" pageSize="20" />} />
        <Route  exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science"  category="science" pageSize="20"  />} />
        <Route  exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" category="sports" pageSize="20"  />} />
        <Route  exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" category="technology" pageSize="20"  />} />
      </Routes>
      </div>
    </Router>
      
      
     
    )
  }
}
