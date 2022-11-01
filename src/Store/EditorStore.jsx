import {createStore} from "redux";





const addPlan = (calendar, time) =>{
    return{
        type : "ADD",
        calendar,
        time,
    };
};

const deletePlan = (id) =>{
    return{

        type : "DELETE",
        id : parseInt(id)
    };
};

const reducer = (plan = [''], action) =>{
    switch(action.type){
        case "ADD" : {
            return [
                {
                    calendar : action.calendar.toString(),
                    time : action.time,
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