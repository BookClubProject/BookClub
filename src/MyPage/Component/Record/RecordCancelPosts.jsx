import React from "react";
import Grid from "@material-ui/core/Grid";
import "../../CompoCSS/Record.css"
const styles = {
  box: {
    background: "white",
    border: "2px solid black",
    borderRadius : "10px",
	height: "20rem",
  textAlign: "center", 
  },
};
function RecordCancelPosts({}) {
  return (
    <Grid item xs={6}>
      <a className="record_cancel_a" href="www.naver.com">
          <div className="record_cancel_box_wrap"> 책이미지랑 글 등등</div>
      </a>
    </Grid>
  );
}

export default RecordCancelPosts;
