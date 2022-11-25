import React from "react";
import {useEffect} from "react"
import StickyBox from "react-sticky-box";
import "../BookDetail.css"

const styles = {
    line : {
        marginTop: "10px",
    }
}
const DetailComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div class = "book-detail-container">
            <div class = "blank-container"/>
            <div class = "filled-container">

            </div>
            <div class = "plan-container-box">
                <StickyBox offsetTop={80}>
                    <div class = "register-container">
                        <div id = "registerTitle">모임일정</div>
                        <div class = "register-box">
                            <div id = "register-date-container">
                                <div id = "register-date-text">2022-11-16 (수)</div>
                                <div style = {{margin : "0 10px", fontSize : "15px"}}>|</div>
                                <div id = "register-date-clock">14:00~15:30</div>
                            </div>
                            <div id = "register-number">
                                <div style = {{marginRight : "85px"}}>온라인</div>
                                <div>신청 0 / 정원 8</div>
                            </div>
                        </div>
                        <hr style = {styles.line}/>
                        <button id = "register-button">모임 신청하기</button>
                    </div> 
                </StickyBox>
            </div>
        </div>
    );
}
export default DetailComponent;