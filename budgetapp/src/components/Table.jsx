/* eslint-disable react/prop-types */

// component
import ExpenseItem from "./ExpenseItem"

const Table = ({ expenses }) => {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <ExpenseItem expense={expense} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table