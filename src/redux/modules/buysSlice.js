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

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addBuys, deleteBuys, toggleBuys } = buysSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default buysSlice.reducer;