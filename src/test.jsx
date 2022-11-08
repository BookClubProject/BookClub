import React, { useState } from "react";
import { useDispatch,useSelector } from 'react-redux';

function Test(){

    const plan = useSelector((plan) => plan);
    const calendar = useSelector((plan) => plan.calendar);
    const time = useSelector((plan) => plan.time);
    const state = useSelector((plan) => plan.state);
    const location = useSelector((plan) => plan.location);
    const detailLocation = useSelector((plan) => plan.detailLocation);
    const id = useSelector((plan) => plan.id);
    
    return(
        <div>
            {plan[0].time}
        </div>
    );
}

export default Test