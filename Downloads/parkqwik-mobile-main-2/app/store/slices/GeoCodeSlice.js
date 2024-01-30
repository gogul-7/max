import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOOGLE_API_KEY } from "@env";

export const fetchGeocode = createAsyncThunk(
  "fetchGeocode",
  async (placeId) => {
    const url = `https://places.googleapis.com/v1/places/${placeId}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-FieldMask": "location",
        "X-Goog-Api-Key": GOOGLE_API_KEY,
      },
    };
    try {
      const response = await fetch(url, options);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }
);

const geocodeSlice = createSlice({
  name: "geocode",
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGeocode.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchGeocode.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGeocode.rejected, (state, action) => {
      state.isError = true;
      console.log(action.error);
    });
  },
});

export default geocodeSlice.reducer;
