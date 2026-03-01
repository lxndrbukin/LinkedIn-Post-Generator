import { type JSX } from "react";

export default function GeneratorSettings(): JSX.Element {
  return <div className="settings">
    <h3>Advanced Settings</h3>
    <form className="form">
      <div className="form-input-field">
        <label><input type="checkbox" /> System Message</label>
        <textarea placeholder="Enter the system message..." />
      </div>
      <div className="form-input-field">
        <label><input type="checkbox" /> Examples <span>(optional)</span></label>
        <textarea placeholder="Provide output examples to the AI model..." />
      </div>
    </form>
  </div>;
}