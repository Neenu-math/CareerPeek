import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const AssessmentBookend = ({ career, label, illustration, complete, onBegin, onReview, saveError }) => (
  <main className="rc-page">
    <Link className="back-link" to={`/careers/${career.slug}/roadmap`} data-testid="reality-check-back-to-career"><ArrowLeft size={16} /> Back to {career.name}</Link>
    <section className="rc-bookend" data-testid={complete ? "assessment-completion" : "assessment-introduction"}>
      <div className="rc-bookend-art"><img src={illustration} alt={`${career.name} illustration`} data-testid="assessment-bookend-illustration" /></div>
      <span className="eyebrow" data-testid="assessment-bookend-eyebrow">REALITY CHECK</span>
      <p className="rc-bookend-career" data-testid="assessment-bookend-career">Reality Check: {label}</p>
      <h1 id="rc-experience-title" tabIndex={-1} data-testid="assessment-bookend-title">{complete ? "That's your Reality Check." : "Could this career fit the way you like to work?"}</h1>
      <p className="rc-bookend-copy" data-testid="assessment-bookend-copy">{complete ? "Let's see what your choices reveal about the way you like to work." : "There are no right or wrong answers. This isn't an exam. We'll give you a few situations to react to and help you understand how your preferences connect with this career."}</p>
      {complete ? <>
        <p className="rc-bookend-meta" data-testid="assessment-completion-progress">6 of 6 interactions completed</p>
        <Link className="primary-button" to={`/careers/${career.slug}/reality-check/results`} data-testid="assessment-results-button">See My Results <ArrowRight size={18} /></Link>
        <p className="rc-small-note" data-testid="assessment-saved-note">{saveError ? "Keep this tab open to keep your choices." : "Your choices are saved in this tab."}</p>
        <button className="text-button" onClick={onReview} data-testid="assessment-review-choices"><ArrowLeft size={16} /> Back to my choices</button>
      </> : <>
        <p className="rc-bookend-meta" data-testid="assessment-introduction-meta">6 quick interactions · No right or wrong answers</p>
        <button className="primary-button" onClick={onBegin} data-testid="assessment-begin-button">Let's Begin <ArrowRight size={18} /></button>
      </>}
      {saveError && <p className="rc-storage-warning" role="alert" data-testid="assessment-storage-warning">This tab cannot save progress for refresh. Keep it open until you're finished.</p>}
    </section>
  </main>
);