import SkillCard from "./SkillsCard";
import SkillsItem from "./SkillsItem";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiCplusplus,
  SiUnrealengine,
  SiBlender  
} from "react-icons/si";

import {
  FaNodeJs,
  FaLaravel,
  FaAngular,
  FaUnity,
  FaHtml5,
  FaSass,
  FaJava,
  FaVuejs 
} from "react-icons/fa";

import { TbBrandCSharp } from "react-icons/tb";

// filling the cards with my skills
export default function SkillsSection() {
  return (
    <section className="grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-y-8 justify-items-center gap-8">

      <SkillCard title="Frontend Skills">
        <SkillsItem icon={SiNextdotjs} label="Next.js" />
        <SkillsItem icon={SiTypescript} label="TypeScript" color="text-[#3178C6]" />
        <SkillsItem icon={SiTailwindcss} label="TailwindCSS" color="text-[#38bdf8]" />
        <SkillsItem icon={SiJavascript} label="JavaScript" color="text-yellow-400" />
        <SkillsItem icon={FaHtml5} label="HTML" color="text-orange-500" />
        <SkillsItem icon={FaSass} label="SCSS" color="text-pink-500" />
        <SkillsItem icon={FaAngular} label="Angular" color="text-red-500" />
        <SkillsItem icon={FaVuejs} label="Vue.js" color="text-red-500" />
      </SkillCard>

      <SkillCard title="Backend Skills">
        <SkillsItem icon={FaNodeJs} label="Node.js" color="text-[#3C873A]" />
        <SkillsItem icon={FaLaravel} label="Laravel" color="text-red-500" />
        <SkillsItem icon={SiMysql} label="MySQL" />
        <SkillsItem icon={TbBrandCSharp} label="C#" color="text-purple-500" />
        <SkillsItem icon={FaJava} label="Java" />
        <SkillsItem icon={SiCplusplus} label="C++" color="text-blue-500" />
      </SkillCard>

      <SkillCard title="Tools">
        <SkillsItem icon={SiUnrealengine} label="Unity" />
        <SkillsItem icon={FaUnity} label="Unity" />
        <SkillsItem icon={SiBlender } label="Blender" />

      </SkillCard>

    </section>
  );
}