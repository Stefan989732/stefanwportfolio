export default function SkillsCard({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--surface)] rounded-xl border-t-4 border-[var(--accent)] p-6 shadow-xl/60 border-2">
      <h2 className="text-4xl text-center border-b-4 border-[var(--accent)] pb-4 mb-6">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-8 justify-items-center">
        {children}
      </div>
    </div>
  );
}