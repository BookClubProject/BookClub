import React from "react";
import {connect} from "react-redux";

function EditorLeft({storedPlan}){
    
    return (
        <div class = "main-left">{/**왼쪽 공백 색깔 */}
            {storedPlan.map((plan, index) => {
                console.log(storedPlan.calendar);
                console.log(plan.calendar);
                console.log(plan.time);
                console.log('--------------------');
            return <div key={index}>
                {plan.calendar}
                {plan.time}
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
