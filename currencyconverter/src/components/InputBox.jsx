/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useId } from 'react';

// Component Definition
function InputBox ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    

    // Generate unique ID for input
    const id = useId()



    // Define UI
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>

            <div className="w-1/2">
                <label htmlFor={id}>{label}</label>
                <input
                    type="number"
                    id={id}
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value)}
                    disabled={amountDisabled}
                    placeholder='Amount'
                    className='w-full outline-none bg-transparent py-1.5'
                />
            </div>

            <div className="w-1/2 flex justify-end text-right">
                <p className='w-full mb-2 text-black/40'>Currency Type</p>
                <select
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>

        </div>
    )
}

export default InputBox