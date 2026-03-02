import { type JSX } from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../store';
import ReactMarkdown from 'react-markdown';

export default function GeneratorOutput(): JSX.Element {
  const { image } = useSelector((state: RootState) => state.generator.prompt);
  const { output } = useSelector((state: RootState) => state.generator);

  const src =
    image?.type === 'file'
      ? `data:${image?.mediaType};base64,${image?.data}`
      : image?.data;

  return (
    <div className="post-preview">
      <h3>Preview</h3>
      <div className="post-preview-content">
        <div className="post-preview-content-text">
          {output ? (
            <ReactMarkdown>{output}</ReactMarkdown>
          ) : (
            'Your generated post will appear here...'
          )}
        </div>
        {image && <img src={src} alt="image" />}
      </div>
    </div>
  );
}
