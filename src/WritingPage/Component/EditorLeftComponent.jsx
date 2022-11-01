import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "../../Store/EditorStore";
import { useSelector } from 'react-redux';

function EditorLeft({plans}){
    console.log(plans);
    return (
        <div class = "main-left">{/**왼쪽 공백 색깔 */}
        {/**
            {props.list.map((plan, index) => {
                console.log(plan);
            return <div key={index}>{plan}</div>;
            })}
            */}
            {JSON.stringify(plans)} 
        </div>
    );
}

{/** 여기서 리턴하면 props로 보내짐 */}
function mapStateToProps(state){
    {/** props */}
    return {
        plans : state
    };
}

export default connect(mapStateToProps, null)(EditorLeft);
