import React, { useState, useEffect } from "react";
import {Tag} from "antd";
import "../../css/tag.css"

export default function NewTag(props){
    const [userInput, setUserInput] = useState([])
    const arrayOne = ["#f50", "#2db7f5", "#87d068", "#108ee9", "#fbb417", "#c71585"]

    useEffect(()=>{
// console.log(array.every((e)=>e===props.name))
        if(props.tags !== "" && userInput.every((e)=>e!==props.tags) ){
            setUserInput([...userInput, props.tags])
            props.setFlag(false)
        }
    },[props.tags])
    const RemoveTag=e=> {
        let a = userInput.filter(value => {
            return value !== e});
        setUserInput(a)
        if(a.length === 0){
            props.setFlag(true);
        }
    }
    return(
            <div className={"tagDiv"}>
                {userInput.map((e,index)=>
                    <Tag color = {arrayOne[index%arrayOne.length]}
                         key = {index+e}
                         closable
                         onClose={()=>RemoveTag(e)}
                         style={{marginBottom:"4px"}}

                    >{e}</Tag>
                )}
            </div>

    );
}

