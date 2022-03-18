import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState ={
    isLogin:false,
    error:null,
    userInfo:{},
}
export const userlSlice = createSlice({
    name: 'user',
    initialState,
    reducer:{
        fetchUsers:(stata,action) => {
            stata.userInfo.push(action.payload);
        },
        login:(stata,action) => {
            stata.isLogin = true;
        },
        logOut:(stata,action) => {
            stata.isLogin = false;
        }

    },
    extraReducers:{

    }
   })
  export const {}= userlSlice.actions;
  export default userlSlice.reducer; 