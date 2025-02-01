import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City, Variant } from "@/types";

interface WeatherState {
  cities: City[];
  selectedCity: string;
  variant: Variant;
}

const initialState: WeatherState = {
  cities: [],
  selectedCity: "",
  variant: "B",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCities: (state, action: PayloadAction<City[]>) => {
      state.cities = action.payload;
    },
    setSelectedCity: (state, action: PayloadAction<string>) => {
      state.selectedCity = action.payload;
    },
    setVariant: (state, action: PayloadAction<Variant>) => {
      state.variant = action.payload;
    },
  },
});

export const { setCities, setSelectedCity, setVariant } = weatherSlice.actions;
export default weatherSlice.reducer;
