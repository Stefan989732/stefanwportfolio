export default function SkillsItem({
  icon: Icon,
  label,
  color
}: {
  icon: any;
  label: string;
  color?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className={`h-16 w-16 ${color ?? "text-white"}`} />
      <p className="text-2xl">{label}</p>
    </div>
  );
}