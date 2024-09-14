/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */

// rrd imports
import { Link, useLoaderData } from "react-router-dom"

// helper functions
import { createBudget, createExpense, fetchData, wait } from "../helpers"

// components
import Intro from "../components/Intro"
import AddBudgetForm from "../components/AddBudgetForm"
import AddExpenseForm from "../components/AddExpenseForm"
import BudgetItem from "../components/BudgetItem"
import Table from "../components/Table"

// Library
import { toast } from "react-toastify"
import { ArrowRightIcon } from "@heroicons/react/24/solid"


// loader
export function dashboardLoader() {
  const userName = fetchData("userName")
  const budgets = fetchData("budgets")
  const expenses = fetchData("expenses")
  return { userName, budgets, expenses }
}

// action
export const dashboardAction = async ({ request }) => {
  await wait();

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data)

  // Check if the user is creating a new user or creating a budget or expense
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
  const { userName, budgets, expenses } = useLoaderData()
  return (
    <>
      {
        userName ? (
          <div className="dashboard">
            <div className="grid-sm">
              <h1>Welcome back, <span className="accent">{userName}</span></h1>
              {
                budgets && budgets.length > 0 ? (
                  <div className="grid-lg">
                    <div className="flex-lg">
                      <AddBudgetForm />
                      <AddExpenseForm budgets={budgets} />
                    </div>
                    <h2>Existing Budgets</h2>
                    <div className="budgets">
                      {
                        budgets.map((budget) => (
                          <BudgetItem key={budget.id} budget={budget} />
                        ))
                      }
                    </div>
                    {
                      expenses && expenses.length > 0 && (
                        <div className="grid-md">
                          <h2>Recent Expenses</h2>
                          <Table expenses={expenses
                            .sort((a, b) => b.createdAt - a.createdAt)
                            .slice(0, 8)}
                          />
                          {
                            expenses.length > 8 && (
                              <Link
                                to="expenses"
                                className="btn btn--dark"
                              >
                                View all expenses<ArrowRightIcon width={20} />
                              </Link>
                            )
                          }
                        </div>
                      )
                    }
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