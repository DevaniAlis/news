import React from "react"
import { Route, Routes } from "react-router-dom"
import { Header } from "./component/header"
import { News } from "./component/news"

export class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={ <News data="" /> }></Route>
          <Route path="/businessnews" element={ <News data="business" /> }></Route>
          <Route path="/entertainmentnews" element={ <News data="entertainment" /> }></Route>
          <Route path="/healthnews" element={ <News data="health" /> }></Route>
          <Route path="/sciencenews" element={ <News data="science" /> }></Route>
          <Route path="/sportsnews" element={ <News data="sports" /> }></Route>
          <Route path="/technews" element={ <News data="technology" /> }></Route>
        </Routes>
      </>
    )
  }
}