import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white py-3 px-2 rounded-3xl">
          <button
            onClick={() => setColor("olive")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: "olive" }}
          >Default
          </button>

          <button
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: "blue" }}
          >Blue
          </button>

          <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: "red" }}
          >Red
          </button>

          <button
            onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{ backgroundColor: "green" }}
          >Green
          </button>
        </div>

      </div>
    </div>
  )
}

export default App