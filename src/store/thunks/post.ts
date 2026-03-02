import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { GeneratorProps } from '../slices/types';

type GeneratePostArgs = Pick<GeneratorProps, 'prompt' | 'systemMessage'>;

export const generatePost = createAsyncThunk(
  'generator/generatePost',
  async (data: GeneratePostArgs) => {
    const response = await axios.post('/api/post', {
      prompt: data.prompt,
      systemMessage: data.systemMessage,
    });
    return response.data.output;
  }
);
