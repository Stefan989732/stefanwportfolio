import Link from "next/link";
import Image from "next/image";

type ProjectsItem = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function ProjectsItem({
  title,
  description,
  image,
  href,
}: ProjectsItem) {
  return (
    <div className="max-w-sm bg-[var(--surface)] rounded-xl border-2 border-t-4 border-[var(--accent)] shadow-xl/30 overflow-hidden">

      <Link href={href} className="block">

        {/* Image */}
        <Image
          src={image}
          alt={title}
          width={400}
          height={220}
          className="w-full h-52 object-cover border-b-4 border-[var(--detail)] object-cover "
        />

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">{title}</h3>

          <p className="text-sm mb-4">
            {description}
          </p>

          <button className="hover:scale-105 transition-transform cursor-pointer border px-4 py-2 rounded-xl bg-[var(--detail)]">
            Lees meer
          </button>
        </div>

      </Link>
    </div>
  );
}