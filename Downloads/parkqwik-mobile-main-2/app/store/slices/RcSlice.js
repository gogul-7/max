import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SUREPASS_TOKEN, SUREPASS_BASE_URL } from "@env";

const url = `${SUREPASS_BASE_URL}/api/v1/rc/rc-full`;
const token = SUREPASS_TOKEN;

// console.log(SUREPASS_BASE_URL);

export const fetchRcDetails = createAsyncThunk("fetchRcDetails", async (id) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      id_number: id,
    }),
  };
  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    console.log(error);
  }
});

const rcDataSlice = createSlice({
  name: "rcData",
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRcDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchRcDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRcDetails.rejected, (state, action) => {
      state.isError = true;
      console.log(action.error);
    });
  },
});

export default rcDataSlice.reducer;
