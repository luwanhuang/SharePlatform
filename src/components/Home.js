import React, { Fragment } from 'react'
import {TestProvider} from '../contexts/TestContext'
import HomeSearch from './homeSearch'
import HomeForm from './HomeForm'

export default function Home(){
    return (
        <Fragment>
            <TestProvider>
                <HomeSearch/>
                <HomeForm/>
            </TestProvider>
        </Fragment>
    )
}