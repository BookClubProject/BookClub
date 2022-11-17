import {createStore} from "redux";
import {useState} from "react";


var location = '';
var detailLocation = '';
var image = '';
var title = '';
var author = '';
var pubdate = '';
var publisher = '';
var writing = '';

const addPlan = (year, month, date, day, time, state) =>{
    if(state == "true") {
        state = "온라인";
        location = '';
        detailLocation = '';
    }
    else state = "오프라인";
    return{
        type : "ADD",
        year,
        month,
        date,
        day,
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

export const addBookInformation = (getImage, getTitle, getAuthor, getPubdate, getPublisher) =>{
        image = getImage;
        title = getTitle;
        author = getAuthor;
        pubdate = getPubdate;
        publisher = getPublisher;
};
export const addWriteInformation = (getWriting) =>{
    writing = getWriting;
}

export const searchPlace = (inputLocation) =>{
    location = inputLocation;
}
export const searchDetailPlace = (setDetailLocation) =>{
    detailLocation = setDetailLocation;
}

const initstate = [''];

export const reducer = (plan = initstate, action) =>{
    switch(action.type){
        case "ADD" : {
            return [
                {
                    year : action.year,
                    month : action.month,
                    date : action.date,
                    day : action.day,
                    time : action.time,
                    state : action.state,
                    location,
                    detailLocation,
                    image,
                    title,
                    author,
                    pubdate,
                    publisher,
                    writing,
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