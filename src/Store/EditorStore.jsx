import {createStore} from "redux";

const ADD = "calendar";
const DELETE = "time";


const addPlan = (calendar, Time) =>{
    return{
        type : addPlan,
        calendar,
        Time,
    };
};

const deletePlan = (id) =>{
    return{
        type : DELETE,
        id
    };
};

const initialstate = {
    set :[
        {
            calendar : '',
            time : '',
            id : Date.now(),
        }
    ]
}

const reducer = (state = [''], action) =>{
    console.log(addPlan);
    switch(action.type){
        case addPlan : {
            return [
                {
                    calendar : action.calendar,
                    time : action.time,
                    id : Date.now()
                }, ...state
            ]
        }
        case deletePlan : {
            return state.filter(toDo => toDo != action.id);
        }
        default:
            return state; 
    }

}
const store = createStore(reducer);

export const actionCreators = {
    addPlan,
    deletePlan
  };

export default store;