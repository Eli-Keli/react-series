import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // Set up State Variables
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const [copiedPassword, setCopiedPassword] = useState(false);

  //Password generator function
  const generatePassword = useCallback(() => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      characters += '0123456789';
    }

    if (charAllowed) {
      characters += '!@#$%^&*()_+-=[]{}|;:,.<>/?';
    }

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setPassword(result);
  }, [length, numberAllowed, charAllowed]);

  // Reference the password field
  const passwordRef = useRef(null)


  // useEffect hook
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed])


  // Copy to clipboard functionality
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
    setCopiedPassword(true);

    setTimeout(() => {
      setCopiedPassword(false);
    }, 1000);
  }


  return (
    // Create UI
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center text-xl my-3'>Generate your Password</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          placeholder='Password'
          value={password}
          ref={passwordRef}
          readOnly
          className='outline-none w-full py-1 px-3'
        />
        <button
          onClick={copyPasswordToClipboard}
          className={copiedPassword ? 'outline-none bg-green-700 text-white px-3 py-0.5 shrink-0' : 'outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'}
        >
          {copiedPassword ? "copied" : "copy"}
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min="6"
            max="100"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='cursor-pointer'
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
