import React, { Fragment, useState } from 'react'
import {TestProvider} from '../contexts/TestContext'
import HomeSearch from './homeSearch'
import HomeForm from './HomeForm'

export default function Home(){
    const [state, setState] = useState([])
    return (
        <Fragment>
            <TestProvider>
                <HomeSearch setState = {setState}/>
                <HomeForm state = {state} />
            </TestProvider>
        </Fragment>
    )
}