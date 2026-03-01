import { type JSX } from "react";

export default function GeneratorForm(): JSX.Element {
  return <form className="form">
    <div className="form-input-field">
      <label>Prompt</label>
      <textarea placeholder="Enter your prompt..." />
    </div>
  </form>;
}