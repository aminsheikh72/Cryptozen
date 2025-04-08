import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const coinSlice = createSlice({
    name : "coin ",
    initialState : {
       coins :[],
       coin : {},
       
       trendingCoins: [],
        isLoading : false,
        isSuccess : false,
        isError : false,
        message : "",
    },
    reducers : {},
    extraReducers : (builder)=> {
        builder
        .addCase(getTrendingCoins.pending,(state,action)=>{
            state.isLoading = true
            state.isError= false
            state.isSuccess = false
            state.message = ""
        })
        .addCase(getTrendingCoins.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.trendingCoins = action.payload
            state.isError= false
            state.message = ""
        })
        .addCase(getTrendingCoins.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.trendingCoins = []
            state.isError= true
            state.message = action.payload
        })
        .addCase(getCoins.pending,(state,action)=>{
            state.isLoading = true
            state.isError= false
            state.isSuccess = false
            state.message = ""
        })
        .addCase(getCoins.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.coins = action.payload
            state.isError= false
            state.message = ""
        })
        .addCase(getCoins.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.coins = []
            state.isError= true
            state.message = action.payload
        })
        .addCase(getCoin.pending,(state,action)=>{
            state.isLoading = true
            state.isError= false
            state.isSuccess = false
            state.message = ""
        })
        .addCase(getCoin.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.coin = action.payload
            state.isError= false
            state.message = ""
        })
        .addCase(getCoin.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.coin = []
            state.isError= true
            state.message = action.payload
        })
        .addCase(searchCoin.pending,(state,action)=>{
            state.isLoading = true
            state.isError= false
            state.isSuccess = false
            state.message = ""
        })
        .addCase(searchCoin.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.coins = action.payload
            state.isError= false
            state.message = ""
        })
        .addCase(searchCoin.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.coins = []
            state.isError= true
            state.message = action.payload
        })
        
    }
})

export default coinSlice.reducer;

export const getTrendingCoins = createAsyncThunk("TRENDING/COINS", async(_, thunkAPI) => {
    try {
        const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
        const coins = response.data.coins.map((coin) => coin.item); 
        return coins;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response?.data?.error || "Something went wrong");
    }
});

export const getCoins = createAsyncThunk("GET/COINS", async(_, thunkAPI) => {
    try {
        const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
       
        return response.data
        
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response?.data?.error || "Something went wrong");
    }
});

export const getCoin = createAsyncThunk("GET/COIN", async(id, thunkAPI) => {
    try {
        const response = await axios.get( `https://api.coingecko.com/api/v3/coins/${id}`);
        
        return response.data
        
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response?.data?.error || "Something went wrong");
    }
});
//  

export const searchCoin = createAsyncThunk("SEARCH/COIN", async(query, thunkAPI) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);

        return response.data
        
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.response?.data?.error || "Something went wrong");
    }
});