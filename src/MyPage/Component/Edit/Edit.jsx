import React from "react";
import "../../CompoCSS/Edit.css";
import apiTest from "../../../Api.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsFillPencilFill } from "react-icons/bs";

function Edit() {
  const styles = {
    line: {
      border: "0.5px solid",
      color: "silver",
      width: "90%",
      opacity: "0.4",
      margin: "0 0 8px 0px",
      marginBottom: "5px",
    },
  };

  {
    /**독서모임 api 가져오기 및 로딩창 */
  }
  const [clubList, setClubList] = useState([]);

  {
    /**API 가져오기 */
  }
  const getClubList = async () => {
    try {
      //const getClubList = await (await axios.get("https://50907063-b25d-4ab2-973c-8d4de9d0c872.mock.pstmn.io/book"));
      //setTempList(getClubList.data);
      //setClubList(getClubList.data); {/** api 가져오기 */}
      setClubList(apiTest);
    } catch {
      console.log("error");
      // 오류 발생시 실행
    }
  };
  useEffect(() => {
    getClubList();
  }, []);
  return (
    <div className="edit">
      <div className="edit_wrap">
        <div className="edit_title_wrap">
          <p className="edit_title">토론수정</p>
          <BsFillPencilFill className="edit_react_icon" size={25} />
        </div>
        <div className="edit_content_wrap">
          <div className="edit_content">
            {clubList.map((list, index) => {
              return (
                <Link
                  to={`/detail/${list.id}`}
                  key={index}
                  class="edit_content2_wrap"
                >
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
