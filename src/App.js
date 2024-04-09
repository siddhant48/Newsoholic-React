import React, { Component } from 'react'
import Loader from './Component/Loader'
import Navbar from './Component/Navbar'
import News from './Component/News'
import NewsItem from './Component/NewsItem'
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  render() {
    return (
    <Router>
       <div>
        <Navbar/>
        {/* <News/> */}
      <Routes>
        <Route  exact path="/" element={<News apiKey={this.apiKey} key="all" category="all" pageSize="8" category="general"/>} />
        <Route  exact path="/business" element={<News apiKey={this.apiKey} key="business" category="business" pageSize="8"  />} />
        <Route  exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment"  category="entertainment" pageSize="8" />} />
        <Route  exact path="/general" element={<News apiKey={this.apiKey} key="general" category="general" pageSize="8" />} />
        <Route  exact path="/health" element={<News  apiKey={this.apiKey} key="health" category="health" pageSize="8" />} />
        <Route  exact path="/science" element={<News apiKey={this.apiKey} key="science"  category="science" pageSize="8"  />} />
        <Route  exact path="/sports" element={<News apiKey={this.apiKey} key="sports" category="sports" pageSize="8"  />} />
        <Route  exact path="/technology" element={<News apiKey={this.apiKey} key="technology" category="technology" pageSize="8"  />} />
      </Routes>
      </div>
    </Router>
      
      
     
    )
  }
}
