import {createStore} from "redux";
import {useState} from "react";


var location = '';
var detailLocation = '';

const addPlan = (calendar, time, state) =>{
    if(state == "true") {
        state = "온라인";
        location = '';
        detailLocation = '';
    }
    else state = "오프라인";
    return{
        type : "ADD",
        calendar,
        time,
        state,
        location,
        detailLocation,
    };
};

const deletePlan = (id) =>{
    return{
        type : "DELETE",
        id : parseInt(id)
    };
};

export const searchPlace = (inputLocation) =>{
    location = inputLocation;
}
export const searchDetailPlace = (setDetailLocation) =>{
    detailLocation = setDetailLocation;
}

const initstate = ["example"];

export const reducer = (plan = initstate, action) =>{
    switch(action.type){
        case "ADD" : {
            return [
                {
                    calendar : action.calendar.toString(),
                    time : action.time,
                    state : action.state,
                    location,
                    detailLocation,
                    id : Date.now()
                }, ...plan
            ]
        }
        case "DELETE" : {
            return plan.filter(minusPlan => minusPlan.id !== action.id);
        }
        default:
            return plan; 
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addPlan,
    deletePlan
  };


export default store;