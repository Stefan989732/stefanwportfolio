'use client'

import {
  Image,
  Divider
} from "@heroui/react";
import SkillsSection from "./components/SkillsSection";
import ProjectsCard from "./components/ProjectsCard";
import HobbiesCard from "./components/HobbiesCard";

export default function Home() {
  return (
    
    <div className='px-3 text-[var(--text-primary)]'>
      <section className="grid md:grid-cols-3 gap-6 bg-[var(--surface)] rounded-xl shadow-xl/30 border-2 border-t-4 border-[var(--accent)] py-12">

        <div className="flex items-center justify-center p-6">
          <h1 className="text-5xl text-center">Stefan Wurpel</h1>
        </div>

        <div className="flex justify-center items-center p-6 overflow-hidden">
          <Image
            src="/ProfilePicture.jpg"
            className="mask-radial-at-center mask-radial-from-50% mask-radial-to-70%"
          />

        </div>

        <div className="flex items-center p-6">
          <p>
            Welkom op mijn portfolio website. Hier laat ik zien wie ik ben en
            waar ik voor sta.
            <br /><br />
            Ik ben Stefan Wurpel, 26 jaar en op zoek naar een nieuwe uitdaging.
            Ik heb een passie voor design, frontend development & consultancy.
            Ik werk graag aan projecten met sociale impact en een combinatie
            tussen techniek en menselijke interactie.
          </p>
        </div>

      </section>
      <div className="flex items-center text-4xl text-[var(--text-secondary)] gap-2 py-8">
        <Divider />Skills<Divider />
        </div>

      <SkillsSection />

      <div className="flex items-center text-4xl text-[var(--text-secondary)] gap-2 py-8"><Divider />Projecten<Divider /></div>

      <ProjectsCard />

      <div className="flex items-center text-4xl text-[var(--text-secondary)] gap-2 py-8"><Divider /><h1>Hobby's</h1><Divider /></div>

      <HobbiesCard />

    </div>
  );
}
