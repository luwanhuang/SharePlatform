import React, { useState, useCallback, useRef } from "react";
import { Tag, Input, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "../../css/tag.css";

export default function TagComponent(props) {

  const [inputVisible, setInputVisible] = useState(false);
  const [tags, setTags] = useState(["Unremovable", "Tag 2", "Tag 3"]);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const inputRef = useCallback((input) => {
    if (input) {
      input.focus();
    }
  }, []);
  const editInputRef = useCallback((input) => {
    if (input) {
      input.focus();
    }
  }, []);

  const handleClose = (removedTag) => {
    setTags(tags.filter((tag) => tag !== removedTag));
    props.setTags(tags.filter((tag) => tag !== removedTag));
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {

    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
      props.setTags([...tags, inputValue]);

    }
    console.log(tags);
    setInputVisible(false);
    setInputValue("");

  };

  const handleEditInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    props.setTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue("");
  };
  //
  // const SaveInputRef = (input) => {
  //   const inputRef = useRef(input);
  // };
  //
  // const SaveEditInputRef = (input) => {
  //   const EditInputRef = useRef(input);
  // };

  return (
    <>
      {tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={inputRef}
              key={tag}
              size="small"
              className="tag-input"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }

        const isLongTag = tag.length > 20;

        const tagElem = (
          <Tag
            className="edit-tag"
            key={tag}
            closable={index !== 0}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                if (index !== 0) {
                  setEditInputIndex(index);
                  setEditInputValue(tag);
                  e.preventDefault();
                }
              }}
            >
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible && (
        <Input
          ref={editInputRef}
          type="text"
          size="small"
          className="tag-input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
          onFocus={(e) => e.currentTarget.select()}
        />
      )}
      {!inputVisible && (
        <Tag className="site-tag-plus" onClick={showInput}>
          <PlusOutlined /> New Tag
        </Tag>
      )}
    </>
  );
}
