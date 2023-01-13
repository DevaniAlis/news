import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../App.css"
import { Header } from "../header";
import { Fetch } from "./FetchNews";

export const News = (data) => {
    const [val, setval] = useState(data.data)
    const sdata = useSelector((i) => i.Marketer)

    if (sdata !== "") {
        setval(sdata)
    }

    return (
        <>
            <Header />
            <div className="App">
                <h1 className="fs-2 fw-bolder p-3">Top HeadLines</h1>
                <Fetch data={val} />
            </div>
        </>
    )
}