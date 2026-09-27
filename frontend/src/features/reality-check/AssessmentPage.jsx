import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getCareerInteractions } from "./config/careerVariants";
import { careerAssessmentProfiles } from "./config/profiles";
import { stepComplete, answersComplete } from "./answers";
import { useAssessmentSession } from "./session";
import { AssessmentProgress } from "./components/AssessmentProgress";
import { EnergyWorkday } from "./components/EnergyWorkday";
import { EnvironmentPicker, ChangeResponse, MotivationPicker } from "./components/ChoiceExperiences";
import { TradeoffDeck } from "./components/TradeoffDeck";
import { PreferenceMix } from "./components/PreferenceMix";
import { AssessmentBookend } from "./components/AssessmentBookend";
import "./reality-check.css";

export default function AssessmentPage({ career, illustration }) {
  const reduceMotion = useReducedMotion();
  const { session, update, answer, saveError } = useAssessmentSession(career.slug);
  const { step, answers, tradeoffIndex, phase } = session;
  const configuration = getCareerInteractions(career.slug);
  const interaction = configuration.stages[step];
  const profile = careerAssessmentProfiles[career.slug];
  const inPair = step === 2;
  const morePairs = inPair && tradeoffIndex < configuration.tradeoffs.length - 1;
  const ready = morePairs ? Boolean(answers.tradeoffs[tradeoffIndex]) : stepComplete(answers, step);

  useEffect(() => {
    document.getElementById("rc-experience-title")?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [step, tradeoffIndex, phase]);

  const next = () => {
    if (!ready) return;
    if (morePairs) update({ tradeoffIndex: tradeoffIndex + 1 });
    else if (step < 5) update({ step: step + 1 });
    else if (answersComplete(answers)) {
      update({ completed: true, phase: "complete" });
    }
  };
  const previous = () => {
    if (inPair && tradeoffIndex > 0) update({ tradeoffIndex: tradeoffIndex - 1 });
    else if (step > 0) update({ step: step - 1 });
    else update({ phase: "intro" });
  };
  if (phase !== "assessment") return <AssessmentBookend career={career} label={configuration.label} illustration={illustration} complete={phase === "complete"} onBegin={() => update({ phase: "assessment" })} onReview={() => update({ phase: "assessment", step: 5, completed: false })} saveError={saveError} />;
  const experiences = [
    <EnergyWorkday activities={configuration.activities} tokens={answers.tokens} onChange={value => answer("tokens", value)} />,
    <EnvironmentPicker environments={configuration.environments} values={answers.environments} onChange={value => answer("environments", value)} />,
    <TradeoffDeck tradeoffs={configuration.tradeoffs} index={tradeoffIndex} value={answers.tradeoffs[tradeoffIndex]} onChange={value => answer("tradeoffs", answers.tradeoffs.map((old, i) => i === tradeoffIndex ? value : old))} />,
    <ChangeResponse changeResponses={configuration.changeResponses} value={answers.change} onChange={value => answer("change", value)} />,
    <MotivationPicker values={answers.motivations} onChange={value => answer("motivations", value)} />,
    <PreferenceMix values={answers.mix} onChange={value => answer("mix", value)} />,
  ];

  return <main className={`rc-page rc-accent-${profile.accent}`}>
    <Link className="back-link" to={`/careers/${career.slug}/roadmap`} data-testid="reality-check-back-to-career"><ArrowLeft size={16} /> Back to {career.name}</Link>
    <AssessmentProgress step={step} />
    <header className="rc-experience-heading">
      <div><div className="rc-career-label" data-testid="assessment-selected-career">REALITY CHECK: {configuration.label.toUpperCase()}</div><h1 id="rc-experience-title" tabIndex={-1} data-testid="assessment-experience-title">{interaction.title}</h1><p data-testid="assessment-experience-prompt">{interaction.prompt}</p></div>
      <div className="rc-career-art"><img src={illustration} alt={`${career.name} illustration`} data-testid="assessment-career-illustration" /></div>
    </header>
    <p className="rc-instruction" data-testid="assessment-instruction">{interaction.instruction}</p>
    {saveError && <p role="alert" className="rc-storage-warning" data-testid="assessment-storage-warning">This tab cannot save progress for refresh. Keep it open until you're finished.</p>}
    <motion.div key={step} className="rc-experience-body" initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }} data-testid={`assessment-experience-${interaction.id}`}>{experiences[step]}</motion.div>
    <footer className="rc-step-actions">
      <button className="text-button" onClick={previous} data-testid="assessment-previous-button"><ArrowLeft size={17} /> Back</button>
      <button className="primary-button" disabled={!ready} onClick={next} data-testid="assessment-next-button">{step === 5 ? "Finish Reality Check" : morePairs ? "Next choice" : "Continue"}<ArrowRight size={17} /></button>
    </footer>
    <p className="rc-small-note" data-testid="assessment-safety-note">Not an exam. Not a career verdict. Just a little room to get to know your preferences.</p>
  </main>;
}