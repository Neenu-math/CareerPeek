import { Slider } from "@/components/ui/slider";
import { mixPreferences } from "../config/interactions";

export const PreferenceMix = ({ values, onChange }) => <div className="rc-mix" data-testid="preference-mix">
  {mixPreferences.map(preference => {
    const value = values[preference.id];
    const description = value < 40 ? `More ${preference.left.toLowerCase()}` : value > 60 ? `More ${preference.right.toLowerCase()}` : "A bit of both";
    return <div className="rc-mix-row" key={preference.id}>
      <div className="rc-mix-labels" data-testid={`mix-labels-${preference.id}`}><span><span aria-hidden="true">{preference.icons[0]}</span> {preference.left}</span><span>{preference.right} <span aria-hidden="true">{preference.icons[1]}</span></span></div>
      <Slider className="rc-slider" value={[value]} min={0} max={100} step={1} onValueChange={([next]) => onChange({ ...values, [preference.id]: next })} data-testid={`mix-track-${preference.id}`} thumbProps={{ "data-testid": `mix-slider-${preference.id}`, "aria-label": `${preference.left} to ${preference.right}`, "aria-valuetext": description }} />
      <span className="rc-mix-position" data-testid={`mix-position-${preference.id}`}>{description}</span>
    </div>;
  })}
</div>;