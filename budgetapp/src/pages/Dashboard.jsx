/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */

// rrd imports
import { useLoaderData } from "react-router-dom"

// helper functions
import { createBudget, createExpense, fetchData, wait } from "../helpers"

// components
import Intro from "../components/Intro"
import AddBudgetForm from "../components/AddBudgetForm"
import AddExpenseForm from "../components/AddExpenseForm"

// Library
import { toast } from "react-toastify"


// loader
export function dashboardLoader() {
  const userName = fetchData("userName")
  const budgets = fetchData("budgets")
  return { userName, budgets }
}

// action
export const dashboardAction = async ({ request }) => {
  await wait();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data)

  // Check if the user is creating a new user or creating a budget
  if (_action === "newUser") {
    try {
      // Create a new user
      localStorage.setItem("userName", JSON.stringify(values.userName))
      // return toast message
      return toast.success(`Welcome, ${values.userName}`)
    } catch (e) {
      throw new Error("There was a problem creating your account")
    }
  }

  if (_action === "createBudget") {
    try {
      // Create a new budget
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount
      })
      // return toast message
      return toast.success(`Budget ${values.newBudget} created successfully!`)
    } catch (e) {
      throw new Error("There was a problem creating your budget")
    }
  }

  if (_action === "createExpense") {
    try {
      // Create a new expense
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget
      })
      // return toast message
      return toast.success(`Expense ${values.newExpense} created successfully!`)
    } catch (e) {
      throw new Error("There was a problem creating your expense")
    }
  }


}

function Dashboard() {
  const { userName, budgets } = useLoaderData()
  return (
    <>
      {
        userName ? (
          <div className="dashboard">
            <h1>Welcome back, <span className="accent">{userName}</span></h1>
            <div className="grid-sm">
              {
                budgets && budgets.length > 0 ? (
                  <div className="grid-lg">
                    <div className="flex-lg">
                      <AddBudgetForm />
                      <AddExpenseForm budgets={budgets} />
                    </div>
                  </div>
                ) : (
                  <div className="grid-sm">
                    <p>Personal budgeting is the secret to financial freedom.</p>
                    <p>Create a budget to get started!</p>
                    <AddBudgetForm />
                  </div>
                )
              }
            </div>

          </div>
        ) : <Intro />
      }
    </>
  )
}

export default Dashboard