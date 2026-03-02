import { type JSX } from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../store';
import GeneratorForm from './GeneratorForm';
import GeneratorSettings from './GeneratorSettings';

export default function Generator(): JSX.Element {
  const { isLoading } = useSelector((state: RootState) => state.generator);

  return (
    <div className="generator">
      <h3>LinkedIn Post Generator</h3>
      <p>Powered by Claude</p>
      <GeneratorForm />
      <GeneratorSettings />
      <button disabled={isLoading}>
        {isLoading ? 'Generating' : 'Generate'}
      </button>
    </div>
  );
}
