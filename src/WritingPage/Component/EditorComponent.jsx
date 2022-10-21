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
      <div>
        <div class="book-container">
          <img
            src="https://image.yes24.com/goods/106131562/XL"
            class="book-thumnail"
          />
          <div className="example">
            <h2>Custom styling</h2>
            <label htmlFor="material-switch">
              <Switch
                checked={this.state.checked}
                onChange={this.handleChange}
                handleDiameter={28}
                offColor="#08f"
                onColor="#0ff"
                offHandleColor="#0ff"
                onHandleColor="#08f"
                height={40}
                width={70}
                borderRadius={6}
                activeBoxShadow="0px 0px 1px 2px #fffc35"
                uncheckedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 15,
                      color: "orange",
                      paddingRight: 2,
                    }}
                  >
                    Off
                  </div>
                }
                checkedIcon={
                  <svg
                    viewBox="0 0 10 10"
                    height="100%"
                    width="100%"
                    fill="yellow"
                  >
                    <circle r={3} cx={5} cy={5} />
                  </svg>
                }
                uncheckedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 20,
                    }}
                  >
                    ☹
                  </div>
                }
                checkedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      color: "red",
                      fontSize: 18,
                    }}
                  >
                    ♥
                  </div>
                }
                className="react-switch"
                id="small-radius-switch"
              />
            </label>
          </div>
        </div>
        <div style={{ height: "650px" }}>
          <ReactQuill
            style={{ height: "600px" }}
            theme="snow"
            modules={this.modules}
            formats={this.formats}
            value={value || ""}
            onChange={(content, delta, source, editor) =>
              onChange(editor.getHTML())
            }
          />
        </div>
      </div>
    );
  }
}
export default EditorComponent;
