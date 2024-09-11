/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */

// rrd imports
import { useLoaderData } from "react-router-dom"

// helper functions
import { createBudget, fetchData, wait } from "../helpers"

// components
import Intro from "../components/Intro"
import AddBudgetForm from "../components/AddBudgetForm"

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
      return toast.success("Budget created successfully")
    } catch (e) {
      throw new Error("There was a problem creating your budget")
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
            <p>Personal budgeting is the secret to financial freedom.</p>
            <p>Create a budget and get started!</p>
            <div className="grid-sm">
              <div className="grid-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        ) : <Intro />
      }
    </>
  )
}

export default Dashboard