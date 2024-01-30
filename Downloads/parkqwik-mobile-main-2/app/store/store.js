import { configureStore } from "@reduxjs/toolkit";
import rcReducer from "./slices/RcSlice";
import placeReducer from "./slices/PlaceSlice";
import geocodeReducer from "./slices/GeoCodeSlice";

export const Store = configureStore({
  reducer: {
    rcData: rcReducer,
    placeData: placeReducer,
    geoCode: geocodeReducer,
  },
});
