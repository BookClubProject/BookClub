import React from "react";
import Grid from "@material-ui/core/Grid";

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
      <div style={styles.box} className="record_cancel_box">
        <a className="record_cancel_a">
          <div> 책이미지랑 글 등등</div>
        </a>
      </div>
    </Grid>
  );
}

export default RecordCancelPosts;
