// src/redux/modules/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buys: [
    {
      id: 1,
      title: "닥터마틴",
      coments: "최고의 클래식",
      pirce: 1200000,
      isDone: false
    },
  ]
}

const buysSlice = createSlice({
  name: "buys",
  initialState,
  reducers: {
    addBuys: (state, action) => {
      state.number = state.buys + action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addBuys } = buysSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default buysSlice.reducer;