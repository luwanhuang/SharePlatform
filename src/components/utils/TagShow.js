import React, {useState, useEffect} from "react";
import {Tag} from "antd";
import "../../css/tag.css"

export default function TagShow(props){
    const arrayOne = ["#f50", "#2db7f5", "#87d068", "#108ee9", "#fbb417", "#c71585"]
    const [tagShow, setTagShow] = useState([]);
    useEffect(()=>{
        if(props.tags !== "" &&props.tagInput!=null){
            let a = props.tagInput.split("_!_");
            setTagShow([...a])
        }
    },[props.tagInput])
    return(
        <div className={"tagDiv"}>
            {tagShow.map((e,index)=>{
                if(e===""){
                    return null;
                }else{
                    return <Tag color = {arrayOne[index%arrayOne.length]}
                                key = {index+e}
                                style={{marginBottom:"6px"}}
                    >{e}</Tag>
                }
            }

            )}
        </div>

    );
}

