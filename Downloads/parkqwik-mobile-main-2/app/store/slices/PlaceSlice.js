import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOOGLE_API_KEY } from "@env";

export const fetchPlace = createAsyncThunk("fethcPlace", async (text) => {
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&types=establishment&key=${GOOGLE_API_KEY}`;
  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "X-Goog-FieldMask":
  //       "places.displayName,places.formattedAddress,places.id,places.location",
  //     "X-Goog-Api-Key": GOOGLE_API_KEY,
  //   },
  // };

  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
});

export const placeSlice = createSlice({
  name: "placeData",
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlace.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPlace.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPlace.rejected, (state, action) => {
      state.isError = true;
      console.log(action.error);
    });
  },
});

export default placeSlice.reducer;
