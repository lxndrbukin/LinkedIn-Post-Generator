import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type GeneratorProps } from './types';

const initialState: GeneratorProps = {
  prompt: '',
  systemMessage: '',
  examples: '',
  isLoading: false
};

const generatorSlice = createSlice({
  name: 'generator',
  initialState,
  reducers: {
    setPrompt: (state: GeneratorProps, action: PayloadAction<string>) => {
      state.prompt = action.payload;
    },
    setSystemMessage: (state: GeneratorProps, action: PayloadAction<string>) => {
      state.systemMessage = action.payload;
    },
    setExamples: (state: GeneratorProps, action: PayloadAction<string>) => {
      state.examples = action.payload;
    }
  }
});

export default generatorSlice.reducer;
export const { setPrompt, setSystemMessage, setExamples } = generatorSlice.actions;