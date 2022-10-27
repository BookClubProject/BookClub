import { findByText } from "@testing-library/react";
import React, { Component, useRef, useState, useEffect} from "react";
import StickyBox from "react-sticky-box";
import Switch from "react-switch";
import DatePicker from 'react-date-picker';
import calendar from '../../ImageSource/calendar.png';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import Search from "./SearchPlaceComponent";
import "../Write.css";

const { kakao } = window;

const styles = {
    wrapper : {
        position : "relative",
    },
}
function EditorRightBottomComponent(){

    {/*토글버튼관련*/}
    const [state, setChecked] = useState(true);
    let a = '0';
    const onOffChange = () =>{
        if(state === false) {
            setChecked(true);
            a = '1';
        }
        else {
            setChecked(false);
            a = '0';
        }
    }

    {/**달력 */}
    const [value, onChange] = useState(new Date());
    {/**시계 */}
    const [valueTime, onChangeTime] = useState(['10:00', '11:00']);

    return(
        <StickyBox offsetTop={340}>
        <div style = {styles.wrapper}>
            <div class = "reserve-container">

            {/*온라인 오프라인 설정*/} 
            <div className="example">
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
            <button type="submit" class = "add-club">모임추가</button>
            </div>

            <div class = "reserve-calender-time">
                 {/*날짜설정*/} 
                <span class = "date-picker">
                    <DatePicker
                    onChange={onChange} value={value} 
                    calendarIcon = {<img src = {calendar} style = {{width : "27px"}}/>}
                    />
                </span>
                {/*시간설정*/} 
                <span class = "time-picker">
                    <TimeRangePicker 
                    hourPlaceholder = "시"
                    minutePlaceholder = "분"
                    rangeDivider = "~"
                    disableClock = {true}
                    onChange={onChangeTime} value={valueTime} 
                    />
                </span>
            </div>
            { !state && <Search /> }
            {state && 
            <pre class = "information">
                온라인의 경우 글쓴이(?)가 직접 신청자들에게<br/>
                문자나 메시지로 화상회의 링크를 전달해주셔야 합니다.<br/>
                신청자들의 번호나 메시지는 저희측에서 글쓴이에게 제공해드립니다.<br/>
            </pre>}
            </div>
        </div>
        </StickyBox>
    );
}
export default EditorRightBottomComponent