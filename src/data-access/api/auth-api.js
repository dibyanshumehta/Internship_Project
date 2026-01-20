import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postRegistrationData = createAsyncThunk(
  "auth/postRegistrationData",
  async (FormData, thunkAPI) => {
    try {
      let data = await axios.post(
        "http://localhost:9000/auth/signup",
        FormData
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong", error);
    }
  }
);
export const postLoginData = createAsyncThunk(
  "auth/postLoginData",
  async (FormData, thunkAPI) => {
    try {
      let data = await axios.post(
        "http://localhost:9000/auth/login",
        FormData
      );
      if(data.status === 201){
        localStorage.setItem("authToken", data.data.token);
      }
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong", error);
    }
  }
);
