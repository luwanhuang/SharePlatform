import React, { Fragment, useState, useEffect } from 'react'
import HomeSearch from './homeSearch'
import HomeForm from './HomeForm'
import axios from "axios";

export default function Home(props){
    const [state, setState] = useState([])
    useEffect(() => {
        axios.get("http://192.168.0.6:8181/task/findAll")
        .then(res => 
            // res.data.map(e => ({id:e.id, title: e.title}))
            
            setState(res.data)
        )
        }, [])
    return (
        <Fragment>
                <HomeSearch setState = {setState}/>
                <HomeForm state = {state} />
        </Fragment>
    )
}