import { motion, useReducedMotion } from "framer-motion";
import { ChoiceCard } from "./ChoiceExperiences";

export const TradeoffDeck = ({ index, value, onChange, tradeoffs }) => {
  const reduceMotion = useReducedMotion();
  const pair = tradeoffs[index];
  return <div className="rc-tradeoff-deck">
    <div className="rc-pair-progress" data-testid="tradeoff-progress" aria-live="polite">Little choice {index + 1} of {tradeoffs.length}<span aria-hidden="true">{tradeoffs.map((_, i) => <i key={i} className={i <= index ? "is-active" : ""} />)}</span></div>
    <motion.div key={index} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}>
      <h2 className="rc-pair-prompt" data-testid="tradeoff-prompt">{pair.prompt}</h2>
      <div className="rc-tradeoff-options">
        {pair.options.map(option => <ChoiceCard key={option.id} option={option} selected={value === option.id} onClick={() => onChange(option.id)} prefix={`tradeoff-${index}`} />)}
        <span className="rc-or" aria-hidden="true">or</span>
      </div>
    </motion.div>
  </div>;
};