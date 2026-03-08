// SkillsCard.tsx - GEFIXT VOOR SCHERM VULLEN
export default function SkillsCard({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--surface)] py-6 rounded-xl border-t-4 border-[var(--accent)] p-8 md:p-12 shadow-xl/60 border-2 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-center border-b-4 border-[var(--accent)] pb-6 md:pb-8 mb-8 md:mb-12">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8 md:gap-10 w-full justify-items-center">
        {children}
      </div>
    </div>
  );
}
