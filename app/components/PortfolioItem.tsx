import Image from "next/image";

type PortfolioItem = {
  title: string;
  description: React.ReactNode;
  image: string;
  details: string[];
  type: string;
  tags: string[];
  learningPoints: string[];
  objectPosition?: string;
};

export default function PortfolioItem({
  title,
  description,
  image,
  details,
  type,
  tags,
  learningPoints,
  objectPosition = "50% 35%",
}: PortfolioItem) {
  return (
    <div className="bg-[var(--surface)] rounded-xl border-2 border-t-4 border-[var(--accent)] shadow-xl/30 overflow-hidden">

      <Image
        src={image}
        alt={title}
        width={1200}
        height={600}
        className="w-full bg-white h-48 sm:h-56 md:h-64 object-fill border-b-4 border-[var(--detail)]"
        style={{ objectPosition }}
      />

      <div className="p-4 sm:p-6">

        <p className="rounded-xl w-fit px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-[var(--accent)] to-[var(--detail)] text-white mb-3">
          {type}
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          {title}
        </h3>

        <p className="text-sm mb-4 text-justify whitespace-pre-line">
          {description}
        </p>


          <ul className="text-sm space-y-1 mb-4 text-[var(--text-secondary)]">
          {details.map((detail) => (
            <li key={detail}>
              <span className="text-[var(--text-primary)]">{detail}</span>
            </li>
          ))}
        </ul>


        <p className="font-semibold mb-2 text-left">
          Belangrijkste lessen:
        </p>

        <ul className="text-sm list-disc list-inside space-y-1 mb-4 text-[var(--accent)]">
          {learningPoints.map((point) => (
            <li key={point}>
              <span className="text-[var(--text-primary)]">{point}</span>
            </li>
          ))}
        </ul>

        <p className="font-semibold mb-2 text-left">
          Gebruikte technieken:
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-xl px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-[var(--accent)] to-[var(--detail)] text-white"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}