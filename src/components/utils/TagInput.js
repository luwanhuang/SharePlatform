import React, {useState} from "react";
import {Input} from "antd";

export default function TagInput(props){
    const [msg, setMsg] = useState("");

    const [keyword, setKeyword] = useState("");
    const handleInputConfirm = (e) => {
        props.setTags(keyword);
        setMsg(msg + keyword + "_!_");
        props.setStr(msg);
        setKeyword("");
        e.preventDefault();
    }
    return(
        <Input value={keyword}
               onBlur={handleInputConfirm}
               onPressEnter={handleInputConfirm}
               maxLength={15}
               onChange={(e)=> setKeyword(e.target.value)}/>
    )
}