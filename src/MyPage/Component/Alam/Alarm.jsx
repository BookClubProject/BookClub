import "../../CompoCSS/Alam.css";
import Toggle from "./Toggle";
import { BsFillAlarmFill } from "react-icons/bs";

function Content2() {
  return (
    <div className="alarm_wrap">
      <div className="alarm_content_wrap">
        <div className="alarm_content_title_wrap">
          <p className="alarm_title"> 알림 설정 </p>
          <BsFillAlarmFill className="alarm_react_icon" size={25} />
        </div>
        <div className="reservation_alarm">
          <div className="reservation_text">
            <p className="alarm_text_main">예약 알림</p>
            <p className="alarm_text_sub">
              토론 예약,취소 또는 예약취소 알림에 대한 카카오톡 알림을 받습니다.
            </p>
          </div>
          <div className="alarm_on_off">
            <Toggle />
          </div>
        </div>
        <div className="reservation_alarm">
          <div className="reservation_text">
            <p className="alarm_text_main">Reading 소식 및 홍보</p>
            <p className="alarm_text_sub">
              새로운 토론, 이벤트, 공지사항에 대한 알림을 이메일, 카카오톡을
              통해 받습니다.
            </p>
          </div>
          <div className="alarm_on_off">
            <Toggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content2;
