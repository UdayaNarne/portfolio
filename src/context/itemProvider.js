import React,{useState} from 'react';
import {ItemContext} from './itemContext';

export const ItemProvider=({children})=>{
    const [item,setItem]= useState("home");
    return(
        <ItemContext.Provider value={{item,setItem}}>
            {children}
        </ItemContext.Provider>
    )
}