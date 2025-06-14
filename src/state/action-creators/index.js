// src/redux/menuActions.js
export const SET_ITEM = 'SET_ITEM';

export const setItem = (item) => {
    return(dispatch)=>{
        dispatch({
            type: SET_ITEM,
            payload: item,
        })
    }
};
