import React, { Component, useState } from "react";
import ReactQuill from "react-quill";
import Switch from "react-switch";
import "react-quill/dist/quill.snow.css";
import "../Write.css";

class EditorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  modules = {
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

  formats = [
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

  render() {
    const { value, onChange } = this.props;
    return (
      
        <div style={{ height: "600px", width : "400%"}}>{/**여기 높이 올리면 footer랑 간격 높아짐 */}
          <ReactQuill
            style={{ height: "660px" }}
            theme="snow"
            modules={this.modules}
            formats={this.formats}
            value={value || ""}
            onChange={(content, delta, source, editor) =>
              onChange(editor.getHTML())
            }
          />
        </div>
 
    );
  }
}
export default EditorComponent;
