import { type JSX } from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../store';

export default function GeneratorOutput(): JSX.Element {
  const { image } = useSelector((state: RootState) => state.generator.prompt);
  const { output } = useSelector((state: RootState) => state.generator);

  return (
    <div className="post-preview">
      <h3>Preview</h3>
      <div className="post-preview-content">
        <div className="post-preview-content-text">{output}</div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
