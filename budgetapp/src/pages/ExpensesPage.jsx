/* eslint-disable react-refresh/only-export-components */

// react-router-dom
import { useLoaderData } from "react-router-dom"

// helper functions
import { fetchData } from "../helpers"

// conmponents
import Table from "../components/Table"

// loader
export function expensesLoader() {
    const expenses = fetchData("expenses")
    return { expenses }
  }


const ExpensesPage = () => {
    // Get data from the loader
    const { expenses } = useLoaderData()
  return (
    <div className="grid-lg">
        <h1>All Expenses</h1>
        {
            expenses && expenses.length > 0 ? (
                <div className="grid-md">
                    <h2>Recent Expenses <small>({expenses.length} total)</small></h2>
                    <Table expenses={expenses.sort((a, b) => b.createdAt - a.createdAt)}/>
                </div>
            ) : (
                <p>No expenses found.</p>
            )
        }
    </div>
  )
}

export default ExpensesPage