import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../../api/api";

const getHotels = createAsyncThunk("getHotels", async ({text}) => {
  try {
    const inputText = text.inputText;
    const option = text.option;
    const respuesta = await axios.get(`${API}hotels/?name=${text}`);

    return { hotelsR: respuesta.data.Hotels };
  } catch (error) {
    console.log(error.message);
  }
});

const getHotelsAdmin = createAsyncThunk("getHotelsAdmin", async (id) => {
  try {
    const respuesta = await axios.get(`${API}hotels/?userId=${id}`);

    return { hotelsAdmin: respuesta.data.Hotels };
  } catch (error) {
    console.log(error.message);
  }
});

const editHotelsAdmin = createAsyncThunk("editHotelsAdmin", async (data) => {
  let headers = { headers: { Authorization: `Bearer ${data.token}` } };

  try {
    const respuesta = await axios.patch(
      `${API}hotels/${data.id}`,
      data.objeto,
      headers
    );

    return { hotelsAdmin: respuesta.data.hotelito };
  } catch (error) {
    console.log(error.message);
  }
});

const deleteHotelsAdmin = createAsyncThunk(
  "deleteHotelsAdmin",
  async (data) => {
    let headers = { headers: { Authorization: `Bearer ${data.token}` } };
    try {
      const respuesta = await axios.delete(`${API}hotels/${data.id}`, headers);

      return { hotel: respuesta.data.hotel };
    } catch (error) {
      console.log(error.message);
    }
  }
);

const getAllHotels = createAsyncThunk("getAllHotels", async () => {
  try {
    const respuesta = await axios.get(`${API}hotels/`);

    return { hotels: respuesta.data.Hotels };
  } catch (error) {
    console.log(error.message);
  }
});

const getSpecificHotel = createAsyncThunk("getSpecificHotel", async ({id}) => {
  try {
    const respuesta = await axios.get(`${API}hotels/${id}`);

    return {hotel: respuesta.data.hotel };
  } catch (error) {
    console.log(error.message);
  }
});




const hotelsAction = {
  editHotelsAdmin,
  getHotels,
  deleteHotelsAdmin,
  getAllHotels,
  getHotelsAdmin,
  getSpecificHotel
};

export default hotelsAction;
