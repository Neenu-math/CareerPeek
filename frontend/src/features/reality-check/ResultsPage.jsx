import { Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { careersDb } from "@/careersDb";
import { careerContent } from "@/careerContent";
import { traitDefinitions } from "./config/traits";
import { careerAssessmentProfiles } from "./config/profiles";
import { resultCopy, signalPhrases } from "./config/resultCopy";
import { readSession, useResultsSession } from "./session";
import { buildResult } from "./engine";
import "./reality-check.css";

export default function ResultsPage({ career, illustration, artFor }) {
  useResultsSession(career.slug);
  const session = readSession(career.slug);
  const careerPath = `/careers/${career.slug}`;
  if (!session.completed) return <Navigate to={careerPath} replace />;
  const result = buildResult(session.answers, career.slug, careersDb.map(item => item.slug));
  const profile = careerAssessmentProfiles[career.slug];
  const careerLabel = resultCopy.careerLabels[career.slug];
  const connectionCopy = resultCopy.careerConnections[career.slug];
  const connectionSentence = result.overlap.length
    ? connectionCopy.aligned.replace("{signal}", signalPhrases[result.overlap[0]])
    : connectionCopy.exploring;

  return <main className={`rc-page rc-results rc-accent-${profile.accent}`}>
    <Link to={careerPath} className="back-link" data-testid="results-back-to-career"><ArrowLeft size={16} /> Back to {career.name}</Link>
    <header className="rc-result-heading">
      <div><span className="eyebrow" data-testid="results-eyebrow"><span className="eyebrow-dot" /> YOUR REALITY CHECK</span><h1 data-testid="results-title">{resultCopy.title}</h1><p data-testid="results-intro">{resultCopy.intro}</p></div>
      <img src={illustration} alt={`${career.name} illustration`} data-testid="results-career-illustration" />
    </header>
    <section className="rc-signals-section" aria-labelledby="rc-signals-heading">
      <h2 id="rc-signals-heading" data-testid="results-signals-heading">{resultCopy.signalsTitle}</h2>
      <div className="rc-signal-grid">{result.strongest.map(id => {
        const trait = traitDefinitions[id];
        return <article key={id} className="rc-signal" data-testid={`result-signal-${id}`}><h3 data-testid={`result-signal-name-${id}`}>{trait.label}</h3><p data-testid={`result-signal-description-${id}`}>{trait.description}</p></article>;
      })}</div>
      <p className="rc-result-disclaimer" data-testid="results-disclaimer">{resultCopy.disclaimer}</p>
    </section>
    <section className="rc-discovery" aria-labelledby="rc-discovery-heading" data-testid="results-career-discovery">
      <span className="eyebrow" data-testid="results-discovery-eyebrow">CAREERS WORTH EXPLORING</span>
      <h2 id="rc-discovery-heading" data-testid="results-discovery-heading">{resultCopy.discoveryTitle}</h2><p data-testid="results-discovery-description">{resultCopy.discoveryIntro}</p>
      <div className="rc-recommendations">{result.recommendations.map(({ slug, shared }) => {
        const related = careerContent[slug];
        return <article className="rc-recommendation" key={slug} data-testid={`career-recommendation-${slug}`}><img src={artFor(slug)} alt={`${related.name} illustration`} data-testid={`recommended-career-image-${slug}`} /><h3 data-testid={`recommended-career-name-${slug}`}>{related.name}</h3><p data-testid={`recommended-career-reason-${slug}`}>{shared.length ? shared.map(id => signalPhrases[id]).join(" + ") : "Another perspective on work to explore"}</p><Link to={`/careers/${slug}`} className="text-button" data-testid={`recommended-career-explore-${slug}`}>Explore Career <ArrowRight size={16} /></Link></article>;
      })}</div>
    </section>
    <section className="rc-career-meaning" aria-labelledby="rc-career-meaning-title" data-testid="results-career-interpretation">
      <h2 id="rc-career-meaning-title" data-testid="results-career-meaning-title">How this connects to {careerLabel}</h2>
      <p data-testid="results-career-meaning-copy">{connectionSentence}</p>
    </section>
    <section className="rc-result-connect connect-section" data-testid="results-meet-professionals" aria-labelledby="results-connect-heading">
      <div className="rc-result-connect-copy">
        <span className="eyebrow" data-testid="results-connect-eyebrow"><span className="eyebrow-dot" /> KEEP EXPLORING</span>
        <h2 id="results-connect-heading" data-testid="results-connect-heading">{resultCopy.connectTitle}</h2>
        <p data-testid="results-connect-description">{resultCopy.connectIntro}</p>
      </div>
      <div className="connect-actions rc-result-actions">
        <a href={`https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(career.name)}`} target="_blank" rel="noreferrer" className="primary-button" data-testid="results-linkedin-button">Find professionals on LinkedIn <ExternalLink size={17} /></a>
        <Link to="/careers" className="text-button" data-testid="results-explore-another-career">Explore another career <ArrowRight size={16} /></Link>
      </div>
    </section>
  </main>;
}