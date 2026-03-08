// SkillsItem.tsx (maak dit component als het nog niet bestaat)
interface SkillsItemProps {
  icon: React.ComponentType<any>;
  label: string;
  color?: string;
}

export default function SkillsItem({ icon: Icon, label, color }: SkillsItemProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 hover:scale-105 transition-transform group">
      <Icon className={`w-16 h-16 ${color || 'text-white'} group-hover:scale-110 transition-transform`} />
      <span className="text-sm font-medium text-center text-[var(--text-primary)] leading-tight max-w-[80px]">{label}</span>
    </div>
  );
}
