import { Check } from "lucide-react";
import { motivations } from "../config/interactions";

export const ChoiceCard = ({ option, selected, disabled, onClick, prefix, scene = false }) => (
  <button type="button" onClick={onClick} disabled={disabled} aria-pressed={selected} className={`rc-choice ${scene ? `rc-scene rc-scene-${option.theme}` : ""} ${selected ? "is-selected" : ""}`} data-testid={`${prefix}-${option.id}`}>
    <span className="rc-choice-tick" aria-hidden="true">{selected && <Check size={16} />}</span>
    <span className="rc-choice-icon" aria-hidden="true">{option.icon}</span>
    <span className="rc-choice-title">{option.title || option.label}</span>
    {option.lines && <span className="rc-scene-lines">{option.lines.map(line => <span key={line}>{line}</span>)}</span>}
  </button>
);

const toggle = (values, id, limit) => values.includes(id) ? values.filter(value => value !== id) : values.length < limit ? [...values, id] : values;

export const EnvironmentPicker = ({ values, onChange, environments }) => <>
  <div className="rc-selection-note" role="status" data-testid="environment-selection-count">{values.length} of 2 picked{values.length === 2 ? " · Tap a chosen scene to swap it." : ""}</div>
  <div className="rc-environment-grid">{environments.map(option => <ChoiceCard key={option.id} option={option} selected={values.includes(option.id)} disabled={values.length === 2 && !values.includes(option.id)} onClick={() => onChange(toggle(values, option.id, 2))} prefix="environment" scene />)}</div>
</>;

export const ChangeResponse = ({ value, onChange, changeResponses }) => <>
  <div className="rc-change-path" aria-hidden="true"><span>📋</span><span>→</span><span>〰️</span><span>→</span><span>💡</span></div>
  <div className="rc-change-grid">{changeResponses.map(option => <ChoiceCard key={option.id} option={option} selected={value === option.id} onClick={() => onChange(option.id)} prefix="change" />)}</div>
  <p className="rc-transition-note" role="status" data-testid="change-transition-message">{value ? "Got it. Let's keep going." : ""}</p>
</>;

export const MotivationPicker = ({ values, onChange }) => <>
  <div className="rc-selection-note" role="status" data-testid="motivation-selection-count">{values.length} of 2 picked{values.length === 2 ? " · Tap a chosen card to swap it." : ""}</div>
  <div className="rc-motivation-grid">{motivations.map(option => <ChoiceCard key={option.id} option={option} selected={values.includes(option.id)} disabled={values.length === 2 && !values.includes(option.id)} onClick={() => onChange(toggle(values, option.id, 2))} prefix="motivation" />)}</div>
</>;