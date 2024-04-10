import React, {useState } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function App() {

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="all" category="all" pageSize="20" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" category="business" pageSize="20" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" category="entertainment" pageSize="20" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" category="general" pageSize="20" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" category="health" pageSize="20" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" category="science" pageSize="20" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" category="sports" pageSize="20" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" category="technology" pageSize="20" />} />
        </Routes>
      </div>
    </Router>



  )

}
