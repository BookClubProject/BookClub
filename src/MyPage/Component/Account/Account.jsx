import React from "react";
import "../../CompoCSS/Account.css";
import { Button } from "@material-ui/core";
import { useState } from "react";
import DeleteModal from "./DeleteModal"

const styles = {
  save: {
    background: "#007f00",
    color: "white",
    padding: "10px 100px",
    fontSize: "1.2rem",
  },
  delete : {
    background: "#007f00",
    color: "white",
    padding: "20px 40px",
    fontSize: "1.2rem",
    marginLeft: "auto",
  }
};
function Account() {

  const [deleteModalOn, setDeleteModalOn] = useState(false);

  return (
    <div className="account_wrap">
      <div className="account_content_wap">
        <div className="account_introduction">

          <div className="account_nickname">
            <p className="account_main_title">닉네임</p>
            <input
              className="account_input"
              type="text"
              placeholder="변경할 닉네임을 입력해주세요"
            ></input>
          </div>

          <div className="account_self_introduction">
            <p className="account_main_title">자기소개</p>
            <input
              className="account_self_input"
              rows="4"
              type="text"
              placeholder="자기소개를 해보세요!"
            ></input>
          </div>

          <div className="account_introduction_button">
            <Button style={styles.save}>저장하기</Button>
          </div>
        </div>

        <div className="account_email">
          <div className="account_nickname">
            <p className="account_main_title">이메일</p>
            <input
              className="account_input"
              type="text"
              value="rong5026@naver.com"
              disabled
            ></input>
          </div>
        </div>

        <div className="account_delete">
          <span className="account_main_title">탈퇴</span>
          <Button style={styles.delete} onClick={() => setDeleteModalOn(true)} >탈퇴하기</Button>
          <DeleteModal
            show= {deleteModalOn}
            onHide={() => setDeleteModalOn(false)}
            />

        </div>
      </div>
    </div>
  );
}

export default Account;
