import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prompt: "",
  systemMessage: "",
  examples: "",
  reasoning: ""
};

const generatorSlice = createSlice({
  name: 'generator',
  initialState,
  reducers: {}
});

export default generatorSlice.reducer;