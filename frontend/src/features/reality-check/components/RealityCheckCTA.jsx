import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../reality-check.css";

export const RealityCheckCTA = ({ career }) => <section className="rc-entry" data-testid="reality-check-entry" aria-labelledby="reality-check-entry-title">
  <div>
    <span className="eyebrow" data-testid="reality-check-entry-eyebrow"><span className="eyebrow-dot" /> REALITY CHECK · 3–5 MIN</span>
    <h2 id="reality-check-entry-title" data-testid="reality-check-entry-title">Want to see your Reality Check?</h2>
    <p data-testid="reality-check-entry-description">Six little experiences. No career knowledge needed, and no right answers.</p>
  </div>
  <Link to={`/careers/${career.slug}/reality-check`} className="primary-button" data-testid="take-reality-check-button">Take the Reality Check <ArrowRight size={18} /></Link>
</section>;