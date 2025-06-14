import {SET_ITEM} from '../action-creators';

const initialState={
    item:"projects",
}

export const Reducer=(state=initialState, action) => {
    switch(action.type){
        case SET_ITEM:
            return {
                ...state,
                item:action.payload,
            };
        default:
            return state;
    }
};