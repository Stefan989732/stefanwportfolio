import ProjectsItem from "./ProjectsItem";

export default function ProjectsSection() {
  return (
    <section className="flex flex-wrap gap-8 justify-center">

      <ProjectsItem
        title="Verpleegkunde Game"
        image="/verpleegkundeGame.png"
        href="/projects"
        description="Serious game waarin studenten medische handelingen oefenen."
      />

      <ProjectsItem
        title="ITP Generator"
        image="/Placeholder.jpg"
        href="/projects"
        description="Verbetering van schooltool met inactivity warning voor het vak ITP."
      />
      <ProjectsItem
        title="Enovation"
        image="/Placeholder.jpg"
        href="/projects"
        description="tool ontwikkeld voor de Service & Support team van het bedrijf."
      />

    </section>
  );
}