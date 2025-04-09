import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const userExist = JSON.parse(localStorage.getItem('user'))

const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : userExist || null,
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : "",
    },
    reducers : {},
    extraReducers : (builder)=> {
        builder
        .addCase(userRegister.pending,(state,action)=>{
            state.isLoading = true
            state.isError = false 
            state.isSuccess = false
        })
        .addCase(userRegister.fulfilled,(state,action)=>{
            state.isLoading = false
            state.user = action.payload
            state.isError = false 
            state.isSuccess = false
        })
        .addCase(userRegister.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
            state.isSuccess = false
        })
        .addCase(userLogin.pending,(state,action)=>{
            state.isLoading = true
            state.isError = false 
            state.isSuccess = false
        })
        .addCase(userLogin.fulfilled,(state,action)=>{
            state.isLoading = false
            state.user = action.payload
            state.isError = false 
            state.isSuccess = false
        })
        .addCase(userLogin.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
            state.isSuccess = false
        })
        .addCase(logOut.fulfilled,(state,action)=>{
            state.isLoading = false
            state.user = null
            state.isError = false 
            state.isSuccess = false
        })
        
        
    }
})

export default authSlice.reducer;


export const userRegister = createAsyncThunk("USER/REGISTER", async(formData, thunkAPI) => {
    try {
        const response = await axios.post("https://authenticationeskills.vercel.app/api/user/register",formData);
        localStorage.setItem("user",JSON.stringify(response.data))
        return response.data
    } catch (error) {
       
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
});
export const userLogin = createAsyncThunk("USER/LOGIN", async(formData, thunkAPI) => {
    try {
        const response = await axios.post("https://authenticationeskills.vercel.app/api/user/login",formData);
        localStorage.setItem("user",JSON.stringify(response.data))
        return response.data
    } catch (error) {
        
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
});

export const logOut = createAsyncThunk("LOGOUT/USER",async()=>{
    localStorage.removeItem('user')
})