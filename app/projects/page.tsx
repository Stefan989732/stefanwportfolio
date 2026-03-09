import PortfolioCard from "../components/PortfolioCard";

export default function Projects() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h1 className="flex justify-center text-4xl md:text-6xl text-[var(--text-primary)] gap-2 pt-8 pb-2 text-center">
          Uitgelichte projecten
        </h1>
        <p className="flex justify-center text-xl md:text-2xl text-[var(--text-primary)] gap-2 pb-8 text-center">
          Dit zijn mijn beste projecten
        </p>

        <PortfolioCard />
      </div>
    </div>
  );
}
