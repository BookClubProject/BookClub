import React from "react";
import StickyBox from "react-sticky-box";
import "../BookDetail.css"

const styles = {
    line : {
        marginTop: "10px",
    }
}
const DetailComponent = () => {

    return(
        <div class = "book-detail-container">
            <div class = "blank-container"/>
            <div class = "filled-container">

            </div>
            <div class = "plan-container-box">
                <StickyBox offsetTop={80}>
                    <div class = "register-container">
                        <div>모임일정</div>
                        <div class = "register-box">
                            <div id = "register-date-text">
                                <div>2022-11-16 (수)</div>
                                <div style = {{margin : "0 10px"}}>|</div>
                                <div>14:00~15:30</div>
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