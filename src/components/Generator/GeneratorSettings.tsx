import { type JSX, type ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  type RootState,
  type AppDispatch,
  setExamples,
  setSystemMessage,
  setImage,
} from '../../store';

export default function GeneratorSettings(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { systemMessage } = useSelector((state: RootState) => state.generator);
  const { examples } = useSelector(
    (state: RootState) => state.generator.prompt
  );

  const [systemMsg, showSystemMsg] = useState<boolean>(false);
  const [outputExamples, showOutputExamples] = useState<boolean>(false);
  const [imageUploadType, setImageUploadType] = useState<'file' | 'url'>(
    'file'
  );

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = (reader.result as string).split(',')[1];
      dispatch(
        setImage({
          type: imageUploadType,
          data: base64,
          mediaType: file.type,
        })
      );
    };
    reader.readAsDataURL(file);
  };

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
              value={examples ?? ''}
              placeholder="Provide output examples to the AI model..."
              onChange={(e) => dispatch(setExamples(e.target.value))}
            />
          )}
        </div>
        <div className="form-input-field">
          <label>
            Image <span>(optional)</span>
          </label>
          <div className="form-img-select">
            <button type="button" onClick={() => setImageUploadType('file')}>
              Image File
            </button>
            <button type="button" onClick={() => setImageUploadType('url')}>
              URL
            </button>
          </div>
          {imageUploadType === 'file' ? (
            <input onChange={handleFileChange} type="file" accept="image/*" />
          ) : (
            <input
              onChange={(e) =>
                dispatch(
                  setImage({
                    type: imageUploadType,
                    data: e.target.value,
                  })
                )
              }
              type="text"
              placeholder="Enter image URL..."
            />
          )}
        </div>
      </form>
    </div>
  );
}
