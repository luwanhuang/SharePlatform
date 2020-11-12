import React, {useState, Fragment, useEffect} from 'react'
import Total from './TotalTwo';

export const TestContext = React.createContext();

export default function PageTwo(){
    // console.log("主页面刷新啦")
    // useEffect(() => {
    //     console.log("useEffect来啦")
    //     return () => {
    //         console.log("useEffect走啦")
    //     }
    // },[])
    const [person, setPerson] = useState([]);
    return (
        <Fragment>
            <p>this is pageTwo</p>
            <div>
                <TestContext.Provider value={{person, setPerson}}>
                    <Total></Total>
                </TestContext.Provider>
            </div>
        </Fragment>
    )
}
