import { type JSX } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState, type AppDispatch, generatePost } from '../../store';
import GeneratorForm from './GeneratorForm';
import GeneratorSettings from './GeneratorSettings';

export default function Generator(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, prompt, systemMessage } = useSelector(
    (state: RootState) => state.generator
  );

  return (
    <div className="generator">
      <h3>LinkedIn Post Generator</h3>
      <p>Powered by Claude</p>
      <GeneratorForm />
      <GeneratorSettings />
      <button
        onClick={() => dispatch(generatePost({ prompt, systemMessage }))}
        disabled={isLoading || !prompt.message.trim()}
      >
        {isLoading ? 'Generating' : 'Generate'}
      </button>
    </div>
  );
}
