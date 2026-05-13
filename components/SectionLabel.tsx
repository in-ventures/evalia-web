type Props = {
  number: string;
  label: string;
  invert?: boolean;
};

export function SectionLabel({ number, label, invert = false }: Props) {
  return (
    <div className={`ev-sec-label ${invert ? "ev-sec-label--invert" : ""}`.trim()}>
      <span className="n">{number}</span>
      <span className="line"></span>
      <span className="label">{label}</span>
    </div>
  );
}
