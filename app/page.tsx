
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
    <Navbar />

    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 max-w-sm padding-4">
  <img className="w-full h-48 object-cover rounded-t-xl" src="afbeelding.jpg" alt="Voorbeeld" />
  <h3 className="text-xl font-bold mt-4 mb-2">Titel</h3>
  <p className="text-gray-600 mb-4">Korte beschrijving van de inhoud.</p>
  <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Lees meer</button>
  </div>
</div>
  );
}
