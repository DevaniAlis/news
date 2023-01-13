import React, { useState } from "react"
import { Container } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Search } from "../../actions"
import "./css/style.css"

export const Header = () => {
    const [val,setval] = useState(0)
    const unload = useDispatch()
    
    if(val !== 0) {
        unload(Search(val))
    }

    return (
        <div>
            <header class="p-3 hea">
                <Container fluid>
                    <div class="container">
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                                {/* <div className="image">
                                        <img src={require("./Images/news.jfif")}></img>
                                    </div> */}
                                {/* <h1 className="fs-5 m-0">TIMES OF INDIA NEWS</h1> */}
                            </a>

                            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li><a href="/" class="px-2 nav-click">Home</a></li>
                                <li><a href="/businessnews" class="px-2 nav-click">Business</a></li>
                                <li><a href="/entertainmentnews" class="px-2 nav-click">Entertainment</a></li>
                                <li><a href="/healthnews" class="px-2 nav-click">Health</a></li>
                                <li><a href="/sciencenews" class="px-2 nav-click">Science</a></li>
                                <li><a href="/sportsnews" class="px-2 nav-click">Sports</a></li>
                                <li><a href="/technews" class="px-2 nav-click">Technology</a></li>
                            </ul>

                            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                                <input type="text" class="form-control form-control-dark " placeholder="Search" onChange={(i) => { setval(i.target.value) }} />
                            </form>
                        </div>
                    </div>
                </Container>
            </header>
        </div>
    )
}