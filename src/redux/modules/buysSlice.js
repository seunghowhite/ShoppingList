// src/redux/modules/counterSlice.js
import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buys: [
    {
      id: uuidv4(),
      title: "닥터마틴",
      coments: "최고의 클래식",
      price: 1200000,
      isDone: false
    },
    {
      id: uuidv4(),
      title: "슈프림",
      coments: "최고의 스트릿",
      price: 150000,
      isDone: true
    },
    {
      id: uuidv4(),
      title: "칼하트",
      coments: "최고의 워크웨어",
      price: 2220000,
      isDone: false
    },
  ]
}


const buysSlice = createSlice({
  name: "buys",
  initialState,
  reducers: {
    updateBuy: (state, action) => {
      state.buys.forEach((item, index) => {
        if (item.id === action.payload.id) {
          state.buys.splice(index, 1, action.payload)
        }
      })
      return state
    },
    addBuys: (state, action) => {
      return {
        ...state, buys: [...state.buys, {
          id: uuidv4(),
          title: action.payload.title,
          coments: action.payload.coments,
          price: parseInt(action.payload.price),
          isDone: false
        }]
      }
    },
    toggleBuys: (state, action) => {
      return {
        ...state,
        buys: state.buys.map((item) => ({
          ...item, isDone: item.id === action.payload ? !item.isDone : item.isDone,
        }))
      }
    },
    deleteBuys: (state, action) => {
      return {
        ...state,
        buys: [...state.buys.filter((item) => item.id !== action.payload)]
      }
    }
  },
});


export const { addBuys, deleteBuys, toggleBuys, updateBuy } = buysSlice.actions;
export default buysSlice.reducer;