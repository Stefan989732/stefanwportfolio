
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
    <Navbar />
<div className='p-3'>
    <div className="bg-white shadow-lg rounded-xl p-6 border padding-4">
  <h1 className="rounded-xl w-full h-150 object-cover rounded-t-xl text-gray-600">Stefan Wurpel</h1>
  <h3 className="text-xl font-bold mt-4 mb-2 text-gray-600">Welkom</h3>
  <p className="text-gray-600 mb-4">Korte beschrijving van de inhoud.</p>
  <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Lees meer</button>
  </div>
  </div>
</div>
  );
}
