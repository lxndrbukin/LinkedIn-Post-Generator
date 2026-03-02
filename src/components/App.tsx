import { type JSX } from 'react';
import Generator from './Generator/Generator';
import GeneratorOutput from './Generator/GeneratorOutput';

export default function App(): JSX.Element {
  return (
    <div className="container">
      <Generator />
      <GeneratorOutput />
    </div>
  );
}
