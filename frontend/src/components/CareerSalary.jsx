import { defaultSalary } from "@/careerDefaults";

export const CareerSalary = ({ career }) => {
  const salary = career.salary || defaultSalary(career.tag);
  const note = career.salaryNote || "Indicative annual ranges commonly reported in India (₹). Actual pay depends on your role, location, employer, specialization and the choices you make along the way.";
  return <section className="salary-section" data-testid="salary-section" aria-labelledby="career-salary-heading">
    <div className="section-heading"><div><span className="eyebrow"><span className="eyebrow-dot" /> A HONEST LOOK</span><h2 id="career-salary-heading" data-testid="career-salary-heading">WHAT COULD YOU EARN?</h2></div><p>A rough sense of shape. Earnings vary widely with country, city, employer, specialization and experience.</p></div>
    <div className="salary-grid">{salary.map(([label, range], i) => <div className={`salary-card salary-card-${i}`} key={label} data-testid={`salary-${label.toLowerCase().replaceAll(" ", "-")}`}><span className="salary-label">{label}</span><div className="salary-range">{range}</div></div>)}</div>
    <p className="salary-note" data-testid="salary-note">{note}</p>
  </section>;
};