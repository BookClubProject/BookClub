import "../HomePage.css";

function Content3() {
  return (
    <div className="content3_wrap">
      <div className="content3_left">
        <p className="content3_left_title">베스트 독서 노트</p>
        <div className="content3_list">
          <ul>
            <li className="report_li">
              <a href="#" className="best_report1">
                <div className="info">
                  <h3>(체호프 희곡 낭독후기) 알찬 시간이었다</h3>
                  <p></p>
                </div>
                <div className="image">
                  <img></img>
                </div>
              </a>
            </li>
            <li className="report_li">
              <a href="#" className="best_report2">
                <div className="info">
                  <p>제목</p>
                  <p>내용물</p>
                </div>
                <div className="image">
                  <img></img>
                </div>
              </a>
            </li>
            <li className="report_li">
              <a href="#" className="best_report3">
                <div className="info">
                  <p>제목</p>
                  <p>내용물</p>
                </div>
                <div className="image">
                  <img></img>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="conten3_right">
        <p> 토론 후기 </p>
        <div> 내용</div>
      </div>
    </div>
  );
}

export default Content3;
