import Image from "next/image";

type HobbiesItem = {
  title: string;
  description: string;
  image: string;

};

export default function HobbiesItem({
  title,
  description,
  image
}: HobbiesItem) {

  return (
    <div className="max-w-sm bg-[var(--surface)] rounded-xl border-2 border-t-4 border-[var(--accent)] shadow-xl/30 overflow-hidden">
    <Image
              src={image}
              alt={title}
              width={400}
              height={220}
              className="w-full h-52 object-cover border-b-4 border-[var(--detail)] object-cover object-[50%_35%]"
            />
    <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3 text-[var(--foreground)]">{title}</h3>

          <p className="text-sm mb-4">
            {description}
          </p>
        </div>
    </div>
  );
}