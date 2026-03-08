'use client'

import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { Image } from "@heroui/react";

export default function Experience() {
    return (
        <div className="px-4 md:px-6 text-black flex flex-col items-center gap-10">

            {/* WORK EXPERIENCE */}
            <section className="bg-white w-full max-w-6xl rounded-xl shadow-xl border-2 border-t-4 border-[var(--accent)] py-8 md:py-12 px-6 md:px-10">

                <div className="max-w-5xl mx-auto">

                    <div className="flex items-center gap-4 mb-10 border-b-4 border-[var(--accent)]">
                        <h2 className="text-3xl md:text-4xl font-semibold pb-4">
                            Werkervaring
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative pl-6 md:pl-10 space-y-12">

                        <div className="absolute left-3 top-0 h-full w-1 bg-[var(--accent)] rounded" />

                        {/* Coderdojo */}
                        <div className="relative">
                            <div className="absolute xl:-left-9 -left-5 top-6 w-5 h-5 bg-[var(--detail)] rounded-full border-4 border-white shadow-md" />

                            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 border-l-4 border-[var(--accent)]">
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                    Vrijwilligerswerk — Coderdojo
                                </h3>

                                <p className="text-gray-600">
                                    <CiCalendar className="inline" /> nov 2021 - heden
                                </p>

                                <p className="text-gray-600 mb-4">
                                    <CiLocationOn className="inline" /> Bergen op Zoom, Nederland
                                </p>

                                <p className="mb-4">
                                    Tijdens de Coderdojo help ik kinderen met het leren van programmeren.
                                    Samen met andere vrijwilligers begeleiden we de kinderen bij hun eerste
                                    stappen in software development.
                                </p>

                                <p className="font-semibold mb-3">Verantwoordelijkheden:</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                    <div><GoDotFill className="inline text-[var(--detail)]" /> Kinderen helpen met coderen</div>
                                    <div><GoDotFill className="inline text-[var(--detail)]" /> Ouders te woord staan</div>
                                    <div><GoDotFill className="inline text-[var(--detail)]" /> Toezicht houden</div>
                                    <div><GoDotFill className="inline text-[var(--detail)]" /> Informeren over programmeren</div>
                                </div>
                            </div>
                        </div>

                        {/* JRCZ */}
                        <div className="relative">
                            <div className="absolute xl:-left-9 -left-5 top-6 w-5 h-5 bg-[var(--detail)] rounded-full border-4 border-white shadow-md" />

                            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 border-l-4 border-[var(--accent)]">
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                    Stagiair — JRCZ
                                </h3>

                                <p className="text-gray-600">
                                    <CiCalendar className="inline" /> feb 2024 - jul 2024
                                </p>

                                <p className="text-gray-600 mb-4">
                                    <CiLocationOn className="inline" /> Middelburg, Nederland
                                </p>

                                <p className="mb-4">
                                    Tijdens mijn stage ontwikkelde ik een serious game voor de
                                    verpleegkundeopleiding waarmee studenten medische handelingen
                                    digitaal kunnen oefenen ter voorbereiding op toetsen.
                                </p>

                                <p className="font-semibold mb-3">Verantwoordelijkheden:</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                    <div><GoDotFill className="inline text-[var(--detail)]" /> Game design</div>
                                    <div><GoDotFill className="inline text-[var(--detail)]" /> Playtests met studenten</div>
                                    <div><GoDotFill className="inline text-[var(--detail)]" /> C# development</div>
                                    <div><GoDotFill className="inline text-[var(--detail)]" /> Probleemanalyse</div>
                                    <div><GoDotFill className="inline text-[var(--detail)]" /> Documentatie</div>
                                </div>
                            </div>
                        </div>

                        {/* Enovation */}
                        <div className="relative">
                            <div className="absolute xl:-left-9 -left-5 top-6 w-5 h-5 bg-[var(--detail)] rounded-full border-4 border-white shadow-md" />

                            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 border-l-4 border-[var(--accent)]">
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                    Stagiair — Enovation
                                </h3>

                                <p className="text-gray-600">
                                    <CiCalendar className="inline" /> feb 2023 - jul 2023
                                </p>

                                <p className="text-gray-600 mb-4">
                                    <CiLocationOn className="inline" /> Rotterdam, Nederland
                                </p>

                                <p className="mb-4">
                                    Tijdens mijn stage ontwikkelde ik een interne tool voor het
                                    Service & Support team om hun workflow efficiënter te maken.
                                    Hierbij werkte ik nauw samen met UX designers en de product owner.
                                </p>

                                <p className="font-semibold mb-3">Verantwoordelijkheden:</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                    <div><GoDotFill className="inline text-[var(--detail)]" /> Design basis maken</div>
                                    <div><GoDotFill className="inline text-[var(--detail)]" /> Analyse oud systeem</div>
                                    <div><GoDotFill className="inline text-[var(--detail)]" /> PHP development</div>
                                    <div><GoDotFill className="inline text-[var(--detail)]" /> Feedback verwerken</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* EDUCATION */}
            <section className="bg-white w-full max-w-6xl rounded-xl shadow-xl border-2 border-t-4 border-[var(--accent)] py-8 md:py-12 px-6 md:px-10">

                <div className="flex items-center gap-4 mb-10 border-b-4 border-[var(--accent)]">
                    <h2 className="text-3xl md:text-4xl font-semibold pb-4">
                        Opleidingen
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 border-r-4 border-[var(--accent)]">
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">
                            HBO-ICT — HZ
                        </h3>

                        <p className="text-gray-600">
                            <CiCalendar className="inline" /> feb 2020 - jul 2024
                        </p>

                        <p className="text-gray-600 mb-4">
                            <CiLocationOn className="inline" /> Middelburg
                        </p>

                        <div className="grid grid-cols-2 gap-2">
                            <div><GoDotFill className="inline text-[var(--detail)]" /> Agile werken</div>
                            <div><GoDotFill className="inline text-[var(--detail)]" /> Teamrollen</div>
                            <div><GoDotFill className="inline text-[var(--detail)]" /> Teamwork</div>
                            <div><GoDotFill className="inline text-[var(--detail)]" /> Hulp zoeken</div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 border-l-4 border-[var(--accent)]">
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">
                            Social Work — HZ
                        </h3>

                        <p className="text-gray-600">
                            <CiCalendar className="inline" /> aug 2018 - feb 2019
                        </p>

                        <p className="text-gray-600 mb-4">
                            <CiLocationOn className="inline" /> Vlissingen
                        </p>

                        <div className="grid grid-cols-2 gap-2">
                            <div><GoDotFill className="inline text-[var(--detail)]" /> Luisteren</div>
                            <div><GoDotFill className="inline text-[var(--detail)]" /> Observeren</div>
                            <div><GoDotFill className="inline text-[var(--detail)]" /> Problemen herkennen</div>
                            <div><GoDotFill className="inline text-[var(--detail)]" /> Vragen stellen</div>
                        </div>
                    </div>

                </div>

                {/* OTHER EXPERIENCE */}

                <div className="mt-14 border-b-4 border-[var(--accent)] mb-8">
                    <h2 className="text-3xl md:text-4xl font-semibold pb-4">
                        Overige ervaring
                    </h2>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border-2 border-t-4 border-[var(--accent)]">
                    <div className="flex flex-col md:flex-row gap-6">

                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                Mantelzorger
                            </h3>

                            <p className="text-gray-600">
                                <CiCalendar className="inline" /> 2014 - aug 2024
                            </p>

                            <p className="text-gray-600 mb-4">
                                <CiLocationOn className="inline" /> Thuis
                            </p>

                            <p>
                                Ik ben bijna tien jaar mantelzorger geweest voor mijn moeder,
                                waarbij ik vooral mentale ondersteuning en hulp in het dagelijks
                                leven heb geboden.
                            </p>
                        </div>

                        <div className="w-full md:w-48">
                            <Image
                                src="/Moeder.JPG"
                                width={200}
                                height={200}
                                className="rounded-xl object-cover object-[50%_20%] border-[var(--detail)] border-2"
                                alt="Moeder"
                            />
                        </div>

                    </div>
                </div>

            </section>

        </div>
    )
}