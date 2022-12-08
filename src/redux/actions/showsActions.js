import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api/api";

const getShows = createAsyncThunk("getShows", async ({id}) => {
  try {
    const res = await axios.get(`${API}/shows/?hotelId=${id}`); //Respuesta de la API

    return {
      shows: res.data.searched,
    };
  } catch (error) {
    console.log(error.message);
    return {
      shows: [],
    };
  }
});

const createShows = createAsyncThunk("createShows", async (data) => {
  try {
    const res = await axios.post(`${API}shows/`, data);

    if (res.data.success) {
      return {
        success: true,
        idShowCreated: res.data.id,
      };
    } else {
      return { success: false, error: res.data.message };
    }
  } catch (error) {
    console.log(error.message);
    return {
      error: error.message,
    };
  }
});

const deleteShows = createAsyncThunk("deleteShows", async (data) => {
  const { id, token } = data;
  let headers = { headers: { Authorization: `Bearer ${data.token}` } };
  try {
    const res = await axios.delete(`${API}/shows/${id}`, headers);

    return {
      idShowDeleted: res.data.idDeleted,
    };
  } catch (error) {
    console.log(error.message);
    return {
      shows: [],
    };
  }
});

const editShows = createAsyncThunk("editShows", async (data) => {
  const { id, info, token } = data;

  let headers = { headers: { Authorization: `Bearer ${token}` } };
  try {
    const res = await axios.patch(`${API}/shows/${id}`, info, headers);

    return {
      idShowEdited: res.data.id,
    };
  } catch (error) {
    console.log(error.message);
    return {
      shows: [],
    };
  }
});

const showsActions = {
  getShows,
  deleteShows,
  editShows,
  createShows,
};

export default showsActions;
