import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { BsFillCircleFill } from "react-icons/bs";
import { BsXLg, BsCheckLg } from "react-icons/bs";
import "../../CompoCSS/Manage.css";

function ManagePost(props) {
  // props의 구조는 {data, style, index, isScrolling}
  const { index, style, data } = props;
  console.log(index);

  console.log(data);
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`${index + 1}`} />
        <div className="managepost_user_name_wrap">
          <text className="managepost_user_name">{data[props.index].name}</text>
          <BsFillCircleFill className="managepost_user_gender" size={20} color="rgb(231, 235, 133)" />
        </div>
      </ListItemButton>
      <button className="managepost_accept_btn">
        <BsCheckLg size={20} color="green" />
      </button>
      <button className="managepost_cancel_btn">
        <BsXLg size={20} color="red" />
      </button>
    </ListItem>
  );
}

export default ManagePost;
