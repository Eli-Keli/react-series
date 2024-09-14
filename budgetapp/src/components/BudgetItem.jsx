/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

// helper functions
import { calculateSpentByBudget, formatCurrency, formatPercentage } from '../helpers';

const BudgetItem = ({ budget }) => {
  const { id, name, amount } = budget;
  const spent = calculateSpentByBudget(id);

  return (
    <div className='budget'>

      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>

      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} Remaining</small>
      </div>

    </div>
  )
}

export default BudgetItem