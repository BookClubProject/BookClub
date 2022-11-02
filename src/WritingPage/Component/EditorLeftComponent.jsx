import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "../../Store/EditorStore";
import { useDispatch } from 'react-redux'
import "../Write.css";


const styles = {
    button : {
        color : "green",
        backgroundColor : "white",
        border : "1px solid green",
        marginLeft : "10px",
    },
    calender : {
        marginRight : "5px"
    },
    time : {
        textAlign : "justify",
        width : "500px"
    }
}

function EditorLeft({storedPlan}){  
    const dispatch = useDispatch()
    return (
        <div class = "main-left">{/**왼쪽 공백 색깔 */}
            {storedPlan.map((plan, index) => {
            return <div class="box">
                        <div key={index} class = "plan-container">
                        <span style = {styles.calender}>{plan.calendar}</span>
                        <span style = {styles.time}>{plan.time}</span>
                        <button style = {styles.button} onClick={() => dispatch(actionCreators.deletePlan(plan.id))}>취소</button>
                        </div>
                    </div>;
                })}
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
