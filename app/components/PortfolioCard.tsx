import PortfolioItem from "./PortfolioItem";

export default function PortfolioCard() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 justify-center mb-8 text-[var(--text-primary)]">
            <PortfolioItem
                title="Verpleegkunde Game"
                image="/verpleegkundeGame.png"
                description={
                    <>
                        Tijdens mijn stage bij HZ Verpleegkunde ontwikkelde ik een serious game waarmee studenten verpleegkundige handelingen virtueel kunnen oefenen wanneer praktijklokalen niet beschikbaar zijn.
                        <br /><br />
                        De game laat studenten stap voor stap een medische handeling uitvoeren en geeft feedback bij fouten, zodat zij veilig en zelfstandig kunnen oefenen.
                    </>
                }
                details={["Opdrachtgever: HZ Verpleegkunde", "Duur: 8 weken"]}
                type="Serious game"
                tags={["Unity", "C#", "Figma"]}
                learningPoints={[
                    "Tijdsmanagement",
                    "Communiceren met mensen die minder technisch zijn ingesteld",
                    "Precies werken om iets zo accuraat mogelijk te krijgen",
                    "Samenwerking met verschillende leeftijdsgroepen"
                ]}
            />
            <PortfolioItem
                title="Portfolio website"
                image="/Placeholder.jpg"
                description={
                    <>
                        Mijn persoonlijke portfolio website ontwikkeld met Next.js en Tailwind CSS om mijn projecten en technische vaardigheden overzichtelijk te presenteren.
                        <br /><br />
                        De website is opgebouwd met herbruikbare componenten en responsive design, gebaseerd op een vooraf gemaakt design in Figma.
                    </>
                }
                details={["Persoonlijk project", "Duur: 2 weken"]}
                type="Website"
                tags={["NextJS", "Tailwind", "Figma"]}
                learningPoints={["Goed nadenken over het design op zowel pc als telefoon", "NextJS maakt veel gebruik van components om duplicatie tegen te gaan"]}
                objectPosition="50% 5%"
            />
            <PortfolioItem
                title="Enovation"
                image="/Enovation.jpg"
                description={
                    <>
                        Tijdens mijn stage bij Enovation werkte ik mee aan de ontwikkeling van een interne tool voor het Service & Support team.
                        <br /><br />
                        Ik ontwikkelde functionaliteiten, verbeterde bestaande code en werkte volgens een Agile workflow met code reviews om een stabiele interne applicatie te bouwen.
                    </>}
                details={["Opdrachtgever: Enovation Service & Support", "Duur: 8 weken"]}
                type="Website"
                tags={["PHP", "SCSS", "Figma"]}
                learningPoints={["Goed communiceren tijdens design fase", "Code kwaliteit bewaren met code reviews", "Agile goed navolgen met een professioneel team",
                    "Werken met SCSS"
                ]}
            />
            <PortfolioItem
                title="Emergis Projectendashboard"
                image="/Emergis.jpg"
                description={
                    <>
                        Voor Emergis ontwikkelde ik een dashboard waarin projectinformatie uit Excel bestanden overzichtelijk wordt weergegeven.
                        <br /><br />
                        De applicatie is gebouwd met Laravel en JavaScript en ontworpen in Figma om projectdata duidelijk en toegankelijk te visualiseren.
                    </>
                }
                details={["Opdrachtgever: Emergis", "Teamleden: 5", "Duur: 8 weken"]}
                type="Website"
                tags={["PHP", "Laravel", "CSS", "Javascript", "Figma"]}
                learningPoints={["Samenwerking met een niet ICT-bedrijf", "Feedback snel en efficient verwerken", "Figma designs gebruiken ter onderbouwing van uitleg"]}
                objectPosition="50% 50%"
            />

            <PortfolioItem
                title="Autonomic Boat game"
                image="/Placeholder.jpg"
                description={
                    <>
                        Voor Museum Vlissingen ontwikkelde ik een interactieve 3D ervaring waarin bezoekers meer kunnen leren over de geschiedenis van de Autonomic Boat.
                        <br /><br />
                        De omgeving is gebouwd in Unity met 3D modellen uit Blender en laat gebruikers historische locaties virtueel verkennen.
                    </>
                }
                details={["Opdrachtgever: Muzeeum Vlissingen", "Teamleden: 5", "Duur: 8 weken"]}
                type="Serious game"
                tags={["Unity", "C#", "Blender", "Figma"]}
                learningPoints={["Samenwerking tussen Blender en Unity", "Geschiedenis combineren met ICT"]}
            />
            <PortfolioItem
                title="SDG-Tool"
                image="/SDG.jpg"
                description={
                    <>
                        Voor HZ ontwikkelde ik een webtool waarmee projecten gekoppeld kunnen worden aan de Sustainable Development Goals van de Verenigde Naties.
                        <br /><br />
                        De applicatie helpt docenten inzicht te krijgen in hoe onderwijsprojecten bijdragen aan de verschillende SDG-doelen.
                    </>
                }
                details={["Opdrachtgever: HZ University of Applied Sciences", "Teamleden: 5", "Duur: 8 weken"]}
                type="Website"
                tags={["PHP", "Laravel", "CSS"]}
                learningPoints={["Hanteren van de SDG & HZ styling regels", "Goed in beeld houden wie de doelgroep is van het project"]}
            />


            <p className="flex justify-center text-6xl text-[var(--text-primary)] gap-2 pt-12 col-span-full">Overige Projecten</p>
            <p className="flex justify-center text-2xl text-[var(--text-secondary)] gap-2 pb-6  col-span-full">Dit zijn wat overige projecten</p>

            <PortfolioItem
                title="ITP generator"
                image="/Placeholder.jpg"
                description={
                    <>
                        Voor een bestaande applicatie ontwikkelde ik een oplossing voor het probleem dat gebruikers zonder waarschuwing werden uitgelogd door inactiviteit.
                        <br /><br />
                        Met Vue.js implementeerde ik een systeem dat gebruikers vooraf waarschuwt en de mogelijkheid geeft hun sessie te verlengen.
                    </>
                }
                details={["Opdrachtgever: HZ University of Applied Sciences", "Duur: 2 weken"]}
                type="Webapplicatie"
                tags={["Vue.js"]}
                learningPoints={["Werken met Vue.js", "Bestaande code van een applicatie analyseren"]}
            />
            <PortfolioItem
                title="Dimensia"
                image="/Dimensia.jpg"
                description={
                    <>
                        Tijdens mijn minor aan De Haagse Hogeschool werkte ik in een multidisciplinair team aan de ontwikkeling van een game.
                        <br /><br />
                        Mijn rol lag voornamelijk bij het ontwerpen en modelleren van 3D assets in Blender die in de Unity game werden gebruikt.
                    </>
                }
                details={["Minor opdracht", "Teamleden: 8", "Duur: 8 weken"]}
                type="Game"
                tags={["Unity", "Blender", "Krita"]}
                learningPoints={["Werken in Blender", "Werken in een team met verschillende specialiteiten"]}
                objectPosition="50% 5%"
            />
            <PortfolioItem
                title="Basisschool game"
                image="/CyberJumper.jpg"
                description={
                    <>
                        Voor een basisschool ontwikkelde ik een serious game waarin kinderen leren over online veiligheid.
                        <br /><br />
                        De game is een platformer waarin spelers door vragen over online veiligheid correct te beantwoorden nieuwe levels kunnen bereiken.
                    </>
                }
                details={["Opdrachtgever: basisschool IKC Regenboog", "Teamleden: 5", "Duur: 4 weken"]}
                type="Serious game"
                tags={["Unity", "C#"]}
                learningPoints={["Werken in Unity", "Gebruiken van prototypes om de kinderen te laten zien"]}
                objectPosition="50% 0%"
            />

            <PortfolioItem
                title="Cyberbullying"
                image="/Placeholder.jpg"
                description={
                    <>
                        Voor dit project ontwikkelde ik een serious game die bewustzijn creëert rondom online pesten.
                        <br /><br />
                        De game is een interactieve visual novel waarin spelers keuzes maken en de gevolgen van cyberpesten ervaren.
                    </>
                }
                details={["Opdrachtgever: HZ University of Applied Sciences", "Teamleden: 2", "Duur: 2 weken"]}
                type="Serious game"
                tags={["Unreal Engine", "C++"]}
                learningPoints={["Werken in Unreal Engine", "Nadenken over de doeleindes van een serious game"]}
            />
        </section>
    );
}