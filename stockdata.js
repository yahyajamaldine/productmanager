import React,{useState,createContext} from "react";
 
export const StockProvider=createContext();

export function Stock({children}){
  const value=useState({
     first:1,
     second:0,
      third:200});
     
    return <StockProvider.Provider value={value}>{children}</StockProvider.Provider>  

}