import React, {useReducer} from "react"

export const TestContext = React.createContext();

export const TestProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <TestContext.Provider value={{state, dispatch}}>
            {children}
        </TestContext.Provider>
    )
}

const reducer = (state,action)=>{
    let array = [...state];
    switch(action.type){
        case "add":
            array.push(action.data);
            return array;
        case "sub":
            array.splice(action.data,1);
            array.forEach(element => {
                console.log(element)
            });
            return array;
        default:
            return state;
    }
    

}