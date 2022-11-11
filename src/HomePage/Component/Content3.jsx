import "../HomePage.css";

function Content3() {
  const content3_1 =
    "체호프의 소설은 좋아했지만, 희곡은 읽기가 좀 어려웠었어요. 체호프 희곡읽기 주제에 관심이 있어 신청했습니다.떨리는 마음으로 접속했는데 선생님 목소리가 너무 좋으시고 발음이 정확하셔서 한번 깜짝 놀랐고,  희곡읽기뿐만 아니라 작가 소개와 짧게 ..";

  const content3_2 =
    "혹시 책 좋아하시는 분, 있으신가요? 넷플릭스부터 유튜브, 인스타그램까지, 볼 것이 넘쳐나는 시대 속에서 책을 찾기란 쉬운 일이 아닌데요. 여전히 휴대전화보다 묵직하고, TV보다 집중해야 하는 책을 사랑하는 사람들이 있..";

  const content3_3 =
    "안녕하세요. 에디터SU 박서령입니다. 홀로 보내는 시간이 길어지는 요즘, 여러분께 띄우고 싶은 질문 하나가 있습니다. 여러분은 이 세상에 관하여 얼마나 고민하고 계시는가요? 세상이 너무 광범위하다면 ‘개인’이라는 독존에 관해서는 얼마나 고민하..";

  const debate_contents = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className="content3_wrap">
      <div className="content3_left">
        <p className="content3_left_title">베스트 독서 노트</p>
        <div className="content3_list">
          <ul>
            <li className="report_li">
              <a href="#" className="best_report1">
                <div className="info">
                  <h4 className="content3_title">(체호프 희곡 낭독후기) 알찬 시간이었다</h4>
                  <p className="content3_report_content">{content3_1}</p>
                  <p className="content3_writer"> 파란꽃잎</p>
                </div>
                <div className="report_img">
                  <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1629330%3Ftimestamp%3D20210331143955"></img>
                </div>
              </a>
            </li>
            <div className="content3_division_line"></div>
            <li className="report_li">
              <a href="#" className="best_report2">
                <div className="info">
                  <h4 className="content3_title">책을 사랑하는 사람들에게, 김겨울의 (독서의 기쁨)</h4>
                  <p className="content3_report_content">{content3_2}</p>
                  <p className="content3_writer">준희입니당</p>
                </div>
                <div className="report_img">
                  <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F540869%3Ftimestamp%3D20210314150749"></img>
                </div>
              </a>
            </li>
            <div className="content3_division_line"></div>
            <li className="report_li">
              <a href="#" className="best_report3">
              <div className="info">
                  <h4 className="content3_title">사치스러운 세상에 반증한 다자이 오사무의 『인간 실격』</h4>
                  <p className="content3_report_content">{content3_3}</p>
                  <p className="content3_writer">준희베이비</p>
                </div>
                <div className="report_img">
                  <img src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F540869%3Ftimestamp%3D20210314150749"></img>
                </div>
              </a>
            </li>
            <div className="content3_division_line"></div>
          </ul>
        </div>
      </div>
      <div className="conten3_right">
        <p className="content3_right_title"> 토론 후기 </p>
        <div className="content3_right_wrap">
          <div className="content3_debate_img">
            <img src="https://bimage.interpark.com/partner/goods_image/7/3/5/9/355777359h.jpg"></img>
          </div>
          <div className="content3_debate_write">
            {debate_contents}
          </div>
        </div>
        <button className="contetn3_right_add_button">더보기</button>
      </div>
    </div>
  );
}

export default Content3;
