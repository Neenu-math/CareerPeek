import { Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { careersDb } from "@/careersDb";
import { careerContent } from "@/careerContent";
import { traitDefinitions } from "./config/traits";
import { careerAssessmentProfiles } from "./config/profiles";
import { resultCopy } from "./config/resultCopy";
import { readSession } from "./session";
import { buildResult } from "./engine";
import "./reality-check.css";

const RealityNotes = ({ title, items, testId }) => <section className={`rc-reality-notes ${testId}`} data-testid={testId}>
  <h3 data-testid={`${testId}-heading`}>{title}</h3>
  <ul>{items.map((item, index) => <li key={item.text} data-testid={`${testId}-item-${index}`}><span aria-hidden="true">{item.icon}</span><p>{item.text}</p></li>)}</ul>
</section>;

export default function ResultsPage({ career, illustration, artFor }) {
  const session = readSession(career.slug);
  const assessmentPath = `/careers/${career.slug}/reality-check`;
  if (!session.completed) return <Navigate to={assessmentPath} replace />;
  const result = buildResult(session.answers, career.slug, careersDb.map(item => item.slug));
  const profile = careerAssessmentProfiles[career.slug];
  const overlappingNames = result.overlap.map(id => traitDefinitions[id].label).join(" + ");

  return <main className={`rc-page rc-results rc-accent-${profile.accent}`}>
    <Link to={assessmentPath} className="back-link" data-testid="results-back-to-assessment"><ArrowLeft size={16} /> Revisit my choices</Link>
    <header className="rc-result-heading">
      <div><span className="eyebrow" data-testid="results-eyebrow"><span className="eyebrow-dot" /> YOUR REALITY CHECK</span><h1 data-testid="results-title">{resultCopy.title}</h1><p data-testid="results-intro">{resultCopy.intro}</p></div>
      <img src={illustration} alt={`${career.name} illustration`} data-testid="results-career-illustration" />
    </header>
    <section className="rc-signals-section" aria-labelledby="rc-signals-heading">
      <h2 id="rc-signals-heading" data-testid="results-signals-heading">{resultCopy.signalsTitle}</h2>
      <div className="rc-signal-grid">{result.strongest.map(id => {
        const trait = traitDefinitions[id];
        return <article key={id} className="rc-signal" data-testid={`result-signal-${id}`}><span className="rc-signal-icon" aria-hidden="true">{trait.icon}</span><h3 data-testid={`result-signal-name-${id}`}>{trait.label}</h3><p data-testid={`result-signal-description-${id}`}>{trait.description}</p></article>;
      })}</div>
      <p className="rc-result-disclaimer" data-testid="results-disclaimer">{resultCopy.disclaimer}</p>
    </section>
    <section className="rc-career-meaning" aria-labelledby="rc-career-meaning-title" data-testid="results-career-interpretation">
      <span className="eyebrow" data-testid="results-career-name">{career.name.toUpperCase()}</span>
      <h2 id="rc-career-meaning-title" data-testid="results-career-meaning-title">What this means for {career.name}</h2>
      <p data-testid="results-career-meaning-copy">{result.overlap.length ? `Your ${overlappingNames} signals overlap with some aspects of ${career.name.toLowerCase()} work. These connections may be worth exploring, rather than settling the decision.` : resultCopy.noOverlap}</p>
      <div className="rc-reality-columns">
        {result.natural.length ? <RealityNotes title={resultCopy.naturalTitle} items={result.natural} testId="results-natural" /> : <section className="rc-reality-notes results-natural" data-testid="results-natural"><h3 data-testid="results-natural-heading">{resultCopy.naturalTitle}</h3><p data-testid="results-natural-empty">A first-hand conversation may help you discover aspects of this work that these six experiences haven't captured.</p></section>}
        <RealityNotes title={resultCopy.considerTitle} items={result.considerations} testId="results-considerations" />
      </div>
    </section>
    <section className="rc-discovery" aria-labelledby="rc-discovery-heading" data-testid="results-career-discovery">
      <span className="eyebrow" data-testid="results-discovery-eyebrow">CAREERS WORTH EXPLORING</span>
      <h2 id="rc-discovery-heading" data-testid="results-discovery-heading">{resultCopy.discoveryTitle}</h2><p data-testid="results-discovery-description">{resultCopy.discoveryIntro}</p>
      <div className="rc-recommendations">{result.recommendations.map(({ slug, shared }) => {
        const related = careerContent[slug];
        return <article className="rc-recommendation" key={slug} data-testid={`career-recommendation-${slug}`}><img src={artFor(slug)} alt={`${related.name} illustration`} data-testid={`recommended-career-image-${slug}`} /><h3 data-testid={`recommended-career-name-${slug}`}>{related.name}</h3><p data-testid={`recommended-career-reason-${slug}`}>{shared.length ? shared.map(id => traitDefinitions[id].label).join(" + ") : "Another perspective on work to explore"}</p><Link to={`/careers/${slug}`} className="text-button" data-testid={`recommended-career-explore-${slug}`}>Explore Career <ArrowRight size={16} /></Link></article>;
      })}</div>
    </section>
    <section className="rc-result-connect" data-testid="results-meet-professionals">
      <div><span aria-hidden="true" className="rc-connect-icon">🤝</span><h2 data-testid="results-connect-heading">{resultCopy.connectTitle}</h2><p data-testid="results-connect-description">{resultCopy.connectIntro}</p></div>
      <a href={`https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(career.name)}`} target="_blank" rel="noreferrer" className="primary-button" data-testid="results-linkedin-button">Meet professionals on LinkedIn <ExternalLink size={17} /></a>
    </section>
    <Link to={`/careers/${career.slug}/roadmap`} className="text-button" data-testid="results-back-to-career"><ArrowLeft size={16} /> Back to {career.name}</Link>
  </main>;
}