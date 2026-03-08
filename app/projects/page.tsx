import PortfolioCard from "../components/PortfolioCard";

export default function projects() {
    return(
        <div>
        <div className='px-3'>
        <h1 className="flex justify-center text-6xl text-[var(--text-primary)] gap-2 pt-8 pb-2">Uitgelichte projecten</h1>
        <p className="flex justify-center text-2xl text-[var(--text-primary)] gap-2 pb-8">Dit zijn mijn beste projecten</p>

            <PortfolioCard />
            
          </div>
      </div>
    )
}