import "./BeforeYouChoose.css";

export const BeforeYouChoose = ({ content, heading = "BEFORE YOU CHOOSE", perspective }) => {
  const perspectives = [
    { key: "love", icon: "✨", title: "WHAT YOU MIGHT LOVE", items: content.whatYouMightLove },
    { key: "know", icon: "👀", title: "WHAT YOU SHOULD KNOW", items: content.whatYouShouldKnow },
  ];

  return (
    <section className="detail-section before-you-choose" aria-labelledby="before-you-choose-heading" data-testid="before-you-choose-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow" data-testid="before-you-choose-eyebrow"><span className="eyebrow-dot" /> 04 / A BALANCED LOOK</span>
          <h2 id="before-you-choose-heading" data-testid="before-you-choose-heading">{heading}</h2>
        </div>
      </div>
      {perspective && <p className="choice-first-hand" data-testid="first-hand-perspective">{perspective}</p>}
      <div className="choice-perspectives">
        {perspectives.map(({ key, icon, title, items }) => (
          <section className={`choice-perspective choice-perspective--${key}`} key={key} aria-labelledby={`choice-${key}-heading`} data-testid={`before-you-choose-${key}`}>
            <h3 id={`choice-${key}-heading`} data-testid={`before-you-choose-${key}-heading`}>
              <span className="choice-symbol" aria-hidden="true">{icon}</span>
              <span>{title}</span>
            </h3>
            <ul className="choice-notes" data-testid={`before-you-choose-${key}-list`}>
              {items.map(({ title: noteTitle, description }, index) => (
                <li key={noteTitle} data-testid={`before-you-choose-${key}-item-${index}`}>
                  <h4 data-testid={`before-you-choose-${key}-title-${index}`}>{noteTitle}</h4>
                  <p data-testid={`before-you-choose-${key}-description-${index}`}>{description}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
};