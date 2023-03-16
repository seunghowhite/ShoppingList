// src/redux/modules/counterSlice.js
import { v4 as uuidv4 } from "uuid";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import api from '../../axios/api';

//*초기값
const initialState = {
  buys: [],
  error: null,
  isLoading: false,
}

//*청크
export const __getBuys = createAsyncThunk(
  "getBuys",
  async (payload, thunk) => {
    try {
      const { data } = await api.get('/buys')
      return thunk.fulfillWithValue(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
)
export const __deleteBuys = createAsyncThunk(
  "deleteBuys",
  async (payload, thunk) => {
    try {

      await api.delete(`/buys/${payload}`)
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
)
export const __togleButton = createAsyncThunk(
  "toggleButton",
  async (payload, thunk) => {
    try {
      await api.patch(`/buys/${payload.id}`, payload.data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
)
export const __updateBuys = createAsyncThunk(
  "updataBuys",
  async (payload, thunk) => {
    try {
      await api.patch(`/buys/${payload.id}`, payload.data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
)
export const __postBuys = createAsyncThunk(
  "postBuys",
  async (payload, thunk) => {
    try {
      await axios.post("http://localhost:4000/buys", payload);
    } catch (error) {

    }
  }
)

//*슬라이스
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
    //*get
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
    },
    //*삭재
    [__deleteBuys.pending]: (state, action) => {
      state.isLoading = true
    },
    [__deleteBuys.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__deleteBuys.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },
    //*토글
    [__togleButton.pending]: (state, action) => {
      state.isLoading = true
    },
    [__togleButton.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__togleButton.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },
    //*업데이트
    [__updateBuys.pending]: (state, action) => {
      state.isLoading = true
    },
    [__updateBuys.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__updateBuys.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },
    //*포스트
    [__postBuys.pending]: (state, action) => {
      state.isLoading = true
    },
    [__postBuys.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__postBuys.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },



  }


});


export const { addBuys, deleteBuys, toggleBuys, updateBuy } = buysSlice.actions;
export default buysSlice.reducer;