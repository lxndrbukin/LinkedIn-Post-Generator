import { type JSX } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState, type AppDispatch, setPrompt } from '../../store';

export default function GeneratorForm(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { prompt } = useSelector((state: RootState) => state.generator);

  return (
    <form className="form">
      <div className="form-input-field">
        <label>Prompt</label>
        <textarea
          value={prompt}
          onChange={(e) => dispatch(setPrompt(e.target.value))}
          placeholder="Enter your prompt..."
        />
      </div>
    </form>
  );
}
