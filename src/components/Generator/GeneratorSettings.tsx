import { type JSX, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  type RootState,
  type AppDispatch,
  setExamples,
  setSystemMessage,
} from '../../store';

export default function GeneratorSettings(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { systemMessage, examples } = useSelector(
    (state: RootState) => state.generator
  );

  const [systemMsg, showSystemMsg] = useState<boolean>(false);
  const [outputExamples, showOutputExamples] = useState<boolean>(false);
  const [imageUpload, setImageUpload] = useState<'file' | 'url'>('file');

  return (
    <div className="settings">
      <h3>Advanced Settings</h3>
      <form className="form">
        <div className="form-input-field">
          <label>
            <input
              type="checkbox"
              onChange={(e) => showSystemMsg(e.target.checked)}
            />{' '}
            System Message
          </label>
          {systemMsg && (
            <textarea
              value={systemMessage}
              placeholder="Enter the system message..."
              onChange={(e) => dispatch(setSystemMessage(e.target.value))}
            />
          )}
        </div>
        <div className="form-input-field">
          <label>
            <input
              type="checkbox"
              onChange={(e) => showOutputExamples(e.target.checked)}
            />{' '}
            Examples <span>(optional)</span>
          </label>
          {outputExamples && (
            <textarea
              value={examples}
              placeholder="Provide output examples to the AI model..."
              onChange={(e) => dispatch(setExamples(e.target.value))}
            />
          )}
        </div>
        <div className="form-input-field">
          <label>
            Image <span>(optional)</span>
          </label>
          <button type="button" onClick={() => setImageUpload('file')}>
            Image File
          </button>
          <button type="button" onClick={() => setImageUpload('url')}>
            URL
          </button>
          {imageUpload === 'file' ? (
            <input type="file" accept="image/*" />
          ) : (
            <input type="text" placeholder="Enter image URL..." />
          )}
        </div>
      </form>
    </div>
  );
}
