import { useState } from "react";
import { DndContext, DragOverlay, KeyboardSensor, PointerSensor, pointerWithin, rectIntersection, useDraggable, useDroppable, useSensor, useSensors } from "@dnd-kit/core";
import { Minus, Plus } from "lucide-react";

const Token = ({ index, small = false }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id: `token-${index}`, data: { index } });
  return <button ref={setNodeRef} {...attributes} {...listeners} className={`rc-token ${small ? "rc-token-small" : ""}`} style={{ opacity: isDragging ? 0.25 : 1 }} aria-label={`Energy token ${index + 1}`} data-testid={`energy-token-${index}`}><span aria-hidden="true">⚡</span></button>;
};

const TokenBank = ({ tokens }) => {
  const { setNodeRef, isOver } = useDroppable({ id: "bank" });
  const remaining = tokens.filter(id => id === null).length;
  return <div ref={setNodeRef} className={`rc-token-bank ${isOver ? "rc-drop-active" : ""}`} data-testid="energy-token-bank">
    <div><strong data-testid="energy-remaining-count" aria-live="polite">{remaining ? `${remaining} energy token${remaining === 1 ? "" : "s"} left` : "Your day, your energy"}</strong><span>5 tokens · move them anytime</span></div>
    <div className="rc-token-supply">{tokens.map((target, i) => target === null && <Token key={i} index={i} />)}{remaining === 0 && <span className="rc-all-placed" data-testid="energy-all-placed">All five placed ✓</span>}</div>
  </div>;
};

const Activity = ({ activity, tokens, onAdd, onRemove }) => {
  const { setNodeRef, isOver } = useDroppable({ id: activity.id });
  const count = tokens.filter(id => id === activity.id).length;
  return <div ref={setNodeRef} className={`rc-activity ${count ? "rc-has-energy" : ""} ${isOver ? "rc-drop-active" : ""}`} data-testid={`energy-activity-${activity.id}`}>
    <button className="rc-activity-select" onClick={onAdd} disabled={!tokens.includes(null)} aria-label={`Place a token on ${activity.label}`} data-testid={`energy-place-${activity.id}`}>
      <span className="rc-activity-icon" aria-hidden="true">{activity.icon}</span>
      <span className="rc-activity-label" data-testid={`energy-activity-title-${activity.id}`}>{activity.label}</span>
    </button>
    <div className="rc-token-placed">{tokens.map((target, i) => target === activity.id && <Token key={i} index={i} small />)}</div>
    <div className="rc-energy-controls">
      <button onClick={onRemove} disabled={!count} aria-label={`Remove energy from ${activity.label}`} data-testid={`energy-remove-${activity.id}`}><Minus size={15} /></button>
      <span data-testid={`energy-count-${activity.id}`} aria-label={`${count} energy tokens`}>{count}</span>
      <button onClick={onAdd} disabled={!tokens.includes(null)} aria-label={`Add energy to ${activity.label}`} data-testid={`energy-add-${activity.id}`}><Plus size={15} /></button>
    </div>
  </div>;
};

export const EnergyWorkday = ({ tokens, onChange, activities }) => {
  const [active, setActive] = useState(null);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 6 } }), useSensor(KeyboardSensor));
  const place = (index, target) => onChange(latest => latest.map((value, i) => i === index ? target : value));
  const allocate = (target, remove = false) => onChange(latest => {
    const index = remove ? latest.lastIndexOf(target) : latest.indexOf(null);
    return latest.map((value, i) => i === index ? (remove ? null : target) : value);
  });
  const collisionDetection = args => { const hits = pointerWithin(args); return hits.length ? hits : rectIntersection(args); };
  return <DndContext sensors={sensors} collisionDetection={collisionDetection} onDragStart={({ active }) => setActive(active.id)} onDragCancel={() => setActive(null)} onDragEnd={({ active, over }) => {
    if (over && (over.id === "bank" || activities.some(a => a.id === over.id))) place(active.data.current.index, over.id === "bank" ? null : over.id);
    setActive(null);
  }}>
    <TokenBank tokens={tokens} />
    <div className="rc-activity-grid">{activities.map(activity => <Activity key={activity.id} activity={activity} tokens={tokens} onAdd={() => allocate(activity.id)} onRemove={() => allocate(activity.id, true)} />)}</div>
    <DragOverlay>{active ? <span className="rc-token rc-token-overlay" aria-hidden="true">⚡</span> : null}</DragOverlay>
  </DndContext>;
};