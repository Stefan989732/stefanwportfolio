'use client'

import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import Image from "next/image"; // ✅ Fixed import

export default function Experience() {
    return (
        <div className="px-4 md:px-6 text-[var(--text-primary)] flex flex-col items-center gap-10">

            {/* WORK EXPERIENCE */}
            <section className="bg-[var(--surface)] w-full max-w-6xl rounded-xl shadow-xl border-2 border-t-4 border-[var(--accent)] py-8 md:py-12 px-6 md:px-10">
                <div className="max-w-5xl mx-auto">

                    <div className="flex items-center gap-4 mb-10 border-b-4 border-[var(--accent)]">
                        <h2 className="text-3xl md:text-4xl font-semibold pb-4">
                            Werkervaring
                        </h2>
                    </div>

                    {/* Timeline - MOBIEL GEFIXT */}
                    <div className="relative pl-8 md:pl-12 space-y-12">
                        <div className="absolute left-2 md:left-4 top-0 h-full w-1 bg-[var(--accent)] rounded" />

                        {/* Coderdojo */}
                        <div className="relative flex items-start gap-4">
                            <div className="absolute -left-8 md:-left-10 top-6 w-5 h-5 bg-[var(--foreground)] rounded-full border-4 border-white shadow-md flex-shrink-0" />
                            <div className="bg-[var(--surface)] rounded-xl shadow-lg p-6 md:p-8 border-2 border-l-4 border-[var(--accent)] flex-1">
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                    Vrijwilligerswerk — <p className="text-[var(--foreground)] inline">Coderdojo</p>
                                </h3>
                                <p className="text-[var(--text-secondary)]">
                                    <CiCalendar className="inline" /> nov 2021 - heden
                                </p>
                                <p className="text-[var(--text-secondary)] mb-4">
                                    <CiLocationOn className="inline" /> Bergen op Zoom, Nederland
                                </p>
                                <p className="mb-4">
                                    Tijdens de Coderdojo help ik kinderen met het leren van programmeren.
                                    Samen met andere vrijwilligers begeleiden we de kinderen bij hun eerste
                                    stappen in software development.
                                </p>
                                <p className="font-semibold mb-3">Verantwoordelijkheden:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                    <div><GoDotFill className="inline text-[var(--foreground)]" /> Kinderen helpen met coderen</div>
                                    <div><GoDotFill className="inline text-[var(--foreground)]" /> Ouders te woord staan</div>
                                    <div><GoDotFill className="inline text-[var(--foreground)]" /> Toezicht houden</div>
                                    <div><GoDotFill className="inline text-[var(--foreground)]" /> Informeren over programmeren</div>
                                </div>
                            </div>
                        </div>

                        {/* JRCZ */}
                        <div className="relative flex items-start gap-4">
                            <div className="absolute -left-8 md:-left-10 top-6 w-5 h-5 bg-[var(--foreground)] rounded-full border-4 border-white shadow-md flex-shrink-0" />
                            <div className="bg-[var(--surface)] rounded-xl shadow-lg p-6 md:p-8 border-2 border-l-4 border-[var(--accent)] flex-1">
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                    Stagiair — <p className="text-[var(--foreground)] inline">JRCZ</p>
                                </h3>
                                <p className="text-[var(--text-secondary)]">
                                    <CiCalendar className="inline" /> feb 2024 - jul 2024
                                </p>
                                <p className="text-[var(--text-secondary)] mb-4">
                                    <CiLocationOn className="inline" /> Middelburg, Nederland
                                </p>
                                <p className="mb-4">
                                    Tijdens mijn stage ontwikkelde ik een serious game voor de
                                    verpleegkundeopleiding waarmee studenten medische handelingen
                                    digitaal kunnen oefenen ter voorbereiding op toetsen.
                                </p>
                                <p className="font-semibold mb-3">Verantwoordelijkheden:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                    <div><GoDotFill className="inline text-[var(--foreground)]" /> Game design</div>
                                    <div><GoDotFill className="inline text-[var(--foreground)]" /> Playtests met studenten</div>
                                    <div><GoDotFill className="inline text-[var(--foreground)]" /> C# development</div>
                                    <div><GoDotFill className="inline text-[var(--foreground)]" /> Probleemanalyse</div>
                                    <div><GoDotFill className="inline text-[var(--foreground)]" /> Documentatie</div>
                                </div>
                            </div>
                        </div>

                        {/* Enovation */}
                        <div className="relative flex items-start gap-4">
                            <div className="absolute -left-8 md:-left-10 top-6 w-5 h-5 bg-[var(--foreground)] rounded-full border-4 border-white shadow-md" />
                            <div className="bg-[var(--surface)] rounded-xl shadow-lg p-6 md:p-8 border-2 border-l-4 border-[var(--accent)] flex-1">
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                    Stagiair — <p  className="text-[var(--foreground)] inline">Enovation</p>
                                </h3>
                                <p className="text-[var(--text-secondary)]">
                                    <CiCalendar className="inline" /> feb 2023 - jul 2023
                                </p>
                                <p className="text-[var(--text-secondary)] mb-4">
                                    <CiLocationOn className="inline" /> Rotterdam, Nederland
                                </p>
                                <p className="mb-4">
                                    Tijdens mijn stage ontwikkelde ik een interne tool voor het
                                    Service & Support team om hun workflow efficiënter te maken.
                                    Hierbij werkte ik nauw samen met UX designers en de product owner.
                                </p>
                                <p className="font-semibold mb-3">Verantwoordelijkheden:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                    <div><GoDotFill className="inline text-[var(--foreground)]" /> Design basis maken</div>
                                    <div><GoDotFill className="inline text-[var(--foreground)]" /> Analyse oud systeem</div>
                                    <div><GoDotFill className="inline text-[var(--foreground)]" /> PHP development</div>
                                    <div><GoDotFill className="inline text-[var(--foreground)]" /> Feedback verwerken</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EDUCATION */}
            <section className="bg-[var(--surface)] w-full max-w-6xl rounded-xl shadow-xl border-2 border-t-4 border-[var(--accent)] py-8 md:py-12 px-6 md:px-10">
                <div className="flex items-center gap-4 mb-10 border-b-4 border-[var(--accent)]">
                    <h2 className="text-3xl md:text-4xl font-semibold pb-4">
                        Opleidingen
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[var(--surface)] rounded-xl shadow-lg p-6 md:p-8 border-2 border-r-4 border-[var(--accent)]">
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">
                            HBO-ICT — HZ
                        </h3>
                        <p className="text-[var(--text-secondary)]">
                            <CiCalendar className="inline" /> feb 2020 - jul 2024
                        </p>
                        <p className="text-[var(--text-secondary)] mb-4">
                            <CiLocationOn className="inline" /> Middelburg
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            <div><GoDotFill className="inline text-[var(--foreground)]" /> Agile werken</div>
                            <div><GoDotFill className="inline text-[var(--foreground)]" /> Teamrollen</div>
                            <div><GoDotFill className="inline text-[var(--foreground)]" /> Teamwork</div>
                            <div><GoDotFill className="inline text-[var(--foreground)]" /> Hulp zoeken</div>
                        </div>
                    </div>

                    <div className="bg-[var(--surface)] rounded-xl shadow-lg p-6 md:p-8 border-2 border-l-4 border-[var(--accent)]">
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">
                            Social Work — HZ
                        </h3>
                        <p className="text-[var(--text-secondary)]">
                            <CiCalendar className="inline" /> aug 2018 - feb 2019
                        </p>
                        <p className="text-[var(--text-secondary)] mb-4">
                            <CiLocationOn className="inline" /> Vlissingen
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            <div><GoDotFill className="inline text-[var(--foreground)]" /> Luisteren</div>
                            <div><GoDotFill className="inline text-[var(--foreground)]" /> Observeren</div>
                            <div><GoDotFill className="inline text-[var(--foreground)]" /> Problemen herkennen</div>
                            <div><GoDotFill className="inline text-[var(--foreground)]" /> Vragen stellen</div>
                        </div>
                    </div>foreground
                </div>

                {/* OTHER EXPERIENCE */}
                <div className="mt-14 border-b-4 border-[var(--accent)] mb-8">
                    <h2 className="text-3xl md:text-4xl font-semibold pb-4">
                        Overige ervaring
                    </h2>
                </div>

                <div className="bg-[var(--surface)] rounded-xl shadow-lg p-6 md:p-8 border-2 border-t-4 border-[var(--accent)]">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-semibold mb-2">
                                Mantelzorger
                            </h3>
                            <p className="text-[var(--text-secondary)]">
                                <CiCalendar className="inline" /> 2014 - aug 2024
                            </p>
                            <p className="text-[var(--text-secondary)] mb-4">
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
