import HobbiesItem from "./HobbiesItem";

export default function HobbiesCard() {
  return (
    <section className="flex flex-wrap gap-8 justify-center mb-8">

      <HobbiesItem
        title="Gaming"
        image="/Gaming.jpg"
        description="Ik speel graag games met vrienden in verschillende team based games. Daarnaast doe ik ook graag co-op puzzle games met vrienden."
      />
      <HobbiesItem
        title="Cosplay"
        image="/cosplay.jpg"
        description="Ik ben altijd creatief ingesteld en ben recentelijk meer bezig met cosplay. Op dit moment ben ik bezig met mijn eerste cosplay zelf te maken."
      />
      <HobbiesItem
        title="Sporten"
        image="/Gym.jpg"
        description="Ik ben op moment vier keer per week aan het sporten, dit doe ik om gezond te blijven en om mezelf goed te voelen."
      />
      <HobbiesItem
        title="Wandelen"
        image="/Wandelen.jpg"
        description="Ik ben graag in de natuur en wandel daarom graag veel in het bos. 
        Hierbij probeer ik ook zo min mogelijk op mijn telefoon te kijken om zo op te gaan in de natuur."
      />

    </section>
  );
}