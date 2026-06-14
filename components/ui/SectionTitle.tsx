interface SectionTitleProps {
  subtitle?: string;
  title: string;
  center?: boolean;
}

export default function SectionTitle({ subtitle, title, center }: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {subtitle && (
        <p
          className="font-body text-xs uppercase tracking-widest mb-3"
          style={{ color: "#A05C8A" }}
        >
          {subtitle}
        </p>
      )}
      <h2 className="section-title">{title}</h2>
      <div className={`mt-4 ${center ? "divider-ornament mx-auto max-w-xs" : "divider-ornament max-w-xs"}`}>
        <span className="font-display italic text-sm" style={{ color: "#5B2B63" }}>✦</span>
      </div>
    </div>
  );
}
