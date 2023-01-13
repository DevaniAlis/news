import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import "./css/style.css"

export const Fetch = (category) => {
    const [news, setnews] = useState([])
    
    useEffect(()=>{
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category.data}&apiKey=4374c05145674b4483fb6b9fdb696e50`)
            .then(function (fetch) {
                setnews([...fetch.data.articles])
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    return (
        <>
            {
                <Container>
                    <div className="d-grid grid-columns">
                        {
                            news.map((i) => {
                                if (i.urlToImage !== null) {
                                    return (
                                        <div className="news" data-aos="zoom-in-up" data-aos-delay="20"
                                        data-aos-duration="1000">
                                            <div className="image-news">
                                                <img src={i.urlToImage} alt="Not Found"></img>
                                            </div>
                                            <div className="content p-2">
                                                <h1>{i.title}</h1>
                                                <p className="p-2">{i.description}</p>
                                                <div className="btn-taker">
                                                    <a href={i.url} target="_blank" className="btn btn-dark">Read More</a>
                                                </div>
                                                <p className="p-2">{i.content}</p>
                                                <p className="text-right p-2">{i.publishedAt}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </Container>
            }
        </>
    )
}
