import React, { Fragment, useContext } from 'react'
import {TestContext} from './pageTwo'

export default function Form(){
    const {person} = useContext(TestContext);
    return (
        <Fragment>
            {person.map((value,index) => {
                if (value.name){
                    console.log("要展示东西啦")
                    return (
                        <div key = {value+index} >
                            <li>{'Name: ' + value.name + ' Age: ' + value.age}</li>
                        </div>
                        )
                }
            }
        )}
        </Fragment>
    )
}