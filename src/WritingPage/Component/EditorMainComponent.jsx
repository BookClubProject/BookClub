import React, { Component, useState } from "react";
import ReactQuill from "react-quill";
import Switch from "react-switch";
import { useDispatch } from 'react-redux'
import {addWriteInformation} from "../../Store/Store";
import "react-quill/dist/quill.snow.css";
import "../Write.css";

const EditorComponent = () =>{
  const dispatch = useDispatch();

  const modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
  };

  const formats = [
    //'font',
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];
  const [value, setValue] = useState(); //모임 글 수정하는 글 데베에서 글 가져와서 여기 초기값에 대입하면 됨

  return (
    <div style={{ height: "600px", width: "400%" }}>
      {/**여기 높이 올리면 footer랑 간격 높아짐 */}
      <ReactQuill
        style={{ height: "660px" }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value || ""}
        onChange={(content, delta, source, editor) => (setValue(editor.getHTML()), dispatch(addWriteInformation(value)))}
      />
    </div>
  );
}
export default EditorComponent;
