
import Navbar from '../components/Navbar'

export default function projects() {
    return(
        <div>
        <div className='px-3'>
        <div className="bg-black shadow-lg rounded-xl p-6 padding-4 w-full h-150 grid grid-cols-2 gap-4">
          <div>
            <h1 className="text-gray-600 justify-center flex text-2xl">Stefan Wurpel</h1><br />
            <p className='text-gray-600 justify-center flex'>Welcome op mijn portfolio pagina</p>
          </div>
          <div className='col-span-full'>
            {/* <p>to do:</p>
            <ul>
              <li>1 lijst projecten</li>
                <ul className='pl-6'>
                    <li>- probleem</li>
                    <li>- oplossing</li>
                    <li>- gebruikte tech</li>
                    <li>- code</li>
                </ul>
              <li>2 styling</li>
              <li>3 vaardigheden</li>
              <li>4 les per project</li>
            </ul> */}
          </div>
        </div>
      </div>
      </div>
    )
}