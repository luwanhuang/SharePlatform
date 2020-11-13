import React, { Fragment, useState, useEffect } from 'react'
import HomeSearch from './homeSearch'
import HomeForm from './HomeForm'
import axios from "axios";

export default function Home(props){
    const [state, setState] = useState([])
    const div1 = {
        width: "900px",
        margin: "10px auto",
        minHeight: "200px",
        padding: "10px",
        boxSizing: "border-box",
      };
    useEffect(() => {
        axios.get("http://192.168.0.6:8181/task/findAll")
        .then(res => 
            // res.data.map(e => ({id:e.id, title: e.title}))
            
            setState(res.data)
        )
        }, [])
    return (
        <div style = {div1}>
                <HomeSearch setState = {setState}/>
                <HomeForm state = {state} />
        </div>
    )
}