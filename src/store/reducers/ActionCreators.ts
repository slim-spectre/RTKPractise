import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Contact } from "../../interfaces/Contact";
import axios from "axios";

const URL = "http://localhost:3001/contacts";


export const fetchUsers = createAsyncThunk(
  'contact/fetchAll',
  async (_, thunkAPI) => {
    try{
      const response = await axios.get<Contact[]>(URL);
      return response.data
    }
    catch(error) {
      return thunkAPI.rejectWithValue('Couldnt downloadd users!!!')
    }
  }
)

export const addContactThunk = createAsyncThunk(
  'contact/add',
  async (contact : Contact, thunkAPI) => {
    try {
      const response = await axios.post<Contact>(URL,contact);
      return response.data;
    }catch(error) {
      return thunkAPI.rejectWithValue("Couldnt add contact");
    }
  }
)

export const deleteContactThunk = createAsyncThunk(
  'contact/delete',
  async (id : number, thunkAPI) => {
    try{
      await axios.delete(`${URL}/${id}`)
      return id
    }catch(error){
      return thunkAPI.rejectWithValue("Couldnt delte contact");
    }
  }
)