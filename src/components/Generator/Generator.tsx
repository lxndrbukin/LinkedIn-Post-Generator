import { type JSX } from 'react';
import GeneratorForm from './GeneratorForm';
import GeneratorSettings from './GeneratorSettings';

export default function Generator(): JSX.Element {
  return (
    <div className="generator">
      <h3>LinkedIn Post Generator</h3>
      <p>Powered by Claude</p>
      <GeneratorForm />
      <GeneratorSettings />
      <button>Generate</button>
    </div>
  );
}
