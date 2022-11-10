
import {connect} from "react-redux";
import {actionCreators} from "../../Store/Store";
import React, {useRef, useState, useEffect} from "react";
import StickyBox from "react-sticky-box";
import Switch from "react-switch";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import calendarImage from '../../ImageSource/calendar.png';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import Search from "./SearchPlaceComponent";
import { ko } from "date-fns/esm/locale";
import { getMonth, getDate, getDay } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "../Write.css";


const styles = {
    wrapper : {
        position : "relative",
    },
}

function EditorRightBottomComponent({dispatch}){

    {/*토글버튼관련*/}
    const [state, setChecked] = useState(true);
    const onOffChange = () =>{
        if(state === false) {
            setChecked(true);
        }
        else {
            setChecked(false);
        }
    }

    {/**달력 */}
    const [calendar, setCalendar] = useState(new Date());
    {/**시계 */}
    const [Time, onChangeTime] = useState(['10:00~', '11:00']);

    {/**const [list, setList] = useState([]);*/}

    const addList = () => {
        let Days = ['일', '월', '화', '수', '목', '금', '토'];
        let Month = getMonth(calendar) + 1;
        let Date = getDate(calendar);
        let Day = Days[getDay(calendar)]; 
        dispatch(actionCreators.addPlan((String(Month + "/" + Date + " (" + Day + ")")), Time, state.toString()));
        {/** setList((t) => [...t, `${calendar}`, `${Time}`]); */}
      };

    return(
        <StickyBox offsetTop={340}>
        <div style = {styles.wrapper}>
            <div class = "reserve-container">

            {/*온라인 오프라인 설정*/} 
            <div className="example">
            <div id = "toggleContainer">
            <label htmlFor="material-switch">
                <Switch
                checked={state}
                onChange={onOffChange}
                handleDiameter={28}
                offColor="#e5f3ff"
                onColor="#000000"
                offHandleColor="#ffffff"
                onHandleColor="#ffffff"
                height={40}
                width={100}
                borderRadius={6}
                activeBoxShadow="0px 0px 1px 2px #fffc35"
                uncheckedIcon={
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "40px",
                        fontSize: 15,
                        color: "black",
                        paddingRight: 2,
                    }}
                    >
                    오프라인
                    </div>
                }
                checkedIcon={
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 15,
                        color: "white",
                        paddingRight: 2,
                    }}
                    >
                    온라인
                    </div>
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
                    👥
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
                    🖥
                    </div>
                }
                className="react-switch"
                id="small-radius-switch"
                />
            </label>
                <button type="submit" class = "add-club" onClick={addList}>모임추가</button>
            </div>

            <div>
            <button type="submit" class = "apply-club">작성하기</button>
            </div>
            </div>

            <div class = "reserve-calender-time">
                 {/*날짜설정*/} 
                <span class = "date-picker">

                     <DatePicker
                     className="calendar-container" 
                     selected={calendar} 
                     onChange={date => setCalendar(date)}
                     dateFormat="yyyy.MM.dd (eee)"
                     locale={ko} />

                </span>
                {/*시간설정*/} 
                <span class = "time-picker">
                    <TimeRangePicker 
                    hourPlaceholder = "시"
                    minutePlaceholder = "분"
                    rangeDivider = "~"
                    disableClock = {true}
                    onChange={onChangeTime} 
                    />
                </span>
            </div>
            {/**오프라인일때 */}
            { !state && <Search /> }
            {/**온라인일때 */}
            {state && 
            <pre class = "information">
                온라인의 경우 주최자가 직접 신청자들에게<br/>
                문자나 메시지로 화상회의 링크를 전달해주셔야 합니다.<br/>
                신청자들의 번호나 메시지는 저희측에서 주최자에게 제공해드립니다.<br/>
            </pre>}
            </div>
        </div>
        </StickyBox>
    );
}

{/** 여기서 리턴하면 store로 보내짐 */}
function mapDispatchToProps(dispatch){
    {/** props */}
     return {dispatch}
}

export default connect(null, mapDispatchToProps)(EditorRightBottomComponent)
