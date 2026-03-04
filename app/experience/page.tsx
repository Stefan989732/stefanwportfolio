'use client'

import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import {
    Image
} from "@heroui/react";

export default function experience() {
    return (
        <div className='px-3 text-black flex flex-col items-center gap-8'>
            <section className="bg-white w-6xl  rounded-xl shadow-xl/30 border-2 border-t-4 border-[var(--accent)] py-12">

                <div className="max-w-5xl mx-auto">

                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-12 border-b-4 border-[var(--accent)]">
                        <h2 className="text-4xl font-semibold mb-4">
                            Werkervaring
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative pl-10 space-y-16">

                        <div className="absolute left-3 top-0 h-full w-1 bg-[var(--accent)] rounded" />

                        <div className="relative">
                            <div className="absolute -left-9 top-6 w-5 h-5 bg-[var(--detail)] rounded-full border-4 border-white shadow-md" />

                            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-l-6 border-[var(--accent)]">
                                <h3 className="text-2xl font-semibold mb-2">
                                    Vrijwilligerswerk — Coderdojo
                                </h3>
                                <p className="text-gray-600">
                                    <CiCalendar className="flex inline" /> nov 2021 - heden
                                </p>
                                <p className="text-gray-600 mb-4">
                                    <CiLocationOn className="flex inline" /> Bergen op Zoom, Nederland
                                </p>
                                <p className="mb-4">Tijdens de Coderdojo help ik kinderen met het leren van programmeren.
                                    Dit doe ik samen met een team van vrijwilligers, gezamelijk zorgen wij ervoor dat de kinderen meedoen en wat opsteken van programmeren.</p>
                                <p className="mb-4 text-l font-semibold">Verantwoordelijkheden:</p>
                                <div className="grid grid-cols-3 space-y-4">
                                    <div><GoDotFill className="text-[var(--detail)] flex inline" /> Kinderen helpen met coderen</div>
                                    <div><GoDotFill className="text-[var(--detail)] flex inline" /> Ouders tewoord staan bij vragen</div>
                                    <div><GoDotFill className="text-[var(--detail)] flex inline" /> Toezicht houden</div>
                                    <div><GoDotFill className="text-[var(--detail)] flex inline" /> Informeren over programmeren</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-9 top-6 w-5 h-5 bg-[var(--detail)] rounded-full border-4 border-white shadow-md" />

                            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-l-6 border-[var(--accent)]">
                                <h3 className="text-2xl font-semibold mb-2">
                                    Stagair — JRCZ
                                </h3>
                                <p className="text-gray-600">
                                    <CiCalendar className="flex inline" /> feb 2024 - jul 2024
                                </p>
                                <p className="text-gray-600 mb-4">
                                    <CiLocationOn className="flex inline" /> Middelburg, Nederland
                                </p>
                                <p className="mb-4">Tijdens mijn stage bij JRCZ heb ik een Serious game ontwikkeld voor de verpleegkunde opleiding.
                                    Dit project heb ik zelf opgesteld en bedacht, het project was bedoeld om de studenten een mogelijkheid te bieden om zich
                                    beter voor te bereiden op toetsen door een digitale versie van de medische handelingen aan te bieden.</p>
                                <p className="mb-4 text-l font-semibold">Verantwoordelijkheden:</p>
                                <div className="grid grid-cols-3 space-y-4">
                                    <div><GoDotFill className="text-[var(--detail)] flex inline" /> Design maken</div>
                                    <div><GoDotFill className="text-[var(--detail)] flex inline" /> Playtests doen bij studenten</div>
                                    <div><GoDotFill className="text-[var(--detail)] flex inline" /> Coderen in C#</div>
                                    <div><GoDotFill className="text-[var(--detail)] flex inline" /> Analyse maken van probleem</div>
                                    <div><GoDotFill className="text-[var(--detail)] flex inline" /> Documenteren voor toekomstig gebruik</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-9 top-6 w-5 h-5 bg-[var(--detail)] rounded-full border-4 border-white shadow-md" />

                            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-l-6 border-[var(--accent)]">
                                <h3 className="text-2xl font-semibold mb-2">
                                    Stagair — Enovation
                                </h3>
                                <p className="text-gray-600">
                                    <CiCalendar className="flex inline" /> feb 2023 - jul 2023
                                </p>
                                <p className="text-gray-600 mb-4">
                                    <CiLocationOn className="flex inline" /> Rotterdam, Nederland
                                </p>
                                <p className="mb-4">Tijdens mijn stage bij Enovation heb ik een tool ontwikkeld voor de Service & Support team van het bedrijf.
                                    Hierbij heb ik veel gelet op de workflow van dat team en heb ik nauw samengewerkt met het UX-design team, Product Owner en Service & Support zelf.
                                </p>
                                <p className="mb-4 text-l font-semibold">Verantwoordelijkheden:</p>
                                <div className="grid grid-cols-3 space-y-4">
                                    <div><GoDotFill className="text-[var(--detail)] flex inline" /> Design basis maken</div>
                                    <div><GoDotFill className="text-[var(--detail)] flex inline" /> Analyse maken van het oude systeem</div>
                                    <div><GoDotFill className="text-[var(--detail)] flex inline" /> Coderen in PHP</div>
                                    <div><GoDotFill className="text-[var(--detail)] flex inline" /> Feedback vragen & verwerken</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white w-6xl rounded-xl p-8 shadow-xl/30 border-2 border-t-4 border-[var(--accent)] py-12">
                <div className="flex items-center gap-4 mb-12 border-b-4 border-[var(--accent)]">
                    <h2 className="text-4xl font-semibold mb-4">
                        Opleidingen
                    </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-4 border-2 border-r-6 border-[var(--accent)] ml-100">
                    <h3 className="text-2xl font-semibold mb-2">
                        HBO-ICT — HZ university of applied sciences
                    </h3>
                    <p className="text-gray-600">
                        <CiCalendar className="flex inline" /> feb 2020 - jul 2024
                    </p>
                    <p className="text-gray-600 mb-4">
                        <CiLocationOn className="flex inline" /> Middelburg, Nederland
                    </p>
                    <p className="mb-4 text-l font-semibold">Leermomenten:</p>
                    <div className="grid grid-cols-3 space-y-2">
                        <div><GoDotFill className="text-[var(--detail)] flex inline" /> Hulpzoeken bij mensen</div>
                        <div><GoDotFill className="text-[var(--detail)] flex inline" /> Teamverband werken</div>
                        <div><GoDotFill className="text-[var(--detail)] flex inline" /> Agile werken</div>
                        <div><GoDotFill className="text-[var(--detail)] flex inline" /> Teamrollen ontdekken</div>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-l-6 border-[var(--accent)] mr-100">
                    <h3 className="text-2xl font-semibold mb-2">
                        Social work — HZ university of applied sciences
                    </h3>
                    <p className="text-gray-600">
                        <CiCalendar className="flex inline" /> aug 2018 - feb 2019
                    </p>
                    <p className="text-gray-600 mb-4">
                        <CiLocationOn className="flex inline" /> Vlissingen, Nederland
                    </p>
                    <p className="mb-4 text-l font-semibold">Leermomenten:</p>
                    <div className="grid grid-cols-3 space-y-2">
                        <div><GoDotFill className="text-[var(--detail)] flex inline" /> Goed luisteren</div>
                        <div><GoDotFill className="text-[var(--detail)] flex inline" /> Problemen herkennen</div>
                        <div><GoDotFill className="text-[var(--detail)] flex inline" /> Observeren</div>
                        <div><GoDotFill className="text-[var(--detail)] flex inline" /> Juiste vragen stellen</div>
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-12 border-b-4 border-[var(--accent)]">
                    <h2 className="text-4xl font-semibold mb-4 mt-8 ">
                        Overige ervaring
                    </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-4 border-2 border-r-6 border-[var(--accent)]">
                    <div className="flex items-start justify-between gap-8">
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-2">
                                Mantelzorger
                            </h3>
                            <p className="text-gray-600">
                                <CiCalendar className="inline" /> 2014 - aug 2024
                            </p>
                            <p className="text-gray-600 mb-4">
                                <CiLocationOn className="inline" /> Thuis, Nederland
                            </p>
                            <p>
                                Ik ben bijna 10 jaar mantelzorger geweest voor mijn moeder.
                                Hierbij heb ik vooral veel mentale ondersteuning geboden.
                                In augustus 2024 is ze helaas plotseling overleden.
                            </p>
                        </div>
                        <div className="w-48 shrink-0">
                            <Image
                                src="/Moeder.jpg"
                                width={200}
                                height={200}
                                className="rounded-xl object-cover object-[50%_20%]"
                                alt="Moeder"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}