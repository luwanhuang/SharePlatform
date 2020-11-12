import React, { useState, Fragment, useContext} from 'react'
import {TestContext} from './pageTwo'

export default function Search(){
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const {person, setPerson} = useContext(TestContext);
    return (
        <Fragment>
            <p>Name: </p>
            <input value = {name} onChange = {(e) => {setName(e.target.value)}}></input>
            <p>Age: </p>
            <input value = {age} onChange = {(e) => {setAge(e.target.value)}}></input>
            <button onClick = {() => { let array = person;
            array.push({name,age});
            setPerson([...array]);
            }}>Search</button>
        </Fragment>
    )
}

