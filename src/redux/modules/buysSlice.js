// src/redux/modules/counterSlice.js
import { v4 as uuidv4 } from "uuid";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  buys: [
    // {
    //   id: uuidv4(),
    //   title: "닥터마틴",
    //   coments: "최고의 클래식",
    //   price: 1200000,
    //   isDone: false
    // },
    // {
    //   id: uuidv4(),
    //   title: "슈프림",
    //   coments: "최고의 스트릿",
    //   price: 150000,
    //   isDone: true
    // },
    // {
    //   id: uuidv4(),
    //   title: "칼하트",
    //   coments: "최고의 워크웨어",
    //   price: 2220000,
    //   isDone: false
    // },
  ],
  error: null,
  isLoading: false,
}

// 청크
export const __getBuys = createAsyncThunk(
  "getBuys",
  async (_payload, thunk) => {
    try {
      // const { data } = await axios.get("http://localhost:4000/buys");
      const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/buys`)
      return thunk.fulfillWithValue(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
)



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
  extraReducers: {
    [__getBuys.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getBuys.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.buys = action.payload;
    },
    [__getBuys.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    }
  }


});


export const { addBuys, deleteBuys, toggleBuys, updateBuy } = buysSlice.actions;
export default buysSlice.reducer;