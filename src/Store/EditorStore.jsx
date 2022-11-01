import {createStore} from "redux";

const ADD = "calendar";
const DELETE = "time";


const addPlan = (calendar, time) =>{
    return{
        type : addPlan,
        calendar,
        time,
    };
};

const deletePlan = (id) =>{
    return{
        type : DELETE,
        id
    };
};

const reducer = (plan = [''], action) =>{
    switch(action.type){
        case addPlan : {
            return [
                {
                    calendar : action.calendar.toString(),
                    time : action.time,
                    id : Date.now()
                }, ...plan
            ]
        }
        case deletePlan : {
            return plan.filter(toDo => toDo != action.id);
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