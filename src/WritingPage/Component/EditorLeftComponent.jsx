import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "../../Store/Store";
import { useDispatch } from 'react-redux';
import "../Write.css";


const styles = {
    button : {
        color : "green",
        backgroundColor : "white",
        border : "1px solid green",
        borderRadius : "5px",
        width : "50px",
    },
    calender : {
        marginRight : "5px"
    },
    time : {
        textAlign : "justify",
        width : "500px"
    },
    decoLocation : {

    }
}

function EditorLeft({storedPlan}){  
    const dispatch = useDispatch()
    return (
        <div class = "main-left">{/**왼쪽 공백 색깔 */}
            {storedPlan.map((plan, index) => {
                if(storedPlan.length !== 1){ 

            return <div key={index} class="box">
                        <div class = "plan-container">
                        <div id = "planBox">
                            <div id = "imageContainer">
                                <img src = {plan.image} style = {{width : "60px", height : "100%"}}/>
                            </div>

                            <div id = "contentContainer">
                                <div>{plan.title}&nbsp;{plan.state} 
                                    <span style = {{float : "right", width : "50px"}}>
                                        <button id = "button-init" style = {styles.button} onClick={() => dispatch(actionCreators.deletePlan(plan.id))}>취소</button><br/>
                                    </span>
                                </div>
                                <div>{plan.author}</div>
                                <span style = {styles.calender}>{plan.year}.{plan.month}.{plan.date}&nbsp;({plan.day})</span>
                                <span style = {styles.time}>{plan.time}</span>
                                <div style = {styles.decoLocation}>{plan.location}</div>
                                <div>{plan.detailLocation}</div>
                            </div>
                        </div>
                        </div>
                    </div>;
                }})}
                
        </div>
    );
}

{/** 여기서 리턴하면 props로 보내짐 */}

{/** 스토어에서 정보 가져오는 코드 */}
function mapStateToProps(plan){
    {/** props */}
    return {
        storedPlan : plan
    };
}

export default connect(mapStateToProps, null)(EditorLeft);
