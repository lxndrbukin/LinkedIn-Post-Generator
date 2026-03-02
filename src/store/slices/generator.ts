import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type GeneratorProps, type ImageProps } from './types';
import { generatePost } from '../thunks/post';

const initialState: GeneratorProps = {
  prompt: {
    message: '',
    image: null,
    examples: null,
  },
  systemMessage: '',
  output: '',
  isLoading: false,
};

const generatorSlice = createSlice({
  name: 'generator',
  initialState,
  reducers: {
    setPrompt: (state: GeneratorProps, action: PayloadAction<string>) => {
      state.prompt.message = action.payload;
    },
    setSystemMessage: (
      state: GeneratorProps,
      action: PayloadAction<string>
    ) => {
      state.systemMessage = action.payload;
    },
    setExamples: (state: GeneratorProps, action: PayloadAction<string>) => {
      state.prompt.examples = action.payload;
    },
    setImage: (state: GeneratorProps, action: PayloadAction<ImageProps>) => {
      state.prompt.image = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(generatePost.pending, (state: GeneratorProps) => {
      state.isLoading = true;
    });
    builder.addCase(
      generatePost.fulfilled,
      (state: GeneratorProps, action: PayloadAction<string>) => {
        state.output = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(generatePost.rejected, (state: GeneratorProps) => {
      state.isLoading = false;
    });
  },
});

export default generatorSlice.reducer;
export const { setPrompt, setSystemMessage, setExamples, setImage } =
  generatorSlice.actions;
