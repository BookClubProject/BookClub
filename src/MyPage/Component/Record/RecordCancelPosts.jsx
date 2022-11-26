import React from "react";
import Grid from "@material-ui/core/Grid";
import "../../CompoCSS/Record.css";
import { Link } from "react-router-dom";
const styles = {
  box: {
    background: "white",
    border: "2px solid black",
    borderRadius: "10px",
    height: "20rem",
    textAlign: "center",
  },
};
function RecordCancelPosts({ list, index }) {
  return (
    <Grid item xs={6}>
      <Link to={`/detail/${list.id}`} key={index} class="content2_wrap">
        <div id="book-thumnail-container">
          <img src={list.bookImage} id="book-thumnail" />
        </div>
        <div id="thumnail-discription-container">
          <div id="book-title-container">
            <div id="book-title">{list.booktitle}</div>
            <div id="sub-title">
              {list.author}&nbsp;{list.publisher}
            </div>
          </div>

          <div id="plan-container">
            <hr style={styles.line} />
            <div>
              {list.tema}&nbsp;{list.state}&nbsp;{list.location}&nbsp;
              {list.detailLocation}
            </div>
            <div>
              시간 : {list.year}.{list.month}.{list.date}
              {list.day}&nbsp;{list.time}
            </div>
          </div>
        </div>
      </Link>
    </Grid>
  );
}

export default RecordCancelPosts;
