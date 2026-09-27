import { assessmentInteractions } from "../config/interactions";

export const AssessmentProgress = ({ step }) => <div className="rc-progress" data-testid="reality-check-progress">
  <div className="rc-progress-label"><strong>REALITY CHECK</strong><span data-testid="reality-check-step-count" aria-live="polite">{step + 1} of 6</span></div>
  <ol aria-label="Assessment progress" className="rc-progress-track">
    {assessmentInteractions.map((item, index) => <li key={item.id} className={index <= step ? "is-active" : ""} aria-current={index === step ? "step" : undefined} aria-label={`${index + 1}. ${item.title}${index < step ? ', visited' : ''}`} data-testid={`reality-check-progress-${index}`} />)}
  </ol>
</div>;