import { useState } from "react"
import InputBox from "./components/InputBox"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
  // State initialization
  const [amount, setAmount] = useState(0)
  const [currencyFrom, setCurrencyFrom] = useState("usd")
  const [currencyTo, setCurrencyTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(currencyFrom);
  const options = Object.keys(currencyInfo);

  // Swap function
  const swap = () => {
    setCurrencyFrom(currencyTo)
    setCurrencyTo(currencyFrom)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  };

  // Convert function
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[currencyTo])
  }


  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-800'>

      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5">
          <form onSubmit={
            (e) => {
              e.preventDefault()
              convert()
            }
          }>

            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setCurrencyFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={currencyFrom}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>
                Swap
              </button>
            </div>

            <div className="w-full mb-1">
              <InputBox
                label="to"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setCurrencyTo(currency)}
                selectedCurrency={currencyTo}
                amountDisabled
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {currencyFrom.toUpperCase()} to {currencyTo.toUpperCase()}
            </button>

          </form>
        </div>

      </div>



      {/* <InputBox /> */}
    </div>
  )
}

export default App
