import { FaPeopleGroup } from "react-icons/fa6";
import { FaStar, FaPaintBrush } from "react-icons/fa";
import Image from "next/image";

export default function aboutme() {
    return (
        <div className="p-3 text-[var(--text-primary)]">
            <div>
                <h1 className="text-[var(--text-primary)] text-4xl justify-center flex">Hoi, ik ben Stefan Wurpel</h1>
                <p className="text-[var(--text-secondary)] text-2xl justify-center flex pb-12">Een developer, een designer, een liefhebber van koffie & een creatieve denker </p>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center">
                <div>
                    <Image
                        src="/Stefan.jpg"
                        alt="me"
                        width={1200}
                        height={1200}
                        className="mask-b-from-60%  mask-t-from-90% mask-radial-[40%_51%] mask-radial-from-80% pb-12"
                    />
                </div>
                <div className="md:max-w-2xl sm:max-w-l text-[var(--text-primary)]"><p className="py-6 sm:py-8 md:py-12">Van jongs af aan haal ik veel voldoening uit het helpen van anderen.
                    Of het nu gaat om iemand ondersteunen, een probleem oplossen of iets maken waar anderen echt iets aan hebben —
                    dat geeft mij energie. Die drang om waarde toe te voegen aan het leven van anderen vormt nog steeds de basis van wat ik doe.
                    <br /><br />
                    Daarnaast ben ik al lange tijd gefascineerd door design en creativiteit.
                    Het proces van een idee omzetten naar iets tastbaars — een ontwerp, een interface of een digitale ervaring — blijft voor mij bijzonder.
                    Ik vind het interessant om te zoeken naar oplossingen die niet alleen goed werken, maar er ook prettig en doordacht uitzien.
                    <br /><br />
                    Mijn pad is niet altijd eenvoudig geweest.
                    Juist door de uitdagingen die ik heb meegemaakt, heb ik geleerd om door te zetten, mezelf te blijven ontwikkelen en open te staan voor anderen.
                    Die ervaringen hebben mij gevormd tot een sociaal, betrokken en veerkrachtig persoon.
                    <br /><br />
                    Vandaag combineer ik mijn interesse in technologie, design en mensen om digitale oplossingen te maken die zowel functioneel als toegankelijk zijn.
                    Voor mij gaat het uiteindelijk niet alleen om wat je bouwt, maar vooral om wat het voor anderen kan betekenen.</p>
                </div>
            </div>
            <div className="px-4 md:px-6 flex flex-col items-center gap-10">
    <div className="bg-[var(--surface)] w-full max-w-6xl rounded-xl shadow-xl border-2 border-t-4 border-[var(--accent)] py-8 md:py-12 px-6 md:px-10">
        <h1 className="text-4xl justify-center flex pb-12">Wat mij drijft</h1>
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-20 justify-center items-center">
            <div className="flex flex-col items-center gap-4 mb-8 md:mb-0">
                <FaPeopleGroup className="border-4 p-3 border-[var(--detail)] rounded-full h-32 w-32 bg-[var(--accent)] overflow-visible" />
                <p className="text-center max-w-xs leading-tight">werken met mensen om een positieve sociale impact te maken.</p>
            </div>
            <div className="flex flex-col items-center gap-4 mb-8 md:mb-0">
                <FaPaintBrush className="border-4 p-6 border-[var(--detail)] rounded-full h-32 w-32 bg-[var(--accent)] overflow-visible" />
                <p className="text-center max-w-xs leading-tight">Creatief werk doen dat mijn passie voor design en development voedt.</p>
            </div>
            <div className="flex flex-col items-center gap-4 mb-8 md:mb-0">
                <FaStar className="border-4 p-3 border-[var(--detail)] rounded-full h-32 w-32 bg-[var(--accent)] overflow-visible" />
                <p className="text-center max-w-xs leading-tight">Mezelf blijven ontwikkelen door nieuwe technologieën en vaardigheden te leren</p>
            </div>
        </div>
    </div>
</div>


            <div className="text-[var(--text-primary)] text-4xl justify-center flex pb-6 pt-12">Buiten werk</div>
            <div className="px-4 md:px-6 flex flex-col items-center gap-10">
    <div className="w-full max-w-6xl grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        <div className="bg-[var(--surface)] rounded-xl shadow-lg py-6 md:py-8 border-2 border-t-4 border-[var(--accent)]">
            <h1 className="border-b-2 border-[var(--accent)] text-4xl justify-center flex pb-2">Sport</h1>
            <p className="justify-center flex p-4">Ik sport ongeveer vier keer per week om zowel fysiek als mentaal sterk te blijven.
                Het helpt mij discipline op te bouwen en consistent aan mijn doelen te werken.</p>
        </div>
        <div className="bg-[var(--surface)] rounded-xl shadow-lg py-6 md:py-8 border-2 border-t-4 border-[var(--accent)]">
            <h1 className="border-b-2 border-[var(--accent)] text-4xl justify-center flex pb-2">Cosplay</h1>
            <p className="p-4">Momenteel werk ik aan mijn eerste cosplayproject.
                Dit geeft mij de kans om creativiteit, probleemoplossend denken en oog voor detail te combineren.</p>
        </div>
        <div className="bg-[var(--surface)] rounded-xl shadow-lg py-6 md:py-8 border-2 border-t-4 border-[var(--accent)]">
            <h1 className="border-b-2 border-[var(--accent)] text-4xl justify-center flex pb-2">Wandelen</h1>
            <p className="p-4">Wandelen helpt mij om mijn hoofd leeg te maken en nieuwe energie op te doen.
                Het is een moment waarop ik kan reflecteren en met een frisse blik verder kan.</p>
        </div>
        <div className="bg-[var(--surface)] rounded-xl shadow-lg py-6 md:py-8 border-2 border-t-4 border-[var(--accent)]">
            <h1 className="border-b-2 border-[var(--accent)] text-4xl justify-center flex pb-2">Koken</h1>
            <p className="p-4">Koken geeft mij de ruimte om creatief te zijn en nieuwe dingen uit te proberen.
                Ik vind het leuk om gerechten te maken waar anderen van kunnen genieten.</p>
        </div>
        <div className="bg-[var(--surface)] rounded-xl shadow-lg py-6 md:py-8 border-2 border-t-4 border-[var(--accent)]">
            <h1 className="border-b-2 border-[var(--accent)] text-4xl justify-center flex pb-2">Gamen</h1>
            <p className="p-4">Gamen doe ik vaak samen met vrienden, waarbij samenwerken en communicatie centraal staan.
                Het is een leuke manier om strategie en teamwork te combineren.</p>
        </div>
        <div className="bg-[var(--surface)] rounded-xl shadow-lg py-6 md:py-8 border-2 border-t-4 border-[var(--accent)]">
            <h1 className="border-b-2 border-[var(--accent)] text-4xl justify-center flex pb-2">Tekenen en 3D</h1>
            <p className="p-4">Ik werk graag met digitale tools om ideeën visueel tot leven te brengen.
                Het helpt mij mijn creativiteit te ontwikkelen en nieuwe technieken te leren.</p>
        </div>
    </div>
</div>
</div>
    )
}